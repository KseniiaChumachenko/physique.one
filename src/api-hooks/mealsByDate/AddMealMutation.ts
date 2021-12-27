import { graphql } from "react-relay";

export const AddMealMutation = graphql`
  mutation AddMealMutation(
    $id: uuid!
    $name: String
    $date: date
    $time: time
    $data: [meal_item_insert_input!]!
    $u_id: uuid!
  ) {
    insert_meal_one(
      object: {
        id: $id
        date: $date
        time: $time
        meal_items: { data: $data }
        name: $name
        u_id: $u_id
      }
    ) {
      id
      name
    }
  }
`;
