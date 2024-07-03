"use client"
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStroge";
//create context hook
export const useMultiStepFormContext = () => useContext(multiStepFormContext);

//create context
export const multiStepFormContext = createContext<any>("");

//MultiStepFormContext
export const MultiStepFormContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
    const {state, setValue} = useLocalStorage("step", 1);
    const [step, setStep] = useState(1);
  
    useEffect(() => {
      if(typeof state === "string") {
        setStep(parseInt(state))
      }
    }, []);

    useEffect(() => {
        setValue("step", step);
    }, [step]);

    return (
        <multiStepFormContext.Provider value={{step, setStep}}>
            {children}
        </multiStepFormContext.Provider>
    )
}