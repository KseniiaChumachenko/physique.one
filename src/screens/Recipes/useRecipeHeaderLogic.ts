import { ChangeEvent, useState } from "react";
import {
  RecipePreloadedHookProps,
  RecipeQuery$data,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { useSearchParams } from "react-router-dom";

export function useRecipeHeaderLogic({
  data,
  recipeQR,
}: RecipePreloadedHookProps & {
  data?: RecipeQuery$data["recipe_connection"]["edges"][0]["node"];
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeRecipeId = searchParams.get("activeRecipeId") || "";
  const isDrawerOpen = searchParams.get("isDrawerOpen") || "";
  const isEditable = searchParams.get("isEditing") === "true";

  const setIsEditable = (isEditing: boolean) =>
    setSearchParams({
      activeRecipeId,
      isDrawerOpen,
      isEditing: String(isEditing),
    });

  const {
    refetch,
    mutations: { update, destroy },
  } = useRecipePreloaded(recipeQR);

  const [state, setState] = useState({
    name: data?.name || "",
    description: data?.description || "",
    link: data?.link || "",
    portions: data?.portions || 0,
  });

  const submit = () => {
    if (
      state?.name !== data?.name ||
      state?.description !== data?.description ||
      state?.link !== data?.link ||
      state?.portions !== data?.portions
    ) {
      update({
        variables: {
          id: base64ToUuid(data?.id || ""),
          set: state,
        },
        onCompleted: () => refetch(),
      });
    }
  };

  const handleSetState = (
    key: "name" | "description" | "link" | "portions"
  ) => (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let value: string | number = e.target.value;
    if (key === "portions") {
      value = value === "" ? 0 : Number(e.target.value);
    }
    setState({ ...state, [key]: value });
    submit();
  };

  const handleDelete = () =>
    destroy({ variables: { id: base64ToUuid(data?.id || "") } });

  return {
    isEditable,
    setIsEditable,
    state,
    handleSetState,
    handleDelete,
  };
}
