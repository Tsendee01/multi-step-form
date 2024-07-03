import { useFormContext } from "react-hook-form";
import { z } from "zod";

export const step2Schema = z.object({
  email: z.string().email("Invalid email address"),
});

const Step2 = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          {...register("email")}
          className="border rounded px-2 py-1 w-full"
        />
      </label>
      {errors.email && <p className="text-red-500">{(errors.email as any).message}</p>}
    </div>
  );
};

export default Step2;