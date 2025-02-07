 "use client"




import { NextPage } from 'next';
import Link from 'next/link';

import { useState } from 'react';
import nikeLogo from "../../../public/images/nike-logo.png"
import Image from 'next/image';

const SignIn: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
   
  };

  return (
    <>
      
       <div className="flex h-[800px] items-center justify-center  bg-gray-100  ">
        <div className="w-full max-w-md bg-[#FFFFFF] rounded-lg shadow-md p-8 mt-[-16px]">
          <div className=' bg-[red ml-[150px] mb-[20px]'>
            <Image src={nikeLogo} width={70} height={50} alt="nike lgo" />



          </div>
          <h2 className=" w-[236px] h-[57x] bg-[re] text-2xl font-bold text-center text-[#111111] mb-6 ml-[70px] leading-9">YOUR ACCOUNT FOR EVERYTHING NIKE</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              
              <input
              placeholder='Email Address'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#8D8D8D] "
              />
            </div>
            <div className="mb-4">
             
              <input
              placeholder='Password'
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none focus:ring-2 focus:ring-gray-100"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 text-black border-black rounded focus:ring-black bg-black checked:text-green-900"
              />
              <label htmlFor="rememberMe" className="ml-2 text-sm text-[#8D8D8D]">
              Keep me signed in  <span className='text-[14px] text-[#8D8D8D] font-normal w-[100px] bg-slat-300 ml-[72px]'><a href="#">Forgotten your password?</a></span>
              </label>
            </div>

            
            <div className="mt-12 bg-slate- text-center text-[#8D8D8D] text-[12px] leading-7">
            
            <p className="text-sm text-[#8D8D8D] mt-2">
            By logging in, you agree to Nike's {'  '}
              <Link href="#" className="text-[#8D8D8D] underline">
              Privacy Policy  
              </Link>
              <br />
              and {'  '}
               
               <a href="#" className="text-[#8D8D8D] underline">
             
               Terms of Use  </a>
             
            </p>
          </div>
           

            <button
              type="submit"
              className="w-full bg-[#000000] text-[#FFFFFF] text-base leading-5 py- px- p-3 my-[45px] rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black"
            >
              Sign In
            </button>
          </form>
          <div className="mt-4 text-center">
            
            <p className="text-sm text-[#8D8D8D] mt-1">
            Not a Memeber?{'  '}
              <a href="/join-us" className="text-black underline">
                Join Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn; 