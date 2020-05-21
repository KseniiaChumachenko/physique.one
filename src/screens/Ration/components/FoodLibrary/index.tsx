import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { AddRounded } from "@material-ui/icons";
import {
  Button,
  LinearProgress,
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
  useFoodSelectFieldListingQuery,
  useUpdateFoodMutation,
} from "../../../../graphql/generated/graphql";
import { ToastMessage } from "../../../../components/ToastMessage";
import { AddFoodDialog } from "../AddFoodDialog";
import { State } from "../AddFoodDialog/useStore";
import { EditDeleteButtonGroup } from "../EditDeletButtonGroup";

const useStyles = makeStyles((theme) => ({
  tableToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: theme.spacing(1),
  },
}));

interface Props {}

export const FoodLibrary = ({}: Props) => {
  const classes = useStyles();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();
  const { data, loading, refetch } = useFoodSelectFieldListingQuery({
    onError: (error1) => setError(error1),
  });

  const [insert_food] = useAddFoodMutation({
    onCompleted: () => {
      refetch();
      setOpenAddDialog(false);
      setSuccess(true);
    },
    onError: (error1) => setError(error1),
  });

  const [update_food] = useUpdateFoodMutation({
    onCompleted: () => {
      refetch();
      setOpenEditDialog(false);
      setSuccess(true);
    },
    onError: (error1) => setError(error1),
  });

  const [delete_food] = useDeleteFoodMutation({
    onCompleted: () => {
      refetch();
      setSuccess(true);
    },
    onError: (error1) => setError(error1),
  });

  if (loading) {
    return <LinearProgress />;
  }

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
      <Table>
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
          {data?.food.map((row) => (
            <TableRow>
              <TableCell children={row.name} />
              <TableCell children={row.type} />
              <TableCell children={`${row.energy_cal} | ${row.energy_kj}`} />
              <TableCell children={row.proteins} />
              <TableCell children={row.carbohydrates} />
              <TableCell children={row.fats} />
              <TableCell>
                <EditDeleteButtonGroup
                  onEditClick={() => setOpenEditDialog(true)}
                  onDeleteClick={() =>
                    delete_food({ variables: { id: row.id } })
                  }
                />
              </TableCell>

              <AddFoodDialog
                open={openEditDialog}
                setOpen={setOpenEditDialog}
                onConfirm={(state) => () =>
                  update_food({ variables: { id: row.id, ...state } })}
                {...row}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddFoodDialog
        open={openAddDialog}
        setOpen={setOpenAddDialog}
        onConfirm={handleAddFood}
      />
      <ToastMessage
        severity={"error"}
        children={error?.message as any}
        open={!!error}
        controledClose={() => setError(false)}
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
