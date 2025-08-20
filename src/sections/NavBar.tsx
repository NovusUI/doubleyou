import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateOrScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate({ pathname: "/", hash: `#${id}` });
      return;
    }
    const section = document.getElementById(id);
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 !bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm flex items-center justify-between px-2 md:px-10 lg:px-20 ">
      {/* Logo */}
      <div className="flex-shrink-0 text-center">
        <a
          href="/"
          aria-label="Doubleyou Home"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <img
            src="/ddd.jpg"
            alt="Doubleyou Logo"
            className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mx-auto cursor-pointer"
          />
        </a>
      </div>

      {/* Nav links */}
      <div className="hidden sm:flex gap-8 text-[15px] md:text-lg font-semibold text-gray-900 ">
        <a
          href="/#about-us"
          onClick={(e) => {
            e.preventDefault();
            handleNavigateOrScroll("about-us");
          }}
          className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out focus:outline-none"
          tabIndex={0}
          aria-label="Go to About Us section"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleNavigateOrScroll("about-us");
            }
          }}
        >
          About Us
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
        <a
          href="/#core-value"
          onClick={(e) => {
            e.preventDefault();
            handleNavigateOrScroll("core-value");
          }}
          className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out focus:outline-none"
          tabIndex={0}
          aria-label="Go to Core Values section"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleNavigateOrScroll("core-value");
            }
          }}
        >
          Our Core Values
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
        <a
          href="/#core-solutions"
          onClick={(e) => {
            e.preventDefault();
            handleNavigateOrScroll("core-solutions");
          }}
          className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out focus:outline-none"
          tabIndex={0}
          aria-label="Go to What We Do section"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleNavigateOrScroll("core-solutions");
            }
          }}
        >
          What We Do
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
        <a
          href="/#previous-project"
          onClick={(e) => {
            e.preventDefault();
            handleNavigateOrScroll("previous-project");
          }}
          className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out focus:outline-none"
          tabIndex={0}
          aria-label="Go to Previous Projects section"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleNavigateOrScroll("previous-project");
            }
          }}
        >
          Previous Projects
          <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
      </div>
    </nav>
  );
}
