"use client"
import { useFormContext } from "react-hook-form";
import { z } from "zod";

export const step1Schema = z.object({
  name: z.string().nonempty("Name is required"),
});

const Step1 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label className="block mb-2">
        Name:
        <input
          type="text"
          {...register("name")}
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      {errors.name && <p className="text-red-500">{(errors.name as any).message}</p>}
    </div>
  );
};

export default Step1;