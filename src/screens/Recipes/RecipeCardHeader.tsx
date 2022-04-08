import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  CardHeader,
  createStyles,
  TextField,
  Typography,
  Box,
  Input,
  Link,
} from "@material-ui/core";
import { LinkRounded } from "@material-ui/icons";
import { Trans } from "@lingui/macro";
import { useActiveUser } from "src/api-hooks/authorization";
import {
  RecipePreloadedHookProps,
  useRecipePreloaded,
} from "src/api-hooks/recipe";
import { base64ToUuid } from "src/utils/base64-to-uuid";
import { EditDeleteButtonGroup } from "../components/EditDeletButtonGroup";

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      maxWidth: 250,
      cursor: "pointer",
    },
    description: {
      margin: theme.spacing(1),
      cursor: "pointer",
    },
    editableDescription: {
      width: "100%",
    },
  })
);

export interface RecipeCardHeaderProps extends RecipePreloadedHookProps {
  id: string;
  name?: string | null;
  link?: string | null;
  portions?: number | null;
  description?: string | null;
  u_id: string;
}

// TODO: error handling
export const RecipeCardHeader = ({
  id,
  name,
  link,
  portions,
  description,
  u_id,

  recipeQR,
}: RecipeCardHeaderProps) => {
  const classes = useStyles();
  const {
    mutations: { update, destroy },
  } = useRecipePreloaded(recipeQR);
  const { user } = useActiveUser();
  const isPermitted = user?.id === u_id;
  const [isEdit, setIsEdit] = useState<boolean | undefined>();

  const [updatedName, setUpdatedName] = useState(name || "Enter recipe name");
  const [updatedDesc, setUpdatedDesc] = useState(description);
  const [updatedLink, setUpdatedLink] = useState(link);
  const [updatedPortioning, setUpdatedPortioning] = useState(portions || 0);

  const handleSubmit = () => {
    update({
      variables: {
        id: base64ToUuid(id),
        set: {
          name: updatedName,
          description: updatedDesc,
          link: updatedLink,
          portions: updatedPortioning,
        },
      },
    });
    setIsEdit(false);
  };

  const handleDelete = () => destroy({ variables: { id: base64ToUuid(id) } });

  return (
    <>
      <CardHeader
        title={
          isEdit ? (
            <Box display={"flex"} alignItems={"center"}>
              <TextField
                defaultValue={updatedName}
                type={"text"}
                onChange={(event: any) => setUpdatedName(event?.target?.value)}
                className={classes.title}
              />
            </Box>
          ) : (
            <div className={classes.title}>{updatedName}</div>
          )
        }
        action={
          <Box display={"flex"} alignItems={"center"}>
            {isPermitted &&
              (isEdit ? (
                <Box display={"flex"} alignItems={"center"}>
                  <Typography id="input-slider" gutterBottom>
                    <Trans>
                      For how many portions did you enter the recipe?
                    </Trans>
                  </Typography>
                  <Input
                    error={!updatedPortioning}
                    value={updatedPortioning}
                    margin="dense"
                    onChange={(event) => {
                      setUpdatedPortioning(
                        event.target.value === ""
                          ? 0
                          : Number(event.target.value)
                      );
                    }}
                    inputProps={{
                      step: 1,
                      min: 0,
                      max: 100,
                      type: "number",
                    }}
                  />
                </Box>
              ) : (
                <Typography
                  gutterBottom
                  variant={"overline"}
                  color={"textSecondary"}
                >
                  {/*TODO: TRANS*/}
                  Base recipe is for <strong>{updatedPortioning}</strong>{" "}
                  portions
                </Typography>
              ))}

            {isPermitted && (
              <EditDeleteButtonGroup
                onConfirmClick={isEdit ? handleSubmit : undefined}
                onEditClick={!isEdit ? () => setIsEdit(true) : undefined}
                onCancelClick={isEdit ? () => setIsEdit(false) : undefined}
                onDeleteClick={handleDelete}
              />
            )}
          </Box>
        }
      />
      <CardContent>
        {isEdit ? (
          <Box display={"flex"} alignItems={"center"}>
            <Box marginRight={2} display={"flex"} alignItems={"center"}>
              <LinkRounded />
            </Box>
            <TextField
              placeholder={"Add external link"} //TODO: TRANS
              defaultValue={updatedLink}
              type={"text"}
              onChange={(event: any) => setUpdatedLink(event?.target?.value)}
              className={classes.editableDescription}
            />
          </Box>
        ) : (
          <Box display={"flex"} alignItems={"center"} justifySelf={"center"}>
            <Box display={"flex"} marginRight={2}>
              <LinkRounded />
            </Box>
            {updatedLink ? (
              <Link href={updatedLink} target="_blank" rel="noopener">
                {updatedLink}
              </Link>
            ) : (
              <Typography color={"textSecondary"}>
                <i>
                  <Trans>Add external link</Trans>
                </i>
              </Typography>
            )}
          </Box>
        )}

        {isEdit ? (
          <TextField
            placeholder={"Enter description"}
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
            {updatedDesc || <Trans>Enter description</Trans>}
          </Typography>
        )}
      </CardContent>
    </>
  );
};
