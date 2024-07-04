"use client"

import { clear } from "console";
import { useEffect, useState } from "react";


const useLocalStorage = (key: string, initialValue: string | number | boolean) => {
    const [stepOldData, setStepOldData] = useState({});
    const [oldStep, setOldStep] = useState(initialValue);


    useEffect(() => {
        try {
            if (key === "step") {
                const value = window.localStorage.getItem(key);
                if (value !== null) {
                    const step = parseInt(value);
                    setOldStep(step);
                }
            } else {
                const value = window.localStorage.getItem(key);
                if (value !== null) {
                    setStepOldData(JSON.parse(value));
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const setLocalValue = (newKey: string, newValue: string | number | boolean) => {
        try {
            if (newKey === "step") {
                window.localStorage.setItem(newKey, newValue.toString());
            } else {
                window.localStorage.setItem(newKey, JSON.stringify(newValue));
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getValue = (key: string) => {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.log(error);
        }
    }

    const clearAllData = () => {
        try {
            console.log("Clearing all data...");
            window.localStorage.clear();
            setOldStep(initialValue);
            setStepOldData({});
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return { oldStep, stepOldData, setLocalValue, getValue, clearAllData }
};

export default useLocalStorage;