import useFormState from "@/store/useStore";
import { WizardNavigation } from "./WizardNavigation";
import { Heart, Home, UserRound, Users } from "lucide-react";
// import { Checkbox } from "@/components/ui/checkbox";
import { ReactNode, useState } from "react";

const tripTypes = [
  {
    icon: <UserRound />,
    value: "solo-trip",
    label: "Solo Trip",
  },
  {
    icon: <Heart />,
    value: "partner-trip",
    label: "Partner Trip",
  },
  {
    icon: <Home />,
    value: "family-trip",
    label: "Family Trip",
  },
  {
    icon: <Users />,
    value: "friends-trip",
    label: "Friends Trip",
  },
];

export const TypeForm = () => {
  const { setStepData } = useFormState();
  const [selectedType, setSelectedType] = useState("");

  const handleSelectType = (type: string) => {
    setSelectedType(type);
    setStepData("type", { selectedType: type });    
  };

  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-10 mb-8 text-3xl font-bold ">
          Apa jenis perjalanan yang Anda rencanakan?
        </h1>
        <p className="text-slate-400 text-lg pb-12">Pilih satu</p>
      </div>

      <div className="pb-5">
        <div className="grid grid-cols-12 gap-2">
          {tripTypes.map((trip) => (
            <CardType
              key={trip.value}
              icon={trip.icon}
              label={trip.label}
              value={trip.value}
              isSelected={selectedType === trip.value}
              onClick={() => handleSelectType(trip.value)}
            />
          ))}
        </div>
      </div>

      <WizardNavigation />
    </section>
  );
};

  interface CardTypeProps {
    icon: ReactNode;
    label: string;
    value: string;
    onClick: ()=>void;
    isSelected: boolean;
  }

const CardType = ({ icon, label, value, isSelected, onClick }: CardTypeProps) => {
  return (
    <label className={`col-span-3 border rounded-lg px-4 pt-4 pb-12 flex justify-between items-center cursor-pointer transition ${
      isSelected ? "bg-green-400/80" : ""
    }`}
    onClick={onClick}>
      <div className="space-y-2">
        {icon}
        <p className="font-semibold">{label}</p>
      </div>
      <input
        type="radio"
        name="tripType"
        value={value}
        className="hidden"
      />
    </label>
  );
};
