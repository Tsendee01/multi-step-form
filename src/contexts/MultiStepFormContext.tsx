"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStroge";
import { get } from "http";
//create context hook
export const useMultiStepFormContext = () => useContext(multiStepFormContext);

//create context
export const multiStepFormContext = createContext<any>("");

//MultiStepFormContext
export const MultiStepFormContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const {oldStep, setLocalValue, stepOldData, getValue, clearAllData} = useLocalStorage("step", 1);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    useEffect(() => {
      if(typeof oldStep === "number") {
        setStep(oldStep)
      }
      if(stepOldData) {
        setFormData(stepOldData);
      }
    }, [oldStep, stepOldData]);

    useEffect(() => {
      const value = getValue(`step-${step}`);
      if(value) {
        setFormData(value);
      }
      setLocalValue("step", step);
    }, [step]);

    return (
        <multiStepFormContext.Provider value={{step, setStep, formData, setLocalValue, getValue, clearAllData }}>
            {children}
        </multiStepFormContext.Provider>
    )
}