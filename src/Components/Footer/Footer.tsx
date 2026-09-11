import React from "react";
import logo from "../../assets/logo.png";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="border-t border-[#E8E8E8]" />
      <div className="mt-20 container mx-auto px-12 grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <div className="col-span-1 flex justify-items-start gap-2 mb-4">
            <img src={logo} alt="logo" />
            <h2 className="text-2xl font-bold">
              Dev<span className="text-[#DB2777]">Stack</span>
            </h2>
          </div>
          <p className="text-[#64748B]">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          {/* social link */}
          <div className="my-8">
            <ul className="flex justify-start gap-6">
              <a href="">
                <li className="text-[#2f3a48]">GITHUB</li>
              </a>
              <a href="">
                <li className="text-[#2f3a48]">TWITTER</li>
              </a>
              <a href="">
                <li className="text-[#2f3a48]">LINKEDIN</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3">
          <div>
            <h4 className="text-lg mb-3 font-semibold">PRODUCT</h4>
            <ul>
              <a href="">
                <li className="text-[#64748B]">Home</li>
              </a>
              <a href="">
                <li className="text-[#64748B] my-1.5">Technologies</li>
              </a>
              <a href="">
                <li className="text-[#64748B]">Project</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-3 font-semibold">COMPANY</h4>
            <ul>
              <a href="">
                <li className="text-[#64748B]">About</li>
              </a>
              <a href="">
                <li className="text-[#64748B] my-1.5">Contact</li>
              </a>
              <a href="">
                <li className="text-[#64748B]">Careers</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-lg mb-3 font-semibold">LEGAL</h4>
            <ul>
              <a href="">
                <li className="text-[#64748B] my-1.5">Privacy Policy</li>
              </a>
              <a href="">
                <li className="text-[#64748B]">Terms of Service</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-12">
      <div className="border-t border-[#E8E8E8]" />
        <div className="my-10 grid grid-cols-2">
        <p className="flex text-[#64748B] items-center"><AiOutlineCopyright /><span>2026DevStack. All right resered.</span></p>
        <ul className="flex gap-8 justify-end ">
            <li className="text-[#64748B]">privacy</li>
            <li className="text-[#64748B]">Terms</li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
