import { WizardNavigation } from "./WizardNavigation";
import { Heart, Home, UserRound, Users } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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
            <CardType key={trip.value} icon={trip.icon} label={trip.label} />
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
}

const CardType = ({ icon, label }: CardTypeProps) => {
  return (
    <div className="col-span-3 border rounded-lg px-4 pt-4 pb-12 flex justify-between">
      <div className="space-y-2">
        {icon}
        <p className="font-semibold">{label}</p>
      </div>
      <Checkbox className="border-none focus-visible:ring-2 bg-transparent checked:bg-current" />
    </div>
  );
};
