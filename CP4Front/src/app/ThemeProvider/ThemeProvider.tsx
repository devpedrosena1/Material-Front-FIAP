<<<<<<< HEAD
import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string,
    toggleTheme : () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children} : {children : React.ReactNode}) => {
    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#333'
        document.body.style.color = theme === 'light' ? '#000' : '#fff'
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    );
=======
import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
    theme: string,
    toggleTheme : () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({children} : {children : React.ReactNode}) => {
    
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#333'
        document.body.style.color = theme === 'light' ? '#000' : '#fff'
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    );
>>>>>>> 788b1942779dbf5ee9c8610667bdb1171612ecee
}