import React, { Suspense, useEffect } from "react";
import { PreloadedQuery } from "react-relay";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CircularProgress,
  createStyles,
} from "@material-ui/core";
import { useUserPreloadedQuery, useUserQuery } from "../../api-hooks/user";
import { userQuery } from "../../graphql/__generated__/userQuery.graphql";
import { useStore } from "../../store";

export const useStyles = makeStyles((theme) =>
  createStyles({
    avatar: {
      height: theme.spacing(7),
      width: theme.spacing(7),
    },
  })
);

const Container = ({
  queryRef,
}: {
  queryRef: PreloadedQuery<userQuery, Record<string, unknown>>;
}) => {
  const { avatar } = useStyles();

  const data = useUserPreloadedQuery(queryRef);

  const user = data.users[0];

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
  const {
    userStore: {
      user: { id },
    },
  } = useStore();
  const [queryRef, loadQuery] = useUserQuery();

  useEffect(() => {
    loadQuery({ id });
  }, []);

  return (
    <Suspense fallback={<CircularProgress />}>
      {queryRef && <Container queryRef={queryRef} />}
    </Suspense>
  );
};
