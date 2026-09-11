import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="col-span-1 flex justify-items-start gap-2">
          <img src={logo} alt="logo" />
          <h2 className="text-2xl font-bold">Dev<span className="text-[#DB2777]">Stack</span></h2>
        </div>
            </div>
        </footer>
    );
};

export default Footer;