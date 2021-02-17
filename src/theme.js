import { createMuiTheme } from "@material-ui/core";
import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(createMuiTheme({
      palette: {
        type: (typeof window !== "undefined" && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
      }
    }))

    const toggleTheme = () => {
        setTheme(
          createMuiTheme({
            palette: {
              type: theme.palette.type === 'dark' ? 'light' : 'dark'
            }
          })
        )
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }