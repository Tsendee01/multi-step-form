import { ReactNode } from "react";
import { NextStepButton } from "./parts/NextStepButton";
import { PrevStepButton } from "./parts/PrevStepButton";
import { SideBarDesktop } from "./parts/SideBarDesktop";
import { SideBarMobile } from "./parts/SidebarMobile";

export const MultiStepFormLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen bg-magnolia">
      <div className="md:hidden">
        <SideBarMobile />
        <div className="relative w-full -mt-28 px-4">
          <div className="bg-white w-full h-full rounded-xl p-4 shadow-xl">
            {children}
          </div>
        </div>
        <div className="w-full fixed left-0 bottom-0 bg-white h-16 flex justify-between items-center px-4">
          <PrevStepButton />
          <NextStepButton />
        </div>
      </div>

      <div className="hidden md:flex h-full justify-center items-center">
        <div className="flex gap-4 bg-white rounded-xl relative w-[70%] p-4 min-h-[70%] max-h-full shadow-xl">
          <SideBarDesktop />
          <div className="flex-1 flex flex-col justify-between px-10">
            {children}
            <div className="flex justify-between pb-4">
              <PrevStepButton />
              <NextStepButton />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};