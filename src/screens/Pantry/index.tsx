import React from "react";
import { observer } from "mobx-react-lite";
import { GridListing } from "../../components/GridListing";

// One big TODO
export const Pantry = observer(() => {
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
});
