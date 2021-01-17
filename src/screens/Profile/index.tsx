import React from "react";
import { useUser } from "../context/userContext";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  createStyles,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    user: { email, user_name, first_name, last_name, fb_picture_url },
  } = useUser();
  return (
    <div>
      <Card>
        <CardHeader
          avatar={
            fb_picture_url && <Avatar className={avatar} src={fb_picture_url} />
          }
          title={first_name + " " + last_name}
          subheader={
            "🚧 Sorry, development of the section is still in progress"
          } //TODO
        />
      </Card>
    </div>
  );
};
