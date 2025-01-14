import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StepData } from "@/utils/stepData";
import { ITravelPlan } from "@/utils/result";

type FormState = {
    stepData: StepData;
    travelPlan: ITravelPlan | null;
    setStepData: (step: keyof StepData, data: unknown) => void;
    setTravelPlan: (data: ITravelPlan) => void;
    resetForm: () => void;
  };

const useFormState = create<FormState>()(
    persist(
      (set) => ({
        stepData: {},
        travelPlan: null,
        setStepData: (step, data) =>
          set((state) => ({
            stepData: { ...state.stepData, [step]: data },
          })),
          setTravelPlan: (data) => set(() => ({ travelPlan: data })),
          resetForm: () => set({ stepData: {} }), 
      }),
      {
        name: "form-data-storage",
      }
    )
  );
  
  export default useFormState;