import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { WizardNavigation } from "./WizardNavigation";

export const LocationForm = () => {
  const [input, setInput] = useState("");

  const locations = [
    "Jakarta",
    "Yogyakarta",
    "Surabaya",
    "Bali",
    "Bandung",
    "Medan",
    "Makassar",
    "Semarang",
    "Palembang",
    "Pekanbaru",
  ];

  // Filter prediksi berdasarkan input
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <section className="w-2/3 m-auto">
      <div className="text-center">
        <h1 className="mt-10 mb-8 text-4xl font-bold">
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
          <CommandInput placeholder="Type a location..." />
          <CommandList>
            {filteredLocations.length > 0 ? (
              <CommandGroup heading="Suggestions">
                {filteredLocations.map((location, index) => (
                  <CommandItem key={index} onSelect={() => setInput(location)}>
                    {location}
                  </CommandItem>
                ))}
              </CommandGroup>
            ) : (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
          </CommandList>
        </Command>
      </div>

      <div className="mt-20">
        <h1 className="text-center text-3xl">
          Atau memulai dengan tujuan populer
        </h1>
        <div className="mt-8">
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
      <WizardNavigation />
    </section>
  );
};
