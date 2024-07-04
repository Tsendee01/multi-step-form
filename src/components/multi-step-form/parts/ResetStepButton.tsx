"use client"

import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";

export const ResetStepButton = () => {
    const { step, clearAllData } = useMultiStepFormContext();

    if(step !== 5) return <div className="fixed"></div>

    return (
        <button onClick={() => clearAllData()} className={`text-magnolia text-sm py-2 px-4 rounded hover:opacity-[90%] bg-purplish-blue absolute bottom-0 z-20 m-4 md:m-8`}>Reset Step</button>
    );
}