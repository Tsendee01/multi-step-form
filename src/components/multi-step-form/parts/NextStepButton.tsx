"use client"

import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";

export const NextStepButton = () => {
    const { step } = useMultiStepFormContext();

    if(step === 5) return <div></div>

    return (
        <button type="submit" form={`step-${step}`} className={`text-magnolia text-sm py-2 px-4 rounded hover:opacity-[90%] ${step === 4 ? "bg-purplish-blue" : "bg-marine-blue"}`}>{step === 4 ? "Confirm" : "Next Step"}</button>
    );
}