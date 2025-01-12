import useFormState from "@/store/useStore";
import { WizardNavigation } from "./WizardNavigation";
import { useState } from "react";
import { generateItenray } from "../services/api";
import { vacationInterests } from "@/constant/interests";

export const Interested = () => {
  const { stepData, setStepData, resetForm } = useFormState();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    Array.isArray(stepData?.preferences) ? stepData.preferences : []
  );
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleTogglePreferences = (value: string) => {
    const updatedInterests = selectedInterests.includes(value)
      ? selectedInterests.filter((item) => item !== value)
      : [...selectedInterests, value];
    setSelectedInterests(updatedInterests);
    setStepData("preferences", updatedInterests);
  };

  const hanlesubmit = async () => {
    try {
      setLoading(true)
      const response = await generateItenray(stepData);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
      resetForm();
      setSelectedInterests([]);
    }
  };

  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-10 mb-8 text-4xl font-bold ">
          Beritahu kami apa yang Anda minati
        </h1>
        <p className="text-slate-400 text-lg pb-12">Pilih semua yang berlaku</p>
      </div>

      <div className=" flex flex-wrap gap-4 justify-center">
        {vacationInterests.map((interest) => (
          <label
            key={interest.value}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-4 text-base font-semibold hover:bg-slate-200 has-[:checked]:bg-green-400 cursor-pointer"
          >
            <input
              type="checkbox"
              value={interest.value}
              className="appearance-none hidden checked:border-transparent w-5 h-5 rounded"
              onChange={() => handleTogglePreferences(interest.value)}
              checked={selectedInterests.includes(interest.value)}
            />
            <span>{interest.label}</span>
          </label>
        ))}
      </div>
      {isLoading ? (<p className="text-xl text-slate-400 text-center mt-3 font-semibold animate-pulse">Please wait...</p>) : (<WizardNavigation onSubmit={hanlesubmit} />)}
    </section>
  );
};
