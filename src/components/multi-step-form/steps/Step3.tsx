"use client"
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { AddOnsCard } from "../parts/AddOnsCard";
import { useEffect, useState } from "react";
import { AddOnsCardData } from "@/constants/steps";
import useLocalStorage from "@/hooks/useLocalStroge";
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";
import { get } from "http";
import { Step3Schema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = z.infer<typeof Step3Schema>

const Step3 = () => {
  const { getValue, setLocalValue, formData, setStep } = useMultiStepFormContext();
  const [option, setOption] = useState<"monthly" | "yearly">("monthly")
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([])

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(Step3Schema),
  })

  useEffect(() => {
    const step2Data = getValue("step-2");
    if(step2Data) {
      setOption(step2Data.option)
    }
  }, [])

  useEffect(() => {
    if (Array.isArray(formData)) {
      setSelectedAddOns(formData)
    }
  }, [formData])

  const handleCardClick = (id: number) => {
    setSelectedAddOns((prevSelected) =>
      prevSelected?.includes(id)
        ? prevSelected?.filter((addOnId) => addOnId !== id)
        : [...(prevSelected ?? []), id]
    );
  };
  
  const onSubmit = (data: Inputs) => {
    setLocalValue("step-3", selectedAddOns);
    setStep(4);
  }

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">Pick add-ons</div>
      <div className="text-cool-gray mb-4 font-ubuntu-medium">Add-ons help enhance your gaming experience.</div>
      <form id="step-3" onSubmit={handleSubmit(onSubmit)}>
        <input id="adds" type="hidden" value="adds" {...register("adds")}/>
      </form>
      <div className="grid grid-cols-1 gap-4">
        {AddOnsCardData.map((card) => (
          <AddOnsCard key={card.id} card={card} option={option} checked={selectedAddOns?.includes(card.id)} onClick={() => handleCardClick(card.id)}/>
        ))}
      </div>
    </div>
  );
};

export default Step3;