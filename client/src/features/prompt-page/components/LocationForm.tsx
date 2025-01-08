import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { autoComplete } from "@/lib/google";
import { useEffect, useState } from "react";
import { WizardNavigation } from "./WizardNavigation";

export const LocationForm = () => {
  const [predictions, setPredictions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchPredictios = async () => {
      const predictions = await autoComplete(input);
      console.log(predictions);
      setPredictions(predictions ?? []);
    };
    fetchPredictios();
  }, [input]);
  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-10 mb-8 text-4xl font-bold ">
          Pertama, ke mana kau ingin pergi?
        </h1>
        <p className="text-slate-400 text-lg pb-12">
          Anda akan mendapatkan res ulang untuk rencana perjalanan
        </p>
        <Command
          className="rounded-lg border shadow-md md:min-w-[450px]"
          value={input}
          onValueChange={setInput}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {/* <CommandGroup heading="Suggestions">
            {predictions.map((prediction) => (
              <CommandItem key={prediction.id}>
                {prediction.address.label}
              </CommandItem>
            ))}
          </CommandGroup> */}
          </CommandList>
        </Command>
      </div>

      <div className="mt-20">
        <h1 className="text-center text-3xl">
          Atau memulai dengan tujuan populer
        </h1>
        <div className="mt-8">
          {/* card */}
          <div>
            <div className="overflow-hidden size-32 rounded-md">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-2 font-bold">Yogyakarta</h3>
          </div>
        </div>
      </div>
      <WizardNavigation/>
    </section>
  );
};
