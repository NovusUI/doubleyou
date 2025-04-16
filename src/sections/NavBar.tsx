

export default function Navbar() {


  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 !bg-white shadow-sm flex items-center justify-between px-2 md:px-10 lg:px-20 ">
      {/* Logo */}
      <div className="flex-shrink-0 text-center">
        <img
          src="/ddd.jpg" // Replace with your actual logo path
          alt="Doubleyou Logo"
          className="h-10 w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] mx-auto"
          onClick={() => scrollToSection('home')}
        />
   
      </div>

      {/* Nav links */}
      <div className="hidden sm:flex gap-10 text-lg font-semibold text-gray-900 ">
        <a onClick={() => scrollToSection('about-us')}  href="#about" className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out ">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
        <a onClick={() => scrollToSection('core-value')} href="#values" className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out ">
            Our Core Values
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
        <a onClick={() => scrollToSection('core-solutions')} href="#whatwedo" className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out ">
            What We Do
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
        <a onClick={() => scrollToSection('previous-project')} href="#projects" className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out ">
            Previous Projects
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a>
        {/* <a href="#battleofbrains" className="hover:text-[#0B9F6E] relative group transition duration-300 ease-in-out">
            Battle Of Brains
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0B9F6E] transition-all group-hover:w-full"></span>
        </a> */}
      </div>
    </nav>
  );
}
