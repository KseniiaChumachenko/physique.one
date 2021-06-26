import React from "react";
import { observer } from "mobx-react-lite";
import { Trans } from "@lingui/react";
import { GridListing } from "src/components/GridListing";
import { useStore } from "../store/useStore";

export const FoodTypesListing = observer(() => {
  const {
    foodTypes: {
      categories,
      loading,
      error,
      handleAddNewCategoryStore,
      activeCard,
      handleFoodTypeSubmit,
      handleResetActiveCards,
      handleSetActiveCard,
      handleDeleteFoodType,
      handleFoodTypeUpdate,
    },
  } = useStore();

  return (
    <GridListing
      loading={loading}
      error={error}
      activeCard={!!activeCard}
      items={categories.map(({ isActive, loading, data }) => ({
        data: data?.value
          ? {
              value: data.value,
              img_url: data.img_url as string,
              description: data?.decription,
            }
          : undefined,
        loading,
        error,
        isActive,
        onSubmit: handleFoodTypeSubmit,
        onCancel: handleResetActiveCards,
        actions: [
          {
            children: <Trans>Edit</Trans>,
            onClick: () => handleSetActiveCard(data!.value),
          },
          {
            children: <Trans>Delete</Trans>,
            onClick: handleDeleteFoodType(data!.value),
            disabled: (data?.food_aggregate?.aggregate?.count || 0) > 0,
          },
        ],
        fields: [
          {
            textFieldProps: {
              required: true,
              error: error && !data?.value,
              label: <Trans>Category title</Trans>,
              defaultValue: data?.value,
              onChange: handleFoodTypeUpdate("value"),
            },
          },
          {
            textFieldProps: {
              required: true,
              error: error && !data?.decription,
              label: <Trans>Description</Trans>,
              defaultValue: data?.decription,
              onChange: handleFoodTypeUpdate("decription"),
            },
          },
          {
            textFieldProps: {
              label: <Trans>Image URL</Trans>,
              defaultValue: data?.img_url,
              onChange: handleFoodTypeUpdate("img_url"),
            },
          },
        ],
      }))}
      onAddCardClick={handleAddNewCategoryStore}
    />
  );
});
