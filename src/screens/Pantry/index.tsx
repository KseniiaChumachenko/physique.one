import React from "react";
import { observer } from "mobx-react-lite";
import { GridListing } from "../../components/GridListing";
import { useStore } from "./store/useStore";

export const Pantry = observer(() => {
  const {
    pantries: { items, loading },
  } = useStore();

  return (
    <GridListing items={items} loading={loading} onAddCardClick={() => {}} />
  );
});
