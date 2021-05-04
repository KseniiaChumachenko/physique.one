import { useContext } from "react";
import { StoreContext } from "../../../store";

export function usePantryStore() {
  const { pantryStore } = useContext(StoreContext);
  return pantryStore;
}
