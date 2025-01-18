export const Navbar = () => {
  return (
    <header className="bg-green-200 px-16 border-b-2 border-green-200 sticky top-0">
      <nav className="flex py-4 items-center justify-between ">
        <div className="text-lg font-semibold text-green-900">
          <a href="#">Itinerary-Ai</a>
        </div>
        <div className="flex gap-8 ">
          <a
            href="#get-started"
            className="text-gray-600 font-semibold hover:text-green-700 transition duration-200 hover:scale-125"
          >
            Start
          </a>
          <a
            href="#features"
            className="text-gray-600 font-semibold hover:text-green-700 transition duration-200"
          >
            Fitur
          </a>
          <a
            href="#benefits"
            className="text-gray-600 font-semibold hover:text-green-700 transition duration-200"
          >
            benefits
          </a>
        </div>
      </nav>
    </header>
  );
};
