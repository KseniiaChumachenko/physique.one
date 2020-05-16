import { useLocalStore } from "mobx-react-lite";
import { Food_Type_Enum } from "../../../../graphql/generated/graphql";

export interface State {
  name?: string;
  type?: Food_Type_Enum;
  energy_cal?: number;
  energy_kj?: number;
  proteins?: number;
  carbohydrates?: number;
  fats?: number;
}

export function useStore({
  name,
  type,
  energy_cal,
  energy_kj,
  proteins,
  carbohydrates,
  fats,
}: State) {
  const store = useLocalStore(
    () => ({
      name: name,
      setName: (newName: string) => {
        store.name = newName;
      },
      type: type || Food_Type_Enum.Vegetables,
      setType: (newType: Food_Type_Enum) => {
        store.type = newType;
      },
      proteins: proteins,
      setProteins: (newProteins: number) => {
        store.proteins = newProteins;
      },
      energy_cal: energy_cal,
      setEnergyCal: (newEnergy: number) => {
        store.energy_cal = newEnergy;
      },
      energy_kj: energy_kj,
      setEnergyKj: (newEnergy: number) => {
        store.energy_kj = newEnergy;
      },
      carbohydrates: carbohydrates,
      setCarbohydrates: (newCarbs: number) => {
        store.carbohydrates = newCarbs;
      },
      fats: fats,
      setFats: (newFats: number) => {
        store.fats = newFats;
      },
    }),
    { name, type, proteins, carbohydrates, fats }
  );
  return store;
}
