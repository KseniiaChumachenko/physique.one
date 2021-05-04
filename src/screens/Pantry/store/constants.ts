import { Food_Type } from "../../../graphql/generated/graphql";

export const EMPTY_FOOD_TYPE = {
  loading: false,
  error: undefined,
  data: {
    value: "",
    img_url: "",
    decription: "",
    food_aggregate: {
      aggregate: { count: 0 },
    },
  } as Food_Type,
  initialState: {
    value: "",
    img_url: "",
    decription: "",
    food_aggregate: {
      aggregate: { count: 0 },
    },
  } as Food_Type,
  isActive: true,
  isNewCategory: true,
};
