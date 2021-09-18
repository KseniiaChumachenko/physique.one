import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { AddRounded } from "@material-ui/icons";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import {
  useAddFoodMutation,
  useDeleteFoodMutation,
  useUpdateFoodMutation,
} from "../../graphql/generated/graphql";
import { ToastMessage } from "../../components/ToastMessage";
import { AddFoodDialog } from "../components/AddFoodDialog";
import { State } from "../components/AddFoodDialog/useStore";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { useStore } from "../../store";

const useStyles = makeStyles((theme) => ({
  tableToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1),
  },
}));

export const FoodLibrary = () => {
  const classes = useStyles();
  const {
    userStore: { user },
    foodLibraryStore: { data, load: refetch },
  } = useStore();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState<any>(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  const [insert_food] = useAddFoodMutation({
    onCompleted: () => {
      refetch();
      setOpenAddDialog(false);
      setSuccess(true);
    },
    onError: (error1) => setError(error1.message),
  });

  const [update_food] = useUpdateFoodMutation({
    onCompleted: () => {
      refetch();
      setOpenEditDialog(false);
      setSuccess(true);
    },
    onError: (error1) => setError(error1.message),
  });

  const [delete_food] = useDeleteFoodMutation({
    onCompleted: () => {
      refetch();
      setSuccess(true);
    },
    onError: (error1) => setError(error1.message),
  });

  const handleAddFood = (props: State) => (event: any) => {
    insert_food({ variables: props });
    event.stopPropagation();
  };

  return (
    <TableContainer component={Paper}>
      <div className={classes.tableToolbar}>
        <Button
          variant={"text"}
          color={"primary"}
          onClick={() => setOpenAddDialog(true)}
          startIcon={<AddRounded />}
          children={<Trans>Add new food</Trans>}
        />
      </div>
      <Table size={"small"}>
        <TableHead>
          <TableCell children={<Trans>Name</Trans>} />
          <TableCell children={<Trans>Type</Trans>} />
          <TableCell children={<Trans>Energy (kcal|kJ)</Trans>} />
          <TableCell children={<Trans>Proteins</Trans>} />
          <TableCell children={<Trans>Carbohydrates</Trans>} />
          <TableCell children={<Trans>Fats</Trans>} />
          <TableCell
            children={
              <Trans>
                <b>Actions</b>
              </Trans>
            }
          />
        </TableHead>
        <TableBody>
          {data.map((row, key) => (
            <TableRow key={key}>
              <TableCell children={row.name} />
              <TableCell children={row.type} />
              <TableCell children={`${row.energy_cal} | ${row.energy_kj}`} />
              <TableCell children={row.proteins} />
              <TableCell children={row.carbohydrates} />
              <TableCell children={row.fats} />
              <TableCell>
                {row.u_id === user?.id && ( //TODO: https://github.com/KseniiaChumachenko/physique.one/issues/31 proper permissions
                  <EditDeleteButtonGroup
                    key={key}
                    onEditClick={() => setOpenEditDialog(row)}
                    onDeleteClick={() =>
                      delete_food({ variables: { id: row.id } })
                    }
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {!!openEditDialog && (
        <AddFoodDialog
          open={!!openEditDialog}
          setOpen={setOpenEditDialog}
          onConfirm={(state) => () =>
            update_food({ variables: { id: openEditDialog.id, ...state } })}
          {...openEditDialog}
        />
      )}
      {openAddDialog && (
        <AddFoodDialog
          open={openAddDialog}
          setOpen={setOpenAddDialog}
          onConfirm={handleAddFood}
          u_id={user?.id}
        />
      )}
      <ToastMessage
        severity={"error"}
        children={<>{error}</>}
        open={!!error}
        controledClose={() => setError("")}
      />
      <ToastMessage
        severity={"success"}
        children={<Trans>Library updated</Trans>}
        open={success}
        controledClose={() => setSuccess(false)}
      />
    </TableContainer>
  );
};
