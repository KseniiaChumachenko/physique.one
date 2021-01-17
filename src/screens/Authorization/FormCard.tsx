import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Fade,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Trans } from "@lingui/react";
import { ArrowBackRounded } from "@material-ui/icons";
import { useStyles } from "./styled";

interface P {
  title: ReactNode;
  secondaryText?: ReactNode;
  onBackButtonClick?(): void;
  successMessage?: ReactNode;
  errorMessage?: ReactNode;
  fieldsSection: ReactNode;
  buttonsSection: ReactNode;
}

export const FormCard = ({
  title,
  secondaryText,
  onBackButtonClick,
  successMessage,
  errorMessage,
  fieldsSection,
  buttonsSection,
}: P) => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={700} mountOnEnter unmountOnExit>
      <div className={classes.section}>
        <Card className={classes.loginRoot} variant={"outlined"}>
          <CardHeader
            title={title}
            titleTypographyProps={{ variant: "h5" }}
            avatar={
              onBackButtonClick && (
                <IconButton onClick={onBackButtonClick}>
                  <ArrowBackRounded />
                </IconButton>
              )
            }
          />
          {successMessage ? (
            <CardContent>
              <Alert severity="success">
                <AlertTitle>
                  <Trans>Success</Trans>
                </AlertTitle>
                {successMessage}
              </Alert>
            </CardContent>
          ) : (
            <CardContent>
              {!!errorMessage && (
                <CardContent>
                  <Alert severity="error">
                    <AlertTitle>
                      <Trans>Error</Trans>
                    </AlertTitle>
                    {errorMessage}
                  </Alert>
                </CardContent>
              )}
              {secondaryText && (
                <Typography variant={"body1"} color={"textSecondary"}>
                  {secondaryText}
                </Typography>
              )}

              <div className={classes.credentials}>{fieldsSection}</div>
              <div className={classes.buttonBlock}>{buttonsSection}</div>
            </CardContent>
          )}
        </Card>
      </div>
    </Fade>
  );
};
