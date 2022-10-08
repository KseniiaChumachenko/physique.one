import { v4 as uuid } from "uuid";
import {
  recipe_item_set_input,
  useAddRecipeItemMutation,
  useDeleteRecipeItemMutation,
  useUpdateRecipeItemMutation,
} from "src/api-hooks/recipeItem";
import {
  RecipePreloadedHookProps,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { RowData } from "src/components/CaloricTable/Row";
import {
  FoodPreloadedHookProps,
  useFoodPreloadedQuery,
} from "../../api-hooks/food";
import { useActiveUser } from "../../api-hooks/authorization";
import { base64ToUuid } from "../../utils/base64-to-uuid";

export function useRecipeItemLogic({
  foodQR,
  recipeQR,
  recipe_id,
}: FoodPreloadedHookProps & RecipePreloadedHookProps & { recipe_id: string }) {
  const { user } = useActiveUser();

  const { data } = useFoodPreloadedQuery(foodQR);
  const { refetch } = useRecipePreloaded(recipeQR);

  const [add] = useAddRecipeItemMutation();
  const [update] = useUpdateRecipeItemMutation();
  const [destroy] = useDeleteRecipeItemMutation();

  const onAdd = () => {
    const newRecipeId = uuid();
    const {
      id,
      carbohydrates,
      energy_cal,
      energy_kj,
      fats,
      proteins,
    } = data?.food_connection.edges[0].node;
    add({
      variables: {
        objects: [
          {
            carbohydrates,
            energy_cal,
            energy_kj,
            fats,
            food_id: base64ToUuid(id),
            proteins,
            recipe_id: base64ToUuid(recipe_id),
            u_id: user?.id,
            weight: 100,
            id: newRecipeId,
          },
        ],
        id: newRecipeId,
      },
      onCompleted: () => {
        refetch();
      },
    });
  };

  const onUpdate = ({ id, food_id, ...data }: Partial<RowData> & { id: string }) => {
    const weightCoefficient = (data.weight || 100) / 100;
    const adjustByCoefficient = (i = 0) => i * weightCoefficient;

    const calculatedFromPropsItem = {
      energy_cal: adjustByCoefficient(data.energy_cal),
      energy_kj: adjustByCoefficient(data.energy_kj),
      proteins: adjustByCoefficient(data.proteins),
      carbohydrates: adjustByCoefficient(data.carbohydrates),
      fats: adjustByCoefficient(data.fats),
    };

    const { food, isOwner, ...restData } = data;

    const set: recipe_item_set_input = {
      ...restData,
      ...calculatedFromPropsItem,
      food_id: base64ToUuid(food_id),
    };

    update({
      variables: {
        id: base64ToUuid(id),
        set,
      },
      onCompleted: () => {
        refetch();
      },
    });
  };

  const onRemove = (id: string) => {
    destroy({
      variables: { id: base64ToUuid(id) },
      onCompleted: () => {
        refetch();
      },
    });
  };

  return { onAdd, onUpdate, onRemove };
}
