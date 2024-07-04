import { ReactNode } from "react";
import { NextStepButton } from "./parts/NextStepButton";
import { PrevStepButton } from "./parts/PrevStepButton";
import { SideBarDesktop } from "./parts/SideBarDesktop";
import { SideBarMobile } from "./parts/SidebarMobile";
import { ResetStepButton } from "./parts/ResetStepButton";

export const MultiStepFormLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen bg-magnolia">
      <ResetStepButton />
      <div className="md:flex md:h-full md:justify-center md:items-center">
        <div className="md:flex md:gap-4 md:bg-white md:rounded-xl md:relative md:w-[70%] md:p-4 md:min-h-[70%] md:max-h-full md:shadow-xl">
          <SideBarMobile />
          <SideBarDesktop />
          <div className="relative w-full -mt-28 px-4 md:flex md:flex-1 md:flex-col md:justify-between md:px-10 md:mt-0">
            <div className="bg-white w-full h-full rounded-xl p-4 shadow-xl md:shadow-none md:rounded-none md:w-auto md:h-auto md:p-0">
              {children}
            </div>
            <div className="hidden md:flex justify-between pb-4">
              <PrevStepButton />
              <NextStepButton />
            </div>
          </div>
          <div className="w-full fixed left-0 bottom-0 bg-white h-16 flex justify-between items-center px-4 md:hidden">
            <PrevStepButton />
            <NextStepButton />
          </div>
        </div>
      </div>

      {/* <div className="hidden md:flex h-full justify-center items-center">
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
      </div> */}

    </div>
  );
};