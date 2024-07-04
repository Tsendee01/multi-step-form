"use client"

import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";

export const PrevStepButton = () => {
    const { step, setStep } = useMultiStepFormContext();
    
    const handlePrevStep = () => {
        setStep(step - 1);
    }

    if (step === 1 || step === 5) {
        return <div></div>;
    }

    return (
        <button onClick={handlePrevStep} className={`text-cool-gray text-sm py-2 px-4 hover:text-marine-blue`}>Go Back</button>
    );
}