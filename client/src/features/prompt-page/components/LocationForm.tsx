import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"; 
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { locations, populerLocation } from "@/constant/locations";
import { useState } from "react";
import { WizardNavigation } from "./WizardNavigation";
import useFormState from "@/store/useStore";

export const LocationForm = () => {
  const { setStepData, stepData } = useFormState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>(stepData?.location ?? '');

  const isValid = !!value;

  return (
    <section className="w-2/3 m-auto">
      <div className="text-center">
        <h1 className="mt-8 mb-8 text-4xl font-bold">
          Pertama, ke mana kau ingin pergi?
        </h1>
        <p className="text-slate-400 text-lg pb-12">
          Anda akan mendapatkan respon ulang untuk rencana perjalanan
        </p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[450px] justify-between"
            >
              {value
                ? locations.find((location) => location.value === value)?.label
                : "Cari Lokasi"}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[450px] p-0">
            <Command>
              <CommandInput placeholder="Lokasi" />
              <CommandList>
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {locations.map((location) => (
                    <CommandItem
                      key={location.value}
                      value={location.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                        setStepData("location", currentValue);
                      }}
                    >
                      {location.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === location.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="mt-16">
        <h1 className="text-center text-3xl">
          Atau memulai dengan tujuan populer
        </h1>
        <div className="mt-8 flex justify-around">
          {populerLocation.map((location) => (
            <div key={location.value} className="text-center cursor-pointer" onClick={()=>{alert('belum bisa menggunakan lokasi populer')}}>
              <div className="overflow-hidden rounded-md size-32">
                <img
                  src={location.img}
                  alt={location.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-2 font-bold">{location.label}</h3>
            </div>
          ))}
        </div>
      </div>
      <WizardNavigation isValid={isValid}/>
    </section>
  );
};
