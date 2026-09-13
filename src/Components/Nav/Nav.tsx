import { IoReorderThree } from "react-icons/io5";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className="py-4 border-b border-gray-200">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-4 gap-4 items-center">
      <IoReorderThree className="lg:hidden block text-3xl cursor-pointer" />
        {/* logo section */}
        <div className="col-span-1 flex justify-center md:justify -start gap-2">
          <img src={logo} alt="logo" />
          <h2 className="text-xl md:text-2xl font-bold">Dev<span className="text-[#DB2777]">Stack</span></h2>
        </div>
        {/* menu section */}
        <div className="lg:col-span-2">
          <ul className="hidden lg:flex justify-center items-center gap-8">
            <a className="text-[#DB2777]" href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Technologies</li>
            </a>
            <a href="">
              <li>Project</li>
            </a>
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        {/* login section */}
        <div className="col-span-1 flex justify-end gap-4">
          <button className="cursor-pointer">Sign In</button>
          <button className="bg-[#D91B7E] rounded-3xl text-[#ffff] text-center py-2 px-4 cursor-pointer">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
