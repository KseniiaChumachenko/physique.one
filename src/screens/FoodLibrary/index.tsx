import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { v4 as uuid } from "uuid";
import { Trans } from "@lingui/react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { ToastMessage } from "../../components/ToastMessage";
import { AddFoodDialog } from "../components/AddFoodDialog";
import { State } from "../components/AddFoodDialog/useStore";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { useStore } from "../../store";

export const FoodLibrary = observer(() => {
  const {
    userStore: { user },
    foodLibraryStore: { data, add, update, remove },
    screenStore: { setAction },
  } = useStore();
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState<any>(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setAction({
      label: "+ Add new item",
      onClick: () => setOpenAddDialog(true),
    });
    return () => {
      setAction(null);
    };
  }, []);

  const handleAddFood = (props: State) => (event: any) => {
    add(
      { ...props, id: uuid() },
      () => {
        setOpenAddDialog(false);
        setSuccess(true);
      },
      (error1) => setError(error1?.map((e) => e.message)[0] || "")
    );
    event.stopPropagation();
  };

  const handleUpdateFood = (state: State) => () =>
    update(
      { id: openEditDialog.id, ...state },
      () => {
        setOpenEditDialog(false);
        setSuccess(true);
      },
      (error1) => setError(error1?.map((e) => e.message)[0] || "")
    );

  const handleDeleteFood = (id: string) => () => {
    remove(
      id,
      () => {
        setSuccess(true);
      },
      (error1) => setError(error1?.map((e) => e.message)[0] || "")
    );
  };

  return (
    <TableContainer component={Paper}>
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
                    onDeleteClick={handleDeleteFood(row.id)}
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
          onConfirm={handleUpdateFood}
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
});
