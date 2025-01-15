import useFormState from "@/store/useStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ItinerarySession } from "@/utils/result";
import { ItineraryDay } from "@/utils/result";

interface SectionDescriptionProps {
  title: string;
  items?: string[];
  clasName?: string;
}

interface SectionItineraryProps {
  travelPlan?: ItineraryDay[];
}

export const Preview = () => {
  const { travelPlan } = useFormState();
  return (
    <div className="">
      <div className="container mx-auto min-h-screen pb-2 ">
        <header className="text-center p-4">
          <p className="">Result</p>
        </header>
        <div>
          {/* informas umum dan catatan */}
          <div className="flex gap-2">
            <SectionDescription
              title="Informasi Umum"
              items={travelPlan?.InformasiUmum}
              clasName="w-2/4"
            />
            <SectionDescription
              title="Catatan"
              items={travelPlan?.Catatan}
              clasName="w-full"
            />
          </div>

          {/* Itinerary */}
          <AccordionItinerary travelPlan={travelPlan?.Itinerary} />

          {/* Tips Tambahan & anggaran */}
          <div className="mt-3 grid grid-rows-3 grid-flow-col gap-x-4">
            <SectionDescription
              title="Tips Tambahan"
              items={travelPlan?.TipsTambahan}
              clasName="row-span-3"
            />
            <SectionDescription
              title="Estimasi Total Biaya"
              items={travelPlan?.EstimasiTotalBiaya}
              clasName="row-span-2 col-span-2"
            />
            <SectionDescription
              title="Sisa Anggaran"
              items={travelPlan?.SisaAnggaran}
              clasName="col-span-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  title,
  items,
  clasName,
}) => (
  <Card className={`mb-6 ${clasName}`}>
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc pl-5">
        {items?.map((item, index: number) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const AccordionItinerary: React.FC<SectionItineraryProps> = ({
  travelPlan,
}) => {
  return (
    <Accordion type="multiple" className="space-y-3">
      {travelPlan?.map((day: ItineraryDay, index: number) => (
        <AccordionItem value={`item-${index}`} className="border-2 rounded-md py-0.5 px-2 ">
          <AccordionTrigger>
            Hari {day.Hari}
          </AccordionTrigger>
          <ul className="">
            {Object.entries(day).map(([time, details], index) => {
              if (time === "Hari") return null;
              const session = details as ItinerarySession;
              return (
                <AccordionContent className="">
                  <li key={index}>
                    <strong className="block text-gray-800">{time}</strong>
                    <p>
                      <strong>Waktu:</strong> {session.Waktu}
                    </p>
                    <p>
                      <strong>Kegiatan:</strong> {session.Kegiatan}
                    </p>
                    <p>
                      <strong>Deskripsi:</strong> {session.Deskripsi}
                    </p>
                    <p>
                      <strong>Harga Tiket:</strong> {session.HargaTiket}
                    </p>
                    <p>
                      <strong>Jam Operasional:</strong> {session.JamOperasional}
                    </p>
                    <p>
                      <strong>Transportasi:</strong> {session.Transportasi}
                    </p>
                  </li>
                </AccordionContent>
              );
            })}
          </ul>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
