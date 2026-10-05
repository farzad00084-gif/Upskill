import React from "react";
import { Footer1 } from "./Styles";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-5 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Upskill</h2>
          <p className="text-gray-400 leading-7">
            Empowering Afghan Youth with Skills for a Digital Future.
          </p>
          <p className="text-gray-400 mt-4">Powered by Upskill</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-5">Services</h3>
          <a href="#" className={Footer1}>
            Tech Services
          </a>
          <a href="#" className={Footer1}>
            Online Courses
          </a>
          <a href="#" className={Footer1}>
            Scholarship
          </a>
          <a href="#" className={Footer1}>
            Careers
          </a>
          <a href="#" className={Footer1}>
            Partners
          </a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-5">Helpful Links</h3>
          <a href="#" className={Footer1}>
            About Us
          </a>
          <a href="#" className={Footer1}>
            Our Instructors
          </a>
          <a href="#" className={Footer1}>
            Success Stories
          </a>
          <a href="#" className={Footer1}>
            Blog
          </a>
          <a href="#" className={Footer1}>
            FAQ
          </a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-5">Information</h3>
          <a href="#" className={Footer1}>
            Privacy Policy
          </a>
          <a href="#" className={Footer1}>
            Terms & Conditions
          </a>
          <a href="#" className={Footer1}>
            Contact Us
          </a>
          <p className="text-gray-400 mt-5">Kabul, Afghanistan</p>
          <p className="text-gray-400 mt-2">+93 78 176 5151</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center py-5 text-gray-500 text-sm">
        &copy; 2026 Upskill Online. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
