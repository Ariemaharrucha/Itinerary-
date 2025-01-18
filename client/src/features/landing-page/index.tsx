import { CalendarDays, Globe, MapPinCheckInside } from "lucide-react";
import { FeatureCard } from "./components/FeaturedCard";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { BenefitCard } from "./components/BenefitCard";

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <Navbar />
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="py-20 bg-green-50">
          <div className="max-w-screen-sm text-wrap mx-auto space-y-5">
            <h1 className="text-4xl font-extrabold text-center leading-relaxed text-green-700">
              Personalisasi perencanaan perjalanan Anda dengan Itinerary-Ai
            </h1>
            <p className="text-center text-gray-600">
              Dengan Trips, Anda mendapatkan perencana perjalanan dengan cepat —
              gunakan AI untuk membangun perjalanan Anda atau membangunnya
              sendiri
            </p>
          </div>
        </section>

         {/* Features Section */}
        <section id="features" className="flex justify-center py-12 bg-white">
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

        {/* Get Started Section */}
        <section id="get-started" className="py-12 bg-green-100">
          <div className="container mx-auto grid grid-cols-2 items-center justify-center">
            <div className="col-span-1">
              <div className="overflow-hidden size-96 mx-auto">
                <img src="/itinerary-sec-1.png" alt="" />
              </div>
            </div>
            <div className="col-span-1 space-y-6 me-8">
              <h2 className="text-3xl font-bold text-green-700">
                Mulai perencanan perjalanan dalam hitungan menit dengan AI
              </h2>
              <p className="text-gray-600 text-lg font-semibold">
                Jawab lima pertanyaan singkat dan dapatkan res yang
                dipersonalisasi dengan AI.
              </p>
              <NavLink to={"itinerary-prompt"}>
                <Button
                  size={"lg"}
                  className="bg-green-500 mt-4 text-white rounded-full font-semibold hover:bg-green-600"
                >
                  Start
                </Button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* benerfit */}
        <section id="benefits" className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-green-700">
              Mengapa Memilih Itinerary-AI?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                label="Efisiensi Waktu"
                content="Dengan hanya menjawab beberapa pertanyaan, Anda bisa mendapatkan rencana perjalanan dalam hitungan menit."
              />
              <BenefitCard
                label="Destinasi Rekomendasi"
                content="Temukan destinasi terbaik yang sesuai dengan budget dan preferensi Anda dengan cepat."
              />
              <BenefitCard
                label="Aksesibilitas Mudah"
                content="Aplikasi berbasis web yang bisa diakses kapan saja dan di mana saja untuk memudahkan perjalanan Anda."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
