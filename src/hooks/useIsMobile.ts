import { useMediaQuery, useTheme } from "@material-ui/core";

export function useIsMobile() {
  const theme = useTheme();
  return !useMediaQuery(theme.breakpoints.up("md"));
}
