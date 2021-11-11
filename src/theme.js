import { createMuiTheme } from "@material-ui/core";
import { theme } from "../data.json";

export const lightTheme = createMuiTheme(
  (theme && theme.light && Object.keys(theme.light).length > 0) ? theme.light :
  {
    palette: {
      type: "light"
    }
  }
)

export const darkTheme = createMuiTheme(
  (theme && theme.dark && Object.keys(theme.dark).length > 0) ? theme.dark :
  {
    palette: {
      type: "dark"
    }
  }
)