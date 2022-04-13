import graphql from 'babel-plugin-relay/macro';

export const MealsByDateQuery = graphql`
  query MealsByDateQuery($date: date = "", $u_id: uuid) {
    meal_connection(
      where: { date: { _eq: $date }, u_id: { _eq: $u_id } }
      order_by: { time: asc_nulls_last }
      last: 1000000000
    ) {
      edges {
        node {
          id
          date
          time
          name
          meal_items_connection(last: 1000000000) {
            edges {
              node {
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
              cursor
            }
          }
          meal_items_aggregate(
            where: { meal: { date: { _eq: $date } }, u_id: { _eq: $u_id } }
          ) {
            aggregate {
              sum {
                carbohydrates
                energy_cal
                energy_kj
                fats
                proteins
              }
            }
          }
        }
        cursor
      }
    }
  }
`;
