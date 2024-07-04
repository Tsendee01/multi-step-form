"use client"
import { useForm, useFormContext } from "react-hook-form";
import { Step2Schema } from "@/lib/schema";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlanCard } from "../parts/PlanCard";
import { useEffect, useState } from "react";
import { Step2CardData } from "@/constants/steps";
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";

type Inputs = z.infer<typeof Step2Schema>

const Step2 = () => {
  const [option, setOption] = useState<"monthly" | "yearly">("monthly")
  const [plan, setPlan] = useState<number>(1)
  const { setStep, setLocalValue, formData } = useMultiStepFormContext();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(Step2Schema),
    defaultValues: {
      option: formData ? formData.option === "yearly" : false,
      plan: formData ? formData.plan : 1,
    },
  })

  const optionChecked = watch("option");

  useEffect(() => {
    if (formData?.option && formData?.plan) {
      setOption(formData.option)
      setPlan(formData.plan)
    }
    setValue("option", formData ? (formData.option === "monthly" ? false : true) : false)
  }, [formData])

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption(e.target.checked ? "yearly" : "monthly")
  }

  const onSubmit = (data: Inputs) => {
    const planData = { plan, option }
    setLocalValue("step-2", planData);
    setStep(3);
  }

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">
        Select your plan
      </div>

      <div className="text-cool-gray mb-4 font-ubuntu-medium">
        You have the option of monthly or yearly billing.
      </div>
      <form id="step-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" {...register("plan")} value={plan} id="plan" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:my-8">
          {Step2CardData.map((card) => (
            <PlanCard key={card.id} card={card} option={option} setPlan={setPlan} plan={plan} />
          ))}
        </div>
        <div className="bg-magnolia rounded-xl flex justify-center items-center gap-2 py-2 mt-4 md:mt-0">
          <div className={`text-sm text-cool-gray font-ubuntu-bold ${option === "monthly" ? "text-marine-blue" : "text-cool-gray"}`}>Monthly</div>
          <label className="inline-flex items-center cursor-pointer">
            <input id="option" type="checkbox" className="sr-only peer" checked={option === "yearly"} {...register("option", { onChange: changeOption })}/>
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-9 h-5 bg-marine-blue rounded-full peer peer-focus:ring-2 peer-focus:ring-light-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.5px] after:start-[4px] after:bg-white after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all"></div>
          </label>
          <div className={`text-sm font-ubuntu-bold ${option === "yearly" ? "text-marine-blue" : "text-cool-gray"}`}>Yearly</div>
        </div>
      </form>
    </div>
  );
};

export default Step2;