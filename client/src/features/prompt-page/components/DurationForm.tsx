import { Calendar } from "@/components/ui/calendar";
import { WizardNavigation } from "./WizardNavigation";
import React, { useEffect } from "react";
import useFormState from "@/store/useStore";

export const DurationForm = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { setStepData } = useFormState();
  useEffect(() => {
    setStepData("duration", { date }); 
  }, [date, setStepData]);
  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-8 text-3xl font-bold ">Seberapa lama kamu pergi?</h1>
      </div>

      <div className="flex justify-center mt-8">
        <Calendar
          numberOfMonths={2}
          mode="range"
          selected={date}
          onSelect={setDate}
          required
        />
      </div>
      <WizardNavigation />
    </section>
  );
};
