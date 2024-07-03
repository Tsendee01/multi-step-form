"use client"

import useLocalStorage from "@/hooks/useLocalStroge";
import { useEffect, useState } from "react";

export const NextStepButton = () => {
    return (
        <button onClick={() => console.log("asdasd")} className="bg-marine-blue text-magnolia text-sm py-2 px-4 rounded hover:opacity-[90%]">Next Step</button>
    );
}