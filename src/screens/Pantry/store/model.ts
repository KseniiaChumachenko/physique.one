import { ApolloError } from "@apollo/client";
import { Food_Type } from "../../../graphql/generated/graphql";

type PantryCardType = {
  data?: Food_Type;
  loading?: boolean;
  error?: ApolloError;

  initialState?: Food_Type;
  isActive?: boolean;
  isNewCategory?: boolean;
};

export { Food_Type, PantryCardType };
