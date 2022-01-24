import { useMutation } from "react-relay";
import { AddRecipeItemMutation } from "./__generated__/AddRecipeItemMutation.graphql";
import { UpdateRecipeItemMutation } from "./__generated__/UpdateRecipeItemMutation.graphql";
import { DeleteRecipeItemMutation } from "./__generated__/DeleteRecipeItemMutation.graphql";
import { AddRecipeItemMutation as AddRecipeItemMutationDocument } from "./AddRecipeItemMutation";
import { UpdateRecipeItemMutation as UpdateRecipeItemMutationDocument } from "./UpdateRecipeItemMutation";
import { DeleteRecipeItemMutation as DeleteRecipeItemMutationDocument } from "./DeleteRecipeItemMutation";

export * from "./__generated__/AddRecipeItemMutation.graphql";
export * from "./__generated__/UpdateRecipeItemMutation.graphql";
export * from "./__generated__/DeleteRecipeItemMutation.graphql";

export const useAddRecipeItemMutation = () =>
  useMutation<AddRecipeItemMutation>(AddRecipeItemMutationDocument);
export const useUpdateRecipeItemMutation = () =>
  useMutation<UpdateRecipeItemMutation>(UpdateRecipeItemMutationDocument);
export const useDeleteRecipeItemMutation = () =>
  useMutation<DeleteRecipeItemMutation>(DeleteRecipeItemMutationDocument);
