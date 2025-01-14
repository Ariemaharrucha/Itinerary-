import useFormState from "@/store/useStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ItinerarySession } from "@/utils/result";
import { ItineraryDay } from "@/utils/result";

interface SectionDescriptionProps {
  title: string;
  items?: string[];
}

interface SectionItineraryProps {
  travelPlan?: ItineraryDay[];
}

export const Preview = () => {
  const { travelPlan } = useFormState();
  return (
    <div>
      <div className="container mx-auto min-h-screen pb-2 ">
        <header className="text-center p-4">
          <p>Result</p>
        </header>
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <SectionDescription
              title="Informasi Umum"
              items={travelPlan?.InformasiUmum}
            />
            <SectionDescription title="Catatan" items={travelPlan?.Catatan} />
          </div>
          <SectionItinerary travelPlan={travelPlan?.Itinerary} />
          <SectionDescription
            title="Estimasi Total Biaya"
            items={travelPlan?.EstimasiTotalBiaya}
          />
          <SectionDescription
            title="Sisa Anggaran"
            items={travelPlan?.SisaAnggaran}
          />
          <SectionDescription
            title="Tips Tambahan"
            items={travelPlan?.TipsTambahan}
          />
        </div>
      </div>
    </div>
  );
};

const SectionDescription: React.FC<SectionDescriptionProps> = ({ title, items }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div></div>
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

const SectionItinerary:React.FC<SectionItineraryProps> = ({ travelPlan }) => {
  return (
    <Card>
      <CardHeader className="text-lg font-bold">Itinerary</CardHeader>
      <CardContent>
        {travelPlan?.map((day: ItineraryDay, index: number) => (
          <div key={index} className="space-y-4 mb-6">
            <h3 className="text-md font-semibold">Hari {day.Hari}</h3>
            {Object.entries(day).map(([time, details], index) => {
              if (time === "Hari") return null;

              const session = details as ItinerarySession; 
              return (
                <li key={index}>
                  <strong className="block text-gray-800">{time}</strong>
                  <p><strong>Waktu:</strong> {session.Waktu}</p>
                  <p><strong>Kegiatan:</strong> {session.Kegiatan}</p>
                  <p><strong>Deskripsi:</strong> {session.Deskripsi}</p>
                  <p><strong>Harga Tiket:</strong> {session.HargaTiket}</p>
                  <p><strong>Jam Operasional:</strong> {session.JamOperasional}</p>
                  <p><strong>Transportasi:</strong> {session.Transportasi}</p>
                </li>
              );
            })}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
