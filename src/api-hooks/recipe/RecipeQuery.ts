import { graphql } from "react-relay";

export const RecipeQuery = graphql`
  query RecipeQuery($id: uuid!) {
      recipe_connection(where: {id: {_eq: $id}}){
          edges {
              node {
                  id
                  name
                  description
                  u_id
                  link
                  portions
                  isOwner
                  recipe_items(order_by: {increment: asc}) {
                      id
                      u_id
                      isOwner
                      food {
                          id
                          name
                          energy_cal,
                          energy_kj,
                          proteins,
                          carbohydrates,
                          fats,
                          type,
                          u_id,
                          weight,
                          food_brand {
                              name
                          }
                      }
                      proteins
                      fats
                      carbohydrates
                      energy_cal
                      energy_kj
                      weight
                  }
              }
          }
      }
}`
