import React, { ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  CardHeader,
  createStyles,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { LinkRounded } from "@material-ui/icons";
import { t } from "@lingui/macro";
import { RecipeQuery$data } from "src/api-hooks/recipes";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      display: "flex",
    },
    description: {
      marginTop: theme.spacing(1),
    },
    editableDescription: {
      width: "100%",
    },
    flexBox: {
      display: "flex",
      alignItems: "center",
    },
    icon: {
      display: "flex",
      alignItems: "center",
      marginRight: theme.spacing(2),
    },
    portionsContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: theme.spacing(1),
    },
    portionInput: {
      //marginLeft: theme.spacing(2),
      width: theme.spacing(30),
    },
  })
);
type HeaderData = Pick<
  RecipeQuery$data["recipe_connection"]["edges"][0]["node"],
  "name" | "description" | "link" | "portions" | "isOwner"
>;

export type RecipeCardHeaderProps = {
  data: HeaderData;
  isEditable: boolean;
  setIsEditable(p: boolean): void;
  setNewValue(
    key: string
  ): (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onDelete(): void;
  onClose(): void;
};

export const RecipeCardHeader = ({
  data,
  isEditable,
  setIsEditable,
  setNewValue,
  onDelete,
  onClose,
}: RecipeCardHeaderProps) => {
  const classes = useStyles();
  return (
    <>
      <CardHeader
        title={
          isEditable ? (
            <TextField
              defaultValue={data.name}
              placeholder={t`Enter recipe name`}
              label={t`Recipe name`}
              type={"text"}
              onChange={setNewValue("name")}
              className={classes.title}
            />
          ) : (
            <div className={classes.title}>{data.name}</div>
          )
        }
        action={
          <div className={classes.flexBox}>
            {data?.isOwner && (
              <EditDeleteButtonGroup
                colored={true}
                onEditClick={
                  !isEditable ? () => setIsEditable(true) : undefined
                }
                onConfirmClick={
                  isEditable ? () => setIsEditable(false) : undefined
                }
                onCancelClick={isEditable ? undefined : onClose}
                onDeleteClick={isEditable ? onDelete : undefined}
              />
            )}
          </div>
        }
      />
      <CardContent>
        {isEditable ? (
          <div className={classes.flexBox}>
            <TextField
              placeholder={t`Add external link`}
              label={t`External link`}
              defaultValue={data.link}
              type={"text"}
              onChange={setNewValue("link")}
              className={classes.editableDescription}
            />
          </div>
        ) : (
          <div className={classes.flexBox}>
            <div className={classes.icon}>
              <LinkRounded />
            </div>
            {data.link ? (
              <Link href={data.link} target="_blank" rel="noopener">
                {data.link}
              </Link>
            ) : (
              <Typography color={"textSecondary"}>
                <i>{t`No link`}</i>
              </Typography>
            )}
          </div>
        )}

        {isEditable ? (
          <TextField
            placeholder={t`Enter description`}
            label={t`Description`}
            defaultValue={data.description}
            type={"text"}
            onChange={setNewValue("description")}
            className={classes.editableDescription}
          />
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {data.description || t`No description`}
          </Typography>
        )}

        {data?.isOwner && isEditable && (
          <div className={classes.portionsContainer}>
            <TextField
              type={"number"}
              label={t`How many portions are here?`}
              error={!data.portions}
              value={data.portions}
              onChange={setNewValue("portions")}
              inputProps={{
                step: 1,
                min: 0,
                max: 100,
                type: "number",
              }}
              className={classes.portionInput}
            />
          </div>
        )}
      </CardContent>
    </>
  );
};
