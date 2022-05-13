import React from "react";
import { t } from "@lingui/macro";
import { Alert, AlertTitle } from "@material-ui/lab";

export class ErrorBoundary extends React.Component<
  any,
  { hasError: boolean; message?: string }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error?.message };
  }

  // componentDidCatch(error, errorInfo) {
  //     // You can also log the error to an error reporting service
  //     console.log(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Alert severity={"error"}>
          <AlertTitle>{t`Error`}</AlertTitle>
          {this.state.message && <span>{this.state.message}</span>}
        </Alert>
      );
    }

    return this.props.children;
  }
}
