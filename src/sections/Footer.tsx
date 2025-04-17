


const Footer = () => {

  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="bg-white border-t py-8 px-6 text-sm text-gray-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-8">
      <img
          src="/ddd.jpg" // Replace with your actual logo path
          alt="Doubleyou Logo"
          className="h-10 w-[120px] h-[120px]"
        />
        <div className="flex gap-16">
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Links</h4>
            <ul className="space-y-2">
              <li><a onClick={()=>scrollToSection("home")}>Home</a></li>
              <li><a onClick={()=>scrollToSection("about-us")}>About Us</a></li>
              <li><a onClick={()=>scrollToSection("core-solutions")}>What We Do</a></li>
              <li><a onClick={()=>scrollToSection("next-gen")}>Our Impact</a></li>
              <li><a onClick={()=>scrollToSection("fellowship")}>Fellowship Program</a></li>

            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/Doubleyouinitiative" target="_blank">Facebook</a></li>
              <li><a href="https://www.instagram.com/doubleyougroup/" target="_blank">Instagram</a></li>
              <li><a href="https://twitter.com/DoubleyouNGA" target="_blank">X</a></li>
              <li><a href="https://www.linkedin.com/company/doubleyougroup/" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-xs">
        © 2025 <a href="/" className="underline">Doubleyou</a>. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
