import React from "react";
import Image from "next/image";
import locationLogo from "../../../public/images/location-logo.png";

import twitorLogo from "../../../public/images/twitor-logo.png";
import facebookLogo from "../../../public/images/facebook-logo.png";
import youtubeLogo from "../../../public/images/youtube-logo.png";
import instagramLogo from "../../../public/images/instagram-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Left Column */}
        <div>
          <h3 className="font-bold">FIND A STORE</h3>
          <ul className="space-y-2 text-[#bfbebe]">
            <li>BECOME A MEMBER</li>
            <li>SIGN UP FOR EMAIL</li>
            <li>Send Us Feedback</li>
            <li>STUDENT DISCOUNT</li>
          </ul>
        </div>
        {/* Middle Column */}
        <div>
          <h3 className="font-bold">GET HELP</h3>
          <ul className="space-y-2 text-[#7E7E7E] ">
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact Us On Nike.com Inquiries</li>
            <li>Contact Us On All Other Inquiries</li>
          </ul>
        </div>
        {/* Right Column */}
        <div>
          <h3 className="font-bold">ABOUT NIKE</h3>
          <ul className="space-y-2 text-[#7E7E7E]">
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>

      {/* Social Icons Section */}
      <div className="container mx-auto px-6 py-6 flex justify-center md:justify-end gap-4">
        <Image src={twitorLogo} width={30} height={30} alt="Twitter Logo" />
        <Image src={facebookLogo} width={30} height={30} alt="Facebook Logo" />
        <Image src={youtubeLogo} width={30} height={30} alt="YouTube Logo" />
        <Image
          src={instagramLogo}
          width={30}
          height={30}
          alt="Instagram Logo"
        />
      </div>

      {/* Bottom Section */}
      <div className="bg-[#2B2B2B] py-4">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Left */}
          <div className="flex items-center space-x-3">
            <Image
              src={locationLogo}
              width={18}
              height={18}
              alt="Location Logo"
            />
            <p>India</p>
            <p className="text-[#7E7E7E]">
              © 2023 Nike, Inc. All Rights Reserved
            </p>
          </div>
          {/* Right */}
          <div className="flex space-x-4 mt-4 md:mt-0 text-[#7E7E7E]">
            <p>Guides</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Nike Privacy Notice</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
