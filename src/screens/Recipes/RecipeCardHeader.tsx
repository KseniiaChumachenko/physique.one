import React, { useState } from "react";
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
import {
  RecipePreloadedHookProps,
  RecipeQuery$data,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";
import { useIsMobile } from "../../hooks/useIsMobile";

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
  "id" | "isOwner" | "name" | "description" | "link" | "portions"
>;

export type RecipeCardHeaderProps = RecipePreloadedHookProps & {
  data?: HeaderData;
  isEditable: boolean;
  setIsEditable(p: boolean): void;
  setNewValue(key: string, value: any): void;
  onClose(): void;
};

// TODO: error handling
export const RecipeCardHeader = ({
  data,
  isEditable,
  setIsEditable,
  setNewValue,
  onClose,
  recipeQR,
}: RecipeCardHeaderProps) => {
  const classes = useStyles();
  const {
    mutations: { update, destroy },
  } = useRecipePreloaded(recipeQR);

  const [updatedName, setUpdatedName] = useState(data?.name);
  const [updatedDesc, setUpdatedDesc] = useState(data?.description);
  const [updatedLink, setUpdatedLink] = useState(data?.link);
  const [updatedPortioning, setUpdatedPortioning] = useState(
    data?.portions || 0
  );

  const handleSubmit = () => {
    update({
      variables: {
        id: base64ToUuid(data?.id || ""),
        set: {
          name: updatedName,
          description: updatedDesc,
          link: updatedLink,
          portions: updatedPortioning,
        },
      },
    });
    setIsEditable(false);
  };

  const handleDelete = () =>
    destroy({ variables: { id: base64ToUuid(data?.id || "") } });

  return (
    <>
      <CardHeader
        title={
          isEditable ? (
            <TextField
              defaultValue={updatedName}
              placeholder={t`Enter recipe name`}
              label={t`Recipe name`}
              type={"text"}
              onChange={(event: any) => setUpdatedName(event?.target?.value)}
              className={classes.title}
            />
          ) : (
            <div className={classes.title}>{updatedName}</div>
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
                onCancelClick={
                  isEditable ? () => setIsEditable(false) : onClose
                }
                onDeleteClick={isEditable ? handleDelete : undefined}
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
              defaultValue={updatedLink}
              type={"text"}
              onChange={(event: any) => setUpdatedLink(event?.target?.value)}
              className={classes.editableDescription}
            />
          </div>
        ) : (
          <div className={classes.flexBox}>
            <div className={classes.icon}>
              <LinkRounded />
            </div>
            {updatedLink ? (
              <Link href={updatedLink} target="_blank" rel="noopener">
                {updatedLink}
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
            defaultValue={updatedDesc}
            type={"text"}
            onChange={(event: any) => setUpdatedDesc(event?.target?.value)}
            className={classes.editableDescription}
          />
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {updatedDesc || t`No description`}
          </Typography>
        )}

        {data?.isOwner && isEditable && (
          <div className={classes.portionsContainer}>
            <TextField
              type={"number"}
              label={t`How many portions are here?`}
              error={!updatedPortioning}
              value={updatedPortioning}
              onChange={(event) => {
                setUpdatedPortioning(
                  event.target.value === "" ? 0 : Number(event.target.value)
                );
              }}
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
