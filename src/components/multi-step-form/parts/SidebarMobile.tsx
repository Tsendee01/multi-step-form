"use client"

import useLocalStorage from "@/hooks/useLocalStroge";
import { useEffect, useState } from "react";
import Image from "next/image";
import { stepTitles } from "@/constants/steps";
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";

export const SideBarMobile = () => {
  const { step } = useMultiStepFormContext();
  
    return (
        <div className="w-full relative pb-52">
          <Image
            src="/assets/images/bg-sidebar-mobile.svg"
            layout="fill"
            objectFit="cover"
            alt="bg-sidebar-mobile"
          />
          <div className="absolute w-full z-10 flex gap-4 justify-center items-center mt-6 text-white">
            {
              stepTitles.map((stepTitle) => (
                <div key={stepTitle.number} className={`border rounded-full h-10 w-10 flex justify-center items-center font-ubuntu-bold ${step === stepTitle.number ? 'bg-light-blue text-marine-blue' : ""}`}>
                  {stepTitle.number}
                </div>
              ))
            }
          </div>
        </div>
    );
}