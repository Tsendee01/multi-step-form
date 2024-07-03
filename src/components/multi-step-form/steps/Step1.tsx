"use client"
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Step1Schema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

type Inputs = z.infer<typeof Step1Schema>

const Step1 = () => {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(Step1Schema)
  })

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">
        Personal info
      </div>
      <div className="text-cool-gray mb-4 font-ubuntu-medium">
        Please provide your name, email address, and phone number.
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-marine-blue" htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            {...register("name")}
            className="w-full border border-light-gray text-marine-blue rounded p-2 mt-1"
          />
        </label>
        {errors.name?.message && (
          <p className='mt-2 text-sm text-red-400'>
            {errors.name.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-marine-blue" htmlFor="email">
          Email Address
          <input
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            {...register("email")}
            className="w-full border border-light-gray text-marine-blue rounded p-2 mt-1"
          />
        </label>
        {errors.email?.message && (
          <p className='mt-2 text-sm text-red-400'>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-marine-blue" htmlFor="phone">
          Phone Number
          <input
            id="phone"
            type="text"
            placeholder="e.g. +1 234 567 890"
            {...register("phone")}
            className="w-full border border-light-gray text-marine-blue rounded p-2 mt-1"
          />
        </label>
        {errors.phone?.message && (
          <p className='mt-2 text-sm text-red-400'>
            {errors.phone.message}
          </p>
        )}
      </div>

    </div>
  );
};

export default Step1;