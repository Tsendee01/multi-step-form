"use client"
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { AddOnsCard } from "../parts/AddOnsCard";
import { useState } from "react";
import { AddOnsCardData } from "@/constants/steps";


const Step3 = () => {
  const [option, setOption] = useState<"monthly" | "yearly">("monthly")

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">Pick add-ons</div>
      <div className="text-cool-gray mb-4 font-ubuntu-medium">Add-ons help enhance your gaming experience.</div>
      <div className="grid grid-cols-1 gap-4">
        {AddOnsCardData.map((card) => (
          <AddOnsCard card={card} checked={false} option={option}/>
        ))}
      </div>
    </div>
  );
};

export default Step3;