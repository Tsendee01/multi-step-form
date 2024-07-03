"use client"
import { useForm, useFormContext } from "react-hook-form";
import { Step2Schema } from "@/lib/schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlanCard } from "../parts/PlanCard";
import { useState } from "react";
import { Step2CardData } from "@/constants/steps";

type Inputs = z.infer<typeof Step2Schema>

const Step2 = () => {
  const [option, setOption] = useState<"monthly" | "yearly">("monthly")
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(Step2Schema)
  })

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">
        Select your plan
      </div>

      <div className="text-cool-gray mb-4 font-ubuntu-medium">
        You have the option of monthly or yearly billing.
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:my-8">
        {Step2CardData.map((card) => (
          <PlanCard key={card.id} card={card} option={option}/>
        ))}
      </div>
        <div className="bg-magnolia rounded-xl flex justify-center items-center gap-2 py-2 mt-4 md:mt-0">
          <div className="text-sm text-cool-gray font-ubuntu-bold">Monthly</div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-9 h-5 bg-marine-blue rounded-full peer peer-focus:ring-2 peer-focus:ring-light-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.5px] after:start-[4px] after:bg-white after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all"></div>
          </label>
          <div className="text-sm text-cool-gray font-ubuntu-bold">Yearly</div>
        </div>
    </div>
  );
};

export default Step2;