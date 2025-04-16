import React from "react";


const Footer = () => {
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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/what-we-do">What We Do</a></li>
              <li><a href="/impact">Our Impact</a></li>
              <li><a href="/fellowship">Fellowship Program</a></li>
              <li><a href="/partner">Partner With Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-3">Follow Us</h4>
            <ul className="space-y-2">
              <li><a href="#" target="_blank">Facebook</a></li>
              <li><a href="#" target="_blank">Instagram</a></li>
              <li><a href="#" target="_blank">X</a></li>
              <li><a href="#" target="_blank">LinkedIn</a></li>
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
