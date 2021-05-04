import React from "react";
import { observer } from "mobx-react-lite";
import {
  Card,
  CardActions,
  CardContent,
  GridListTileBar,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Trans } from "@lingui/react";
import { EditRounded, DeleteRounded } from "@material-ui/icons";

import { usePantryStore } from "./store/usePantryStore";
import { PantryCardType } from "./store/model";

const useStyles = makeStyles((theme) => ({
  tileImg: {
    height: "inherit",
    width: "auto",
  },
  nameContainer: {
    display: "flex",
  },
  editCard: {
    height: "inherit",
  },
}));

export const CategoryCard = observer(
  ({ data, loading, error, isActive }: PantryCardType) => {
    const classes = useStyles();
    const {
      handleSetActiveCard,
      handleResetActiveCards,
      handleDeleteFoodType,
      handleFoodTypeSubmit,
      handleFoodTypeUpdate,
    } = usePantryStore();
    //const [state, setMode] = useState(mode);

    return (
      <>
        {!isActive ? (
          <>
            <img
              src={data?.img_url as string}
              alt={"image url"}
              className={classes.tileImg}
            />
            <GridListTileBar
              title={data?.value}
              subtitle={data?.decription}
              actionIcon={
                <div className={classes.nameContainer}>
                  <IconButton
                    onClick={() => handleSetActiveCard(data!.value)}
                    children={<EditRounded />}
                  />
                  <IconButton
                    onClick={handleDeleteFoodType(data!.value)}
                    disabled={(data?.food_aggregate?.aggregate?.count || 0) > 0}
                    children={<DeleteRounded />}
                  />
                </div>
              }
            />
          </>
        ) : (
          <>
            <Card variant={"outlined"} className={classes.editCard}>
              <CardContent>
                <TextField
                  required={true}
                  error={error && !data?.value}
                  className={""}
                  variant={"outlined"}
                  label={<Trans>Category title</Trans>}
                  defaultValue={data?.value}
                  onChange={handleFoodTypeUpdate("value")}
                />
                <TextField
                  required={true}
                  error={error && !data?.decription}
                  className={""}
                  variant={"outlined"}
                  label={<Trans>Description</Trans>}
                  defaultValue={data?.decription}
                  onChange={handleFoodTypeUpdate("decription")}
                />
                <TextField
                  className={""}
                  variant={"outlined"}
                  label={<Trans>Image URL</Trans>}
                  defaultValue={data?.img_url}
                  onChange={handleFoodTypeUpdate("img_url")}
                />
              </CardContent>
              <CardActions>
                <Button
                  color={"primary"}
                  onClick={handleFoodTypeSubmit}
                  disabled={loading}
                >
                  <Trans>Save</Trans>
                </Button>
                <Button onClick={handleResetActiveCards} disabled={loading}>
                  <Trans>Cancel</Trans>
                </Button>
              </CardActions>
            </Card>
          </>
        )}
      </>
    );
  }
);
