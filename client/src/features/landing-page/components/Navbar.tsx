export const Navbar = () => {
  return (
    <header className="px-8 border-b-2">
      <nav className="flex py-4 items-center">
        <div className="text-lg font-semibold">Itinerary-Ai</div>
        <div className="flex gap-8 mx-auto">
          <a href="/">About Us</a>
          <a href="/">FAQ</a>
          <a href="/">Contact</a>
        </div>
      </nav>
    </header>
  );
};
