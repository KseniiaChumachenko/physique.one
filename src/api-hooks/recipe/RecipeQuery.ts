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
                  recipe_items {
                      id
                      u_id
                      isOwner
                      food {
                          id
                          name
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
