import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [isDarkMode, setDarkMode] = useState(() => localStorage.theme === "dark");
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }
    useEffect(() => {
        const 
    }, [isDarkMode])
}