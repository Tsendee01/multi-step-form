"use client"
import { useState } from "react";
import { z } from "zod";

const Step4 = () => {
  const [option, setOption] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">Finishing up</div>
      <div className="text-cool-gray mb-4 font-ubuntu-medium">Double-check everything looks OK before confirming.</div>
      <div>
        <div className="bg-magnolia p-2 rounded-lg">
          <div className="flex justify-between px-2">
            <div className="">
              <div className="font-ubuntu-bold text-marine-blue ">Arcade {`(${option === "monthly" ? "Monthly" : "Yearly"})`}</div>
              <div className="underline text-cool-gray">Change</div>
            </div>
            <div className="font-ubuntu-bold text-marine-blue flex justify-center items-center">{option === "monthly" ? `$${9}/mo` : `$${90}/yr`}</div>
          </div>
          <hr className="my-4"/>
          <div className="flex justify-between px-2 mb-4">
            <div className="text-cool-gray">Online service</div>
            <div className="text-marine-blue flex justify-center items-center">{option === "monthly" ? `$${1}/mo` : `$${10}/yr`}</div>
          </div>
          <div className="flex justify-between px-2 mb-4">
            <div className="text-cool-gray">Online service</div>
            <div className="text-marine-blue flex justify-center items-center">{option === "monthly" ? `$${1}/mo` : `$${10}/yr`}</div>
          </div>
        </div>

        <div className="flex justify-between px-4 my-4">
          <div className="text-cool-gray">Total {`(per ${option === "monthly" ? "month" : "year"})`}</div>
          <div className="text-purplish-blue font-ubuntu-bold flex justify-center items-center text-lg">{option === "monthly" ? `$${10}/mo` : `$${100}/yr`}</div>
        </div>
      </div>
    </div>
  );
};

export default Step4;