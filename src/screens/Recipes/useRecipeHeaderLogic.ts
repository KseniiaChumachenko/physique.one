import { ChangeEvent, useEffect, useState } from "react";
import {
  RecipePreloadedHookProps,
  RecipeQuery$data,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { base64ToUuid } from "src/utils/base64-to-uuid";

export function useRecipeHeaderLogic({
  data,
  recipeQR,
}: RecipePreloadedHookProps & {
  data?: RecipeQuery$data["recipe_connection"]["edges"][0]["node"];
}) {
  const [isEditable, setIsEditable] = useState(false);

  const {
    mutations: { update, destroy },
  } = useRecipePreloaded(recipeQR);

  const [state, setState] = useState({
    name: data?.name || "",
    description: data?.description || "",
    link: data?.link || "",
    portions: data?.portions || 0,
  });

  useEffect(() => {
    setState({
      name: data?.name || "",
      description: data?.description || "",
      link: data?.link || "",
      portions: data?.portions || 0,
    });
  }, [data?.id]);

  const handleSetState = (
    key: "name" | "description" | "link" | "portions"
  ) => (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let value: string | number = e.target.value;
    if (key === "portions") {
      value = value === "" ? 0 : Number(e.target.value);
    }
    setState({ ...state, [key]: value });
  };

  const handleSubmit = () => {
    update({
      variables: {
        id: base64ToUuid(data?.id || ""),
        set: state,
      },
    });
  };

  const handleDelete = () =>
    destroy({ variables: { id: base64ToUuid(data?.id || "") } });

  return {
    isEditable,
    setIsEditable,
    state,
    handleSetState,
    handleSubmit,
    handleDelete,
  };
}
