import { CalendarDays, Globe, MapPinCheckInside } from 'lucide-react';
import { NavLink } from "react-router-dom"
import { FeatureCard } from './components/FeaturedCard';

interface ILandingPage {
  children?: React.ReactNode
}

export const LandingPage = ({children}:ILandingPage ) => {
  return (
    <div className="min-h-screen flex flex-col font-roboto">
      <header className="container mx-auto">
        <nav className="flex py-4 items-center">
            <div className="text-lg font-semibold">Itinerary-Ai</div>
            <div className="flex gap-8 mx-auto">
              <NavLink to={'/'}>About Us</NavLink>
              <NavLink to={'/'}>FAQ</NavLink>
            </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto">

        <div className="max-w-screen-sm my-20 text-wrap mx-auto space-y-5">
          <h1 className="text-4xl font-extrabold text-center leading-relaxed ">
            Personalisasi perencanaan perjalanan Anda dengan Itinerary-Ai
          </h1>
          <p className="text-center text-[#8b8b8b]">
          Dengan Trips, Anda mendapatkan perencana perjalanan dengan cepat — gunakan AI untuk membangun perjalanan Anda atau membangunnya sendiri
          </p>
        </div>

        <div className="flex justify-center ">
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
        </div>

        <div className='grid'>

        </div>

      </main>
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto text-center text-sm text-gray-500">
          &copy; 2025 Itinerary-AI. All rights reserved Ari.
        </div>
      </footer>
    </div>
  )
}
