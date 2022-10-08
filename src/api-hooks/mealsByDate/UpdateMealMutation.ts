import {graphql} from "react-relay";

export const UpdateMealMutation = graphql`
    mutation UpdateMealMutation($id: uuid!, $_set: meal_set_input = {}) {
        update_meal_by_pk(pk_columns: {id: $id}, _set: $_set) {
            date
            name
            time
        }
    }
`