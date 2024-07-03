import { ReactNode } from "react";
import Image from 'next/image'
import { NextStepButton } from "./parts/NextStepButton";
import { BackStepButton } from "./parts/BackStepButton";

const stepTitles = [{ number: 1, title: "Your Info" }, { number: 2, title: "Select Plan" }, { number: 3, title: "Add-Ons" }, { number: 4, title: "Summary" }];

export const MultiStepFormLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen bg-magnolia">
      <div className="md:hidden">
        <div className="w-full relative pb-52">
          <Image
            src="/assets/images/bg-sidebar-mobile.svg"
            layout="fill"
            objectFit="cover"
            alt="bg-sidebar-mobile"
          />
          <div className="absolute w-full z-10 flex gap-4 justify-center items-center mt-16 text-white">
            {
              stepTitles.map((stepTitle) => (
                <div key={stepTitle.number} className="border rounded-full h-10 w-10 flex justify-center items-center bg-light-blue text-marine-blue font-ubuntu-bold">
                  {stepTitle.number}
                </div>
              ))
            }
          </div>
        </div>
        <div className="relative w-full -mt-16 px-4 h-64">
          <div className="bg-white w-full h-full rounded-xl p-4 shadow-xl">
            {children}
          </div>
        </div>
        <div className="w-full fixed left-0 bottom-0 bg-white h-16 flex justify-between items-center px-4">
          <BackStepButton />
          <NextStepButton />
        </div>
      </div>

      <div className="hidden md:flex h-full justify-center items-center">
        <div className="flex gap-4 bg-white rounded-xl relative w-[70%] p-4 h-[70%] shadow-xl">
          <div className="relative w-1/3 flex justify-start items-start pt-8 pl-8">
            <Image
              src="/assets/images/bg-sidebar-desktop.svg"
              layout="fill"
              objectFit="cover"
              alt="bg-sidebar-mobile"
              className="rounded-lg"
            />
            <div className="relative flex flex-col gap-8 items-start text-white ">
              {
                stepTitles.map((stepTitle) => (
                  <div key={stepTitle.number} className="flex gap-4 items-center justifu-center">
                    <div className="border rounded-full h-10 w-10 flex justify-center items-center bg-light-blue text-marine-blue font-ubuntu-bold">
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
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {children}
            </div>
            <div className="flex justify-between px-8 pb-4">
              <BackStepButton />
              <NextStepButton />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};