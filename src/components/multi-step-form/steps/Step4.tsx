"use client"
import { useMultiStepFormContext } from "@/contexts/MultiStepFormContext";
import { useEffect, useState } from "react";
import { Step2CardData, AddOnsCardData } from "@/constants/steps";
import { useForm } from "react-hook-form";

const Step4 = () => {
  const [option, setOption] = useState<"monthly" | "yearly">("monthly")
  const [plan, setPlan] = useState(Step2CardData[0]);
  const [addOns, setAddOns] = useState<number[]>([]);
  const { getValue, setStep } = useMultiStepFormContext();

  const {
    handleSubmit,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    const step2Data = getValue("step-2");
    setOption(step2Data.option)
    const plan = Step2CardData.find((data) => data.id === step2Data.plan);
    setPlan(plan ? plan : Step2CardData[0]);

    const step3Data = getValue("step-3");
    setAddOns(step3Data)
  }, [])

  const getTotalPrice = () => {
    let total = 0;
    total += option === "monthly" ? plan.price : plan.price * 10;

    if(addOns.length > 0) {
      addOns.forEach((addOnId) => {
        const addOn = AddOnsCardData.find((data) => data.id === addOnId);
        if(addOn) total += option === "monthly" ? addOn.price : addOn.price * 10;
      })
    }
    return total;
  }

  const onSubmit = () => {
    setStep(5);
  }

  return (
    <div className="py-4 p-2">
      <div className="font-ubuntu-bold text-2xl md:text-3xl text-marine-blue my-4">Finishing up</div>
      <div className="text-cool-gray mb-4 font-ubuntu-medium">Double-check everything looks OK before confirming.</div>
      <div>
        <div className="bg-magnolia p-2 rounded-lg">
          <div className="flex justify-between px-2">
            <div className="">
              <div className="font-ubuntu-bold text-marine-blue ">{plan.label} {`(${option === "monthly" ? "Monthly" : "Yearly"})`}</div>
              <div className="underline text-cool-gray cursor-pointer" onClick={() => setStep(2)}>Change</div>
            </div>
            <div className="font-ubuntu-bold text-marine-blue flex justify-center items-center">{option === "monthly" ? `$${plan.price}/mo` : `$${plan.price * 10}/yr`}</div>
          </div>
          <hr className="my-4" />
          {addOns.length > 0 && (
            addOns.map((addOnId) => {
              const addOn = AddOnsCardData.find((data) => data.id === addOnId);
              return (
                <div key={addOn?.id} className="flex justify-between px-2 mb-4">
                  <div className="text-cool-gray">{addOn?.label}</div>
                  <div className="text-marine-blue flex justify-center items-center">{option === "monthly" ? `$${addOn?.price}/mo` : `$${addOn ? (addOn?.price * 10) : 0}/yr`}</div>
                </div>
              )
            }))
          }
        </div>
        <form id="step-4" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" value={getTotalPrice()} id="totalPrice"/>
        </form>

        <div className="flex justify-between px-4 my-4">
          <div className="text-cool-gray">Total {`(per ${option === "monthly" ? "month" : "year"})`}</div>
          <div className="text-purplish-blue font-ubuntu-bold flex justify-center items-center text-lg">{option === "monthly" ? `$${getTotalPrice()}/mo` : `$${getTotalPrice()}/yr`}</div>
        </div>
      </div>
    </div>
  );
};

export default Step4;