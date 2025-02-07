"use client"
import React, { useState } from "react";
import nikeLogo from "../../../public/images/nike-logo.png"
import Image from 'next/image'

const JoinUsPage: React.FC = () => {
  const [gender, setGender] = useState<"male" | "female" | "">("");

  const handleGenderClick = (selectedGender: "male" | "female") => {
    setGender(selectedGender);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
    
        <div className="w-[70px] h-[50px] bg-[red ml-[190px]">
            <Image src={nikeLogo} width={70} height={50} alt="nike logo" />

        </div>


        <h1 className="text-xl font-bold text-center mt-6 text-[#111111]">BECOME A NIKE MEMBER</h1>
        <p className="text-[#8D8D8D] text-[16px]  w-[299px] h-[70px] bg-[blue text-center ml-[70px] mt-[20px]">Create your Nike Member profile and get first access to the 
          very best of Nike products, inspiration and community.</p>
        <form>
          {/* Input Fields */}
          <div className="space-y-6 my-[40px]">
            <input
              type="text"
              placeholder="Email address"
              className="w-full px-4 py-2 border  rounded focus:outline-none focus:ring-2 text-[17px] bg-[#FFFFFF] focus:ring-[#E5E5E5] text-[#8D8D8D]"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 text-[17px] bg-[#FFFFFF] focus:ring-[#E5E5E5] text-[#8D8D8D]"
            />
            <input
              type="First Name"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 text-[17px] bg-[#FFFFFF] focus:ring-[#E5E5E5] text-[#8D8D8D] "
            />
            <input
              type="password"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 text-[17px] bg-[#FFFFFF] focus:ring-[#E5E5E5] text-[#8D8D8D] "
            />
            <input
              type="text"
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 text-[17px] bg-[#FFFFFF] focus:ring-[#E5E5E5] text-[#8D8D8D] "
            />

            <p className="text-[13px] text-[#8D8D8D]  tracking-wide bg-[red relative bottom-[15px] left-[30px]">Get a Nike Member Reward every year on your Birthday.</p>

            {/* Dropdown Field */}
            <select
              className="w-full px-4 py-2 border rounded focus:outline-none text-[17px] bg-[#FFFFFF] focus:ring-[#E5E5E5] text-[#8D8D8D]"
            >
               <option  value="">India</option>
              {/* <option className="" value="">Se</option> */}
              {/* <option value="Pakistan">Pakistan</option> */}
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* Gender Buttons */}
          <div className="mt-4 flex justify-between space-x-4">
            <button
              type="button"
              className={`px-[85px] py-2 border rounded  ${
                gender === "male"
                  ? "bg-gray-100 text-[#8D8D8D]"
                  : "bg-[#FFFFFF] text-[#8D8D8D]"
              }`}
              onClick={() => handleGenderClick("male")}
            >
              Male
            </button>
            <button
              type="button"
              className={`px-[85px] py-2 border rounded  ${
                gender === "female"
                  ? "bg-gray-100 text-[#8D8D8D]e"
                  : "bg-[#FFFFFF] text-[#8D8D8D]"
              }`}
              onClick={() => handleGenderClick("female")}
            >
              Female
            </button>
          </div>

          {/* Checkbox */}
          <div className="mt-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="w-7 h-7  border-[#E5E5E5] rounded focus:ring-2 focus:ring-[#fcfcfc]"
              />
              <span className="ml-5 mt-[15px] text-[#8D8D8D] text-[15px] bg-[red">

              Sign up for emails to get updates from Nike on products, offers and your Member benefits
               
              </span>
            </label>
          </div>



          <div className="mt-9 bg-slate- text-center text-[#8D8D8D] text-[12px] leading-7">
            
              <p className="text-[16px] text-[#8D8D8D] mt-2">
              By creating an account, you agree to Nike's {'  '}

                <a href="#" className="text-[#8D8D8D]  underline">
               Privacy Policy
               </a>
               <br />
                and {'  '} 

               
                <a href="#" className="text-[#8D8D8D] underline">
               
                Terms of Use  </a>
              
             </p>
           </div>


        



          {/* Join Us Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#000000] text-[#FFFFFF] text-[19px] py-2 px-4 rounded hover:bg-black"
            >
              Join Us
            </button>
          </div>

          {/* Sign In Link */}
          <div className="mt-7 text-center">
            <p className="text-[#8D8D8D]">
            Already a Member? <a href="/sign-in" className="text-[#111111] underline">Sign In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUsPage;