import { CalendarDays, Globe, MapPinCheckInside } from "lucide-react";
import { FeatureCard } from "./components/FeaturedCard";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface ILandingPage {
  children?: React.ReactNode;
}

export const LandingPage = ({ children }: ILandingPage) => {
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <Navbar />
      <main className="flex-grow">
        <section className=" py-20">
          <div className="max-w-screen-sm  text-wrap mx-auto space-y-5 ">
            <h1 className="text-4xl font-extrabold text-center leading-relaxed ">
              Personalisasi perencanaan perjalanan Anda dengan Itinerary-Ai
            </h1>
            <p className="text-center text-[#8b8b8b]">
              Dengan Trips, Anda mendapatkan perencana perjalanan dengan cepat —
              gunakan AI untuk membangun perjalanan Anda atau membangunnya
              sendiri
            </p>
          </div>
        </section>

        <section className="flex justify-center py-16">
          <div className="grid grid-cols-3 gap-9">
            <FeatureCard
              icon={<MapPinCheckInside />}
              text="Personalisasi perjalanan Anda dengan bantuan AI."
            />
            <FeatureCard
              icon={<CalendarDays />}
              text="Rancang jadwal perjalanan Anda dengan mudah."
            />
            <FeatureCard
              icon={<Globe />}
              text="Pilih dari rekomendasi destinasi terbaik."
            />
          </div>
        </section>

        <section>
          <div className="container mx-auto grid grid-cols-2 gap-4 mt-12 items-center justify-center">
            <div className="space-y-6 ms-16 ">
              <h2 className="text-3xl text-balance font-bold">
                Mulai perencanan perjalanan dalam hitungan menit dengan AI
              </h2>
              <p className="text-pretty text-lg font-semibold">
                Jawab lima pertanyaan singkat dan dapatkan res yang
                dipersonalisasi dengan AI.
              </p>
              <NavLink to={"itinerary-prompt"}>
                <Button
                  size={"lg"}
                  className="bg-[#34e0a1] mt-4 text-black rounded-full font-semibold hover:bg-[#3bffb7]"
                >
                  Start
                </Button>
              </NavLink>
            </div>
            <div className="">
              <div className="overflow-hidden size-96 mx-auto ">
                <img src="/itinerary-sec-1.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className=" py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Mengapa Memilih Itinerary-AI?
            </h2>
            <div className="flex items-center">
              <div className="size-14 border rounded-full flex justify-center items-center">
                1
              </div>
              <div className="w-fit py-2 pe-3 border rounded-r-full">
                <p>Itinerary-AI menganalisis preferensi Anda untuk menghasilkan
                rencana perjalanan yang sesuai dengan kebutuhan Anda.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
