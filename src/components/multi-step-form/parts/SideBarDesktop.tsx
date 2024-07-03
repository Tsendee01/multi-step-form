"use client"
import useLocalStorage from "@/hooks/useLocalStroge";
import { useEffect, useState } from "react";
import Image from "next/image";
import { stepTitles } from "@/constants/steps";
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";

export const SideBarDesktop = () => {
    const { step } = useMultiStepFormContext();
    return (
        <div className="relative w-1/3 flex justify-start items-start pt-8 pl-8">
            <Image
              src="/assets/images/bg-sidebar-desktop.svg"
              layout="fill"
              objectFit="cover"
              alt="bg-sidebar-desktop"
              className="rounded-lg"
            />
            <div className="relative flex flex-col gap-8 items-start text-white ">
              {
                stepTitles.map((stepTitle) => (
                  <div key={stepTitle.number} className="flex gap-4 items-center justifu-center">
                    <div className={`border rounded-full h-10 w-10 flex justify-center items-center font-ubuntu-bold ${step === stepTitle.number ? 'bg-light-blue text-marine-blue' : ""}`}>
                      {stepTitle.number}
                    </div>
                    <div className="">
                      <div className="text-sm text-cool-gray">
                        STEP {stepTitle.number}
                      </div>
                      <div className="font-ubuntu-bold text-light-gray uppercase">{stepTitle.title}</div>
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    );
}