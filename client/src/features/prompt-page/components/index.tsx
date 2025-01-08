import { Progress } from "@/components/ui/progress";
import { LocationForm } from "./LocationForm";
import { Wizard } from 'react-use-wizard';
import { useState } from "react";
import { DurationForm } from "./DurationForm";
import { TypeForm } from "./TypeForm";
import { Interested } from "./Interested";

export const PromptPage = () => {
  const [isProgress, setProgress] = useState(0)
  return (
    <div>
      <div className="container mx-auto min-h-screen pb-2 ">
        <header className="text-center p-4">
          <p>1 of 4</p>
        </header>
        <div className="py-14 flex justify-center items-center">
          {isProgress! ? ( <Progress value={isProgress} className="w-[60%] h-3" />) : ("")}
        </div>
        <Wizard onStepChange={(stepIndex) => setProgress(stepIndex * 25)}>
          <LocationForm />
          <DurationForm/>
          <TypeForm/>
          <Interested/>
        </Wizard>
      </div>
    </div>
  );
};
