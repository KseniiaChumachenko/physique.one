import React from "react";
import { GridListing } from "../../components/GridListing";

// One big TODO
export const Pantry = () => {
  // const {
  //   pantries: { items, loading },
  // } = useStore();

  const items: never[] = [];
  const loading = false;
  return (
    <GridListing
      activeCard={false}
      items={items as any}
      loading={loading}
      onAddCardClick={() => {}}
    />
  );
};
