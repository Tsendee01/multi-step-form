"use client"

import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";

export const PrevStepButton = () => {
    const { step } = useMultiStepFormContext();

    if (step === 1) {
        return <div></div>;
    }

    return (
        <button onClick={() => console.log("clicked!!!")} className={`text-cool-gray text-sm py-2 px-4 hover:text-marine-blue`}>Go Back</button>
    );
}