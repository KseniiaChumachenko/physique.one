import React, { Dispatch, SetStateAction, useState } from "react";
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
import { EditRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  tileImg: {
    height: "inherit",
    width: "auto",
  },
  editCard: {
    height: "inherit",
  },
}));

interface P {
  mode: "edit" | "regular";
  name?: string;
  img_url?: string;
  description?: string;
  setAddCategory?: Dispatch<SetStateAction<boolean>>;
}

export function CategoryCard({
  mode = "regular",
  name = "",
  description = "",
  img_url = "",
  setAddCategory,
}: P) {
  const [state, setMode] = useState(mode);
  const [title, setTitle] = useState(name);
  const [img, setImg] = useState(img_url);
  const [desc, setDesc] = useState(description);
  const [unit, setUnit] = useState("");
  const classes = useStyles();
  return (
    <>
      {state === "regular" ? (
        <>
          <img src={img} alt={"image url"} className={classes.tileImg} />
          <GridListTileBar
            title={title}
            subtitle={desc}
            actionIcon={
              <IconButton
                onClick={() => setMode("edit")}
                children={<EditRounded />}
              />
            }
          />
        </>
      ) : (
        <>
          <Card variant={"outlined"} className={classes.editCard}>
            <CardContent>
              <TextField
                className={""}
                variant={"outlined"}
                label={<Trans>Category title</Trans>}
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                className={""}
                variant={"outlined"}
                label={<Trans>Description</Trans>}
                defaultValue={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
              <TextField
                className={""}
                variant={"outlined"}
                label={<Trans>Image URL</Trans>}
                defaultValue={img_url}
                onChange={(e) => setImg(e.target.value)}
              />
              <TextField
                className={""}
                variant={"outlined"}
                label={<Trans>Unit</Trans>}
                defaultValue={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </CardContent>
            <CardActions>
              <Button color={"primary"}>
                <Trans>Save</Trans>
              </Button>
              <Button
                onClick={
                  setAddCategory
                    ? () => setAddCategory(false)
                    : () => setMode("regular")
                }
              >
                <Trans>Cancel</Trans>
              </Button>
            </CardActions>
          </Card>
        </>
      )}
    </>
  );
}
