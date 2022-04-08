import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CircularProgress,
  createStyles,
} from "@material-ui/core";
import { useActiveUser } from "src/api-hooks/authorization";
import {
  UserPreloadedHookProps,
  useUser,
  useUserPreloadedQuery,
} from "src/api-hooks/user";
import { base64ToUuid } from "src/utils/base64-to-uuid";

export const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      height: theme.spacing(7),
      width: theme.spacing(7),
    },
  })
);

const Container = ({ userQR }: UserPreloadedHookProps) => {
  const { avatar } = useStyles();

  const { data } = useUserPreloadedQuery(userQR);

  const user = data.users_connection.edges[0]?.node;

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

export const Profile = () => {
  const { user } = useActiveUser();
  const { queryReference } = useUser({ id: base64ToUuid(user?.id || "") });

  return (
    <Suspense fallback={<CircularProgress />}>
      {queryReference && <Container userQR={queryReference} />}
    </Suspense>
  );
};
