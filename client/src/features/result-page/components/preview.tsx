import useFormState from "@/store/useStore";
import { CardDescription } from "./CardDescription";
import { CardItinerary } from "./CardItinerary";
import { LibraryBig, NotebookPen, Notebook, CircleDollarSign } from 'lucide-react';

export const Preview = () => {
  const { travelPlan } = useFormState();
  return (
    <div className=" font-roboto">
      <div className="container mx-auto min-h-screen pb-2 ">
        <header className="text-center p-4">
          <p className="text-lg">Hasil</p>
        </header>
        <div>
          {/* informas umum dan catatan */}
          <div className="flex gap-2">
            <CardDescription
              title="Informasi Umum"
              items={travelPlan?.InformasiUmum}
              clasName="w-2/4"
              icon={<LibraryBig/>}
            />
            <CardDescription
              title="Catatan"
              items={travelPlan?.Catatan}
              clasName="w-full"
              icon={<Notebook/>}
            />
          </div>

          {/* Itinerary */}
          <CardItinerary travelPlan={travelPlan?.Itinerary} />

          {/* Tips Tambahan & anggaran */}
          <div className="mt-3 grid grid-rows-3 grid-flow-col gap-x-4">
            <CardDescription
              title="Tips Tambahan"
              items={travelPlan?.TipsTambahan}
              clasName="row-span-3"
              icon={<NotebookPen/>}
            />
            <CardDescription
              title="Estimasi Total Biaya"
              items={travelPlan?.EstimasiTotalBiaya}
              clasName="row-span-2 col-span-2"
              icon={<CircleDollarSign/>}
            />
            <CardDescription
              title="Sisa Anggaran"
              items={travelPlan?.SisaAnggaran}
              clasName="col-span-2"
              icon={<CircleDollarSign/>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
