"use client"
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Step1Schema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";
import { useEffect, useMemo } from "react";

type Inputs = z.infer<typeof Step1Schema>

const Step1 = () => {
  const { setStep, setLocalValue, formData } = useMultiStepFormContext();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(Step1Schema),
    defaultValues: formData || {},
    values: formData
  })

  const onSubmit = (data: Inputs) => {
    setLocalValue("step-1", data);
    setStep(2);
  }

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">
        Personal info
      </div>
      <div className="text-cool-gray mb-4 font-ubuntu-medium">
        Please provide your name, email address, and phone number.
      </div>
      <form id="step-1" onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-4">
          <label className="block mb-2 text-marine-blue" htmlFor="name">

            <div className="flex justify-between items-center">
                Name
                {errors.name?.message && (
                <p className='text-sm text-red-400'>
                  {errors.name.message}
                </p>
              )}
            </div>
            <input
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              {...register("name")}
              className="w-full border border-light-gray text-marine-blue rounded p-2 mt-1"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-marine-blue" htmlFor="email">
            <div className="flex justify-between items-center">
                Email Address 
                {errors.email?.message && (
                <p className='text-sm text-red-400'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <input
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email")}
              className="w-full border border-light-gray text-marine-blue rounded p-2 mt-1"
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-marine-blue" htmlFor="phone">
            <div className="flex justify-between items-center">
                Phone Number 
                {errors.phone?.message && (
                <p className='text-sm text-red-400'>
                  {errors.phone.message}
                </p>
              )}
            </div>
            <input
              id="phone"
              type="text"
              placeholder="e.g. +1 234 567 890"
              {...register("phone")}
              className="w-full border border-light-gray text-marine-blue rounded p-2 mt-1"
            />
          </label>
        </div>

      </form>
    </div>
  );
};

export default Step1;