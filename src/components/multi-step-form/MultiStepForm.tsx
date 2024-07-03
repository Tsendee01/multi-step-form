import { MultiStepFormLayout } from "./MultiStepFormLayout";
import { MultiStepFormContextProvider, useMultiStepFormContext } from "@/contexts/MultiStepFormContext";
import { Steps } from "./steps/Steps";

const MultiStepForm = () => { 
  return (
    <MultiStepFormContextProvider>
      <MultiStepFormLayout>
        <Steps />
      </MultiStepFormLayout>
    </MultiStepFormContextProvider>
  );
};

export default MultiStepForm;