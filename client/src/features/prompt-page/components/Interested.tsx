import { WizardNavigation } from "./WizardNavigation";

const vacationInterests = [
  {
    value: "kuliner",
    label: "Kuliner Makanan",
  },
  {
    value: "petualangan",
    label: "Petualangan",
  },
  {
    value: "relaksasi",
    label: "Relaksasi",
  },
  {
    value: "budaya",
    label: "Wisata Budaya",
  },
  {
    value: "belanja",
    label: "Belanja",
  },
];

export const Interested = () => {
  return (
    <section className=" w-2/3 m-auto ">
      <div className="text-center">
        <h1 className="mt-10 mb-8 text-4xl font-bold ">
          Beritahu kami apa yang Anda minati
        </h1>
        <p className="text-slate-400 text-lg pb-12">Pilih semua yang berlaku</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {vacationInterests.map((interest) => (
          <label
            key={interest.value}
            className="inline-flex items-center gap-2 rounded-full border px-6 py-4 text-base font-semibold has-[:checked]:bg-green-400"
          >
            <input
              type="checkbox"
              value={interest.value}
              className="appearance-none hidden checked:border-transparent w-5 h-5 rounded"
            />
            <span>{interest.label}</span>
          </label>
        ))}
      </div>
      <WizardNavigation />
    </section>
  );
};
