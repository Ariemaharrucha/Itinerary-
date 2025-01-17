import { Progress } from "@/components/ui/progress";
import { LocationForm } from "./components/LocationForm";
import { Wizard } from 'react-use-wizard';
import { useState } from "react";
import { DurationForm } from "./components/DurationForm";
import { TypeForm } from "./components/TypeForm";
import { Interested } from "./components/Interested";
import { Toaster } from "@/components/ui/toaster"

export const PromptPage = () => {
  const [isProgress, setProgress] = useState(20);
  const [isStep, setStep] = useState<number>(1);

  const handleStep = (stepIndex: number) => {
    const progressValue = (stepIndex + 1) * 20; 
    setProgress(progressValue);
    setStep(stepIndex + 1); 
  }
  
  return (
    <div>
      <Toaster/>
      <div className="container mx-auto min-h-screen pb-2 ">
        <header className="text-center p-4">
          <p>{isStep} of 4</p>
        </header>
        <div className="py-14 flex justify-center items-center">
          {isProgress! ? ( <Progress value={isProgress} className="w-[60%] h-3" />) : ("")}
        </div>
        <Wizard onStepChange={(stepIndex) => handleStep(stepIndex)}>
          <LocationForm />
          <DurationForm/>
          <TypeForm/>
          <Interested/>
        </Wizard>
      </div>
    </div>
  );
};
