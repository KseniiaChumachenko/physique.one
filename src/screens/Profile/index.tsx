import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, CardHeader, createStyles } from "@material-ui/core";
import { useStore } from "src/store";

export const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      height: theme.spacing(7),
      width: theme.spacing(7),
    },
  })
);

export const Profile = () => {
  const { avatar } = useStyles();
  const {
    userStore: { user },
  } = useStore();

  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            user?.fb_picture_url && (
              <Avatar className={avatar} src={user?.fb_picture_url} />
            )
          }
          title={user?.first_name + " " + user?.last_name}
          subheader={
            "🚧 Sorry, development of the section is still in progress"
          } //TODO
        />
      </Card>
    </div>
  );
};
