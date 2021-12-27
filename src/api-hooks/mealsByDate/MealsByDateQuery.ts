import { graphql } from "react-relay";

export const MEALS_BY_DATE_CONNECTION = "MealsByDateQuery_meals";

export const MealsByDateQuery = graphql`
  query MealsByDateQuery($date: date = "", $u_id: uuid) {
    meal(
      where: { date: { _eq: $date }, u_id: { _eq: $u_id } }
      order_by: { time: asc_nulls_last }
    ) {
      id
      date
      time
      name
      meal_items {
        id
        u_id
        meal_id
        food
        foodDesc {
          id
          name
          energy_cal
          energy_kj
          carbohydrates
          fats
          proteins
        }
        weight
        carbohydrates
        proteins
        fats
        energy_cal
        energy_kj

        recipe_id
        recipe {
          name
        }
      }
    }
  }
`;
