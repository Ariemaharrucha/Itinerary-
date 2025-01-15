import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ItineraryDay, ItinerarySession } from "@/utils/result";
import { Sun, SunMoon, Sunrise, Sunset } from "lucide-react";
import React from "react";

interface SectionItineraryProps {
  travelPlan?: ItineraryDay[];
}

function iconTime(time: string) {
  if (time === "Pagi") return [time, <Sun />];
  if (time === "Siang") return [time, <Sunrise />];
  if (time === "Sore") return [time, <Sunset />];
  if (time === "Malam") return [time, <SunMoon />];
  return;
}

export const CardItinerary: React.FC<SectionItineraryProps> = ({
  travelPlan,
}) => {
  return (
    <Accordion type="multiple" className="space-y-3 ">
      {travelPlan?.map((day: ItineraryDay, index: number) => (
        <AccordionItem
          value={`item-${index}`}
          className="border-2 border-[#BCCCDC] bg-blue-600 text-white rounded-xl px-2 shadow-lg "
        >
          <AccordionTrigger className="px-2">Hari {day.Hari}</AccordionTrigger>
          <div className="grid grid-cols-2 gap-4 mb-3">
            {Object.entries(day).map(([time, details], index) => {
              if (time === "Hari") return null;
              const session = details as ItinerarySession;
              return (
                <AccordionContent
                  key={index}
                  className="text-pretty font-sans w-full h-full py-2 px-3 rounded-lg space-y-1.5 bg-blue-400  bg-cover bg-center text-white"
                >
                  <p className="font-bold text-lg flex gap-2 items-center">
                    {" "}{iconTime(time)}{" "}
                  </p>
                  <p>
                    <span className="font-semibold">Waktu:</span> {session?.Waktu}
                  </p>
                  <p>
                    <span className="font-semibold">Kegiatan:</span> {session?.Kegiatan}
                  </p>
                  <p>
                    <span className="font-semibold">Deskripsi:</span> {session?.Deskripsi}
                  </p>
                  <p>
                    <span className="font-semibold">Harga Tiket:</span> {session?.HargaTiket}
                  </p>
                  <p>
                    <span className="font-semibold">Jam Operasional:</span> {session?.JamOperasional}
                  </p>
                  <p>
                    <span className="font-semibold">Transportasi:</span> {session?.Transportasi}
                  </p>
                </AccordionContent>
              );
            })}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
