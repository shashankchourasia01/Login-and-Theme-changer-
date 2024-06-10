import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",   //Variable
    darkTheme : () => {},  //Method
    lightTheme : () => {},  //Method
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}    