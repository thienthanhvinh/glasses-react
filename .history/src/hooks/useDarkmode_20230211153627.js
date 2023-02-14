import { useState } from "react";

export default function useDarkMode() {
    const [isDarkMode, setDarkMode] = useState(() => localStorage.theme);
}