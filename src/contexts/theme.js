import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light", // default theme aka initial state             
    darkTheme : ()=>{},
    lightTheme : ()=>{}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}