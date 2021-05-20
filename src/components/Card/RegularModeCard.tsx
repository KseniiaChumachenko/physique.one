import React, { ComponentProps } from "react";
import * as M from "@material-ui/core";
import { MoreVertRounded } from "@material-ui/icons";
import { useStyles } from "./useStyles";

export interface CardData {
  value: string;
  img_url?: string;
  description?: string;
}

export interface RegularModeCardProps {
  data?: CardData;
  actions: ComponentProps<typeof M.MenuItem>[];
  users?: ComponentProps<typeof M.Avatar>[];
}

export const RegularModeCard = ({
  data,
  actions,
  users,
}: RegularModeCardProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <M.Card className={classes.root}>
      <M.CardHeader
        title={data?.value}
        action={
          <>
            <M.IconButton onClick={handleClick}>
              <MoreVertRounded />
            </M.IconButton>
            <M.Menu open={!!anchorEl} anchorEl={anchorEl} onClose={handleClose}>
              {actions.map((action, i) => (
                <M.MenuItem key={i} {...action} />
              ))}
            </M.Menu>
          </>
        }
      />
      <M.CardMedia
        image={data?.img_url}
        title={"img"}
        className={classes.tileImg}
      />

      <M.CardContent>
        <M.Typography variant="body2" color="textSecondary" component="p">
          {data?.description}
        </M.Typography>
      </M.CardContent>
      <M.CardActions>
        {users?.map((u, i) => (
          <M.Avatar key={i} className={classes.avatar} {...u} />
        ))}
      </M.CardActions>
    </M.Card>
  );
};
