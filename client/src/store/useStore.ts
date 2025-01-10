import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StepData } from "@/utils/interface";

type FormState = {
    stepData: StepData;
    setStepData: (step: keyof StepData, data: any) => void;
    resetForm: () => void;
  };

const useFormState = create<FormState>()(
    persist(
      (set) => ({
        stepData: {}, 
        setStepData: (step, data) =>
          set((state) => ({
            stepData: { ...state.stepData, [step]: data },
          })),
        resetForm: () => set({ stepData: {} }), 
      }),
      {
        name: "form-data-storage",
      }
    )
  );
  
  export default useFormState;