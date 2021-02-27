import { createMuiTheme } from "@material-ui/core";
import { createContext, useState } from "react";
import { theme } from "../data.json";

const lightTheme = createMuiTheme(
  (theme && theme.light && Object.keys(theme.light).length > 0) ? theme.light :
  {
    palette: {
      type: "light"
    }
  }
)

const darkTheme = createMuiTheme(
  (theme && theme.dark && Object.keys(theme.dark).length > 0) ? theme.dark :
  {
    palette: {
      type: "dark"
    }
  }
)

// const light = {
//   palette: {
//     type: "light"
//   }
// }

// const dark = {
//   palette: {
//     type: "dark"
//   }
// }

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    
    // const [theme, setTheme] = useState(createMuiTheme({
    //   palette: {
    //     type: (typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
    //   }
    // }))
    const [theme, setTheme] = useState(
      (typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) ? darkTheme : lightTheme
    )

    const toggleTheme = () => {
        // setTheme(
        //   createMuiTheme({
        //     palette: {
        //       type: theme.palette.type === 'dark' ? 'light' : 'dark'
        //     }
        //   })
        // )
        setTheme(theme.palette.type === 'dark' ? lightTheme : darkTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }