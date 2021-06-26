import { useContext } from "react";
import { StoreContext } from "../../../store";

export function useStore() {
  const { foodTypes, pantries, userStore } = useContext(StoreContext);
  return { foodTypes, pantries, userStore };
}
