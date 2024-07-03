"use client"

import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: string | number | boolean) => {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        try {
            const value = window.localStorage.getItem(key);
            console.log("========>", value);
            if (value !== null) {
                setState(JSON.parse(value));
            }
        } catch (error) {
            console.log(error);
        }
    }, [key]);

    const setValue = (key: string, value: string | number | boolean) => {
        try {
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(value));
                setState(value);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return {state, setValue}
};

export default useLocalStorage;