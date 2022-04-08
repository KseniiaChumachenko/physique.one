import React, { Suspense, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Trans } from "@lingui/react";
import {
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
  DeleteFoodMutationVariables,
  FoodPreloadedHookProps,
  UpdateFoodMutationVariables,
  useFood,
  useFoodPreloadedQuery,
} from "src/api-hooks/food";
import {
  AddFoodBrandMutationVariables,
  FoodBrandPreloadedHookProps,
  useFoodBrand,
} from "src/api-hooks/foodBrand";
import { ToastMessage } from "../../components/ToastMessage";
import { AddFoodDialog } from "../components/AddFoodDialog";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { useStore } from "../../store";
import {
  FoodTypePreloadedHookProps,
  useFoodType,
} from "../../api-hooks/foodType";
import { base64ToUuid } from "../../utils/base64-to-uuid";
import { useActiveUser } from "../../api-hooks/authorization";

export interface FetchedFoods {
  readonly weight: number | null;
  readonly u_id: string | null;
  readonly type: string;
  readonly proteins: number;
  readonly name: string;
  readonly id: string;
  readonly fats: number;
  readonly energy_kj: number;
  readonly energy_cal: number;
  readonly carbohydrates: number;
  readonly brand: string | null;
  readonly food_brand: {
    readonly name: string;
    readonly id: string;
  } | null;
}

const FoodLibraryContent = observer(
  ({
    foodQR,
    foodBrandQR,
    foodTypeQR,
  }: FoodPreloadedHookProps &
    FoodBrandPreloadedHookProps &
    FoodTypePreloadedHookProps) => {
    const { data, mutations: foodMutations } = useFoodPreloadedQuery(foodQR);
    const { user } = useActiveUser();
    const {
      screenStore: { setAction },
    } = useStore();
    const [openAddDialog, setOpenAddDialog] = useState(false);
    const [editDialogProps, setEditDialogProps] = useState<
      FetchedFoods | undefined
    >();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<Error | undefined>();

    useEffect(() => {
      setAction({
        label: "+ Add new item",
        onClick: () => setOpenAddDialog(true),
      });
      return () => {
        setAction(null);
      };
    }, []);

    const handleAddFood = (variables: AddFoodBrandMutationVariables) => {
      foodMutations.add({
        variables,
        onCompleted: () => setSuccess(true),
        onError: (error1) => setError(error1),
      });
    };

    const handleUpdateFood = (variables: UpdateFoodMutationVariables) =>
      foodMutations.update({
        variables,
        onCompleted: () => {
          setEditDialogProps(undefined);
          setSuccess(true);
        },
        onError: (error1) => setError(error1),
      });

    const handleDeleteFood = (variables: DeleteFoodMutationVariables) => () =>
      foodMutations.destroy({
        variables,
        onCompleted: () => setSuccess(true),
        onError: (error1) => setError(error1),
      });

    return (
      <TableContainer component={Paper}>
        <Table size={"small"}>
          <TableHead>
            <TableCell children={<Trans>Name</Trans>} />
            <TableCell children={<Trans>Brand</Trans>} />
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
            {data.food_connection.edges.map(
              ({ node: row }, key) =>
                row && (
                  <TableRow key={key}>
                    <TableCell children={row.name} />
                    <TableCell children={row.food_brand?.name} />
                    <TableCell children={row.type} />
                    <TableCell
                      children={`${row.energy_cal} | ${row.energy_kj}`}
                    />
                    <TableCell children={row.proteins} />
                    <TableCell children={row.carbohydrates} />
                    <TableCell children={row.fats} />
                    <TableCell>
                      {row.u_id === user?.id && ( //TODO: https://github.com/KseniiaChumachenko/physique.one/issues/31 proper permissions
                        <EditDeleteButtonGroup
                          key={key}
                          onEditClick={() => setEditDialogProps(row as any)}
                          onDeleteClick={handleDeleteFood({
                            id: base64ToUuid(row?.id),
                          })}
                        />
                      )}
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
        {!!editDialogProps && (
          <AddFoodDialog
            foodTypeQR={foodTypeQR}
            foodBrandQR={foodBrandQR}
            open={!!editDialogProps}
            setOpen={setEditDialogProps}
            onUpdate={handleUpdateFood}
            updateProps={editDialogProps}
            u_id={user?.id || ""}
          />
        )}
        {openAddDialog && (
          <AddFoodDialog
            foodTypeQR={foodTypeQR}
            foodBrandQR={foodBrandQR}
            open={openAddDialog}
            setOpen={setOpenAddDialog}
            onAdd={handleAddFood}
            u_id={user?.id || ""}
          />
        )}
        <ToastMessage
          severity={"error"}
          children={<>{error}</>}
          open={!!error}
          controledClose={() => setError(undefined)}
        />
        <ToastMessage
          severity={"success"}
          children={<Trans>Library updated</Trans>}
          open={success}
          controledClose={() => setSuccess(false)}
        />
      </TableContainer>
    );
  }
);

export const FoodLibrary = () => {
  const { queryReference: foodQR } = useFood({});
  const { queryReference: foodBrandQR } = useFoodBrand({});
  const { queryReference: foodTypeQR } = useFoodType({});

  const references = foodQR && foodBrandQR && foodTypeQR;

  return (
    <Suspense fallback={<LinearProgress />}>
      {references && (
        <FoodLibraryContent
          foodQR={foodQR}
          foodBrandQR={foodBrandQR}
          foodTypeQR={foodTypeQR}
        />
      )}
    </Suspense>
  );
};
