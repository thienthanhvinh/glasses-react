import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [isDarkMode, setDarkMode] = useState(() => localStorage.s === "dark");
    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }
    useEffect(() => {
        const html = window.document.documentElement;
        const prev = isDarkMode ? "light" : "dark";
        html.classList.remove(prev);
        const next = isDarkMode ? "dark" : "light";
        html.classList.add(next);
        localStorage.setItem("theme", next);
    }, [isDarkMode])
    return {isDarkMode, toggleDarkMode};
}