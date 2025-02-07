import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import nikeManLogo from "../../../public/images/nike-man-logo.png"
import nikeLogo from "../../../public/images/nike-logo.png"
import searchIcon from "../../../public/images/search-icon.png"
import heartIcon from "../../../public/images/heart-icon.png"
import lockIcon from "../../../public/images/lock-icon.png"

import { Button } from "@/components/ui/button"



export const Header = () => {
  return (
    <>
    <div className='headerCon z-50   sticky top-0     w-screen h-[100px] bg-slat-400'>
      <div className='headerDivTop  w-screen h-[40px] bg-[#F5F5F5] flex  justify-evenly items-center '>
        <div className='div-1  bg-re-400 relative right-[150px] '>
          <Image src={nikeManLogo} width={30} height={30} alt='nike man logo'></Image>
        </div>
        <div className='div2  w-[155px] h-[30px] bg-[#FFFFFF] content-center text-center '>
          <p className=''>Skip to main content</p>
        </div>
        
        
        <div className='div-3  w-[155px] h-auto b-[#a55050] flex'>

         

          

          <Button className='bg-slat-500 border-r-[1px] rounded-none  border-black font-bold' variant="link"><Link href="/product-store">Find a Store</Link></Button>
          <Button className='bg-slat-500 border-r-[1px] rounded-none  border-black font-bold' variant="link"><Link href="/help">Help</Link> </Button>
          <Button className='bg-slat-500 border-r-[1px] rounded-none  border-black font-bold' variant="link"><Link href="/join-us">Join Us</Link> </Button>
          <Button className='bg-slat-500  rounded-none  font-bold' variant="link"><Link href="/sign-in">Sign In</Link> </Button>


          


      
  



        </div>
      </div>
      
      
      
      
      
      
      
      <div className='headerDivBottom   w-screen h-[70px] bg-white  flex  items-center'>

        <div className='div-1 relative left-[90px] top-[3px] '>
        <Image src={nikeLogo} width={80} height={80} alt='nike man logo'></Image>

        </div>
        <div className='div-2 w-[600px] h-[40px] bg-re-400 relative left-[190px] top-[10px] '>
        <Button className=' font-bold text-[18px]' variant="link"><Link href="/product-store">New and Featured</Link></Button>
        <Button className=' font-bold text-[18px]' variant="link"><Link href="/men-products">Men</Link></Button>
        <Button className=' font-bold text-[18px]' variant="link"><Link href="/women-produts">Women</Link></Button>
        <Button className=' font-bold text-[18px]' variant="link"><Link href="/kids-products">Kids</Link></Button>
        <Button className=' font-bold text-[18px]' variant="link">Sales</Button>
        <Button className=' font-bold text-[18px]' variant="link"><Link href="/shoes">SNKRS</Link></Button>
          

        </div>
        <div className='div-3 w-[450px] h-[40px] bg-re-400 relative left-[230px] flex justify-around'>
       
       <div className='div-3i relative bottom-[25px]'>
        <div className='w-[28px] h-[28px] bg-slat-400 relative left-[190px] top-[37px]'>
          <Image src={searchIcon}  alt='search logo' className='text-[#111111]'></Image>
        </div>
         <input
         
         

            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full bg-[#F5F5F5] text-[#CCCCCC] focus:outline-none  "
          />
       </div>

       <div className=' div-3ii w-[380px h-[380px bg-slat-400 relative top-[3px] '>
       
          <Image src={heartIcon} width={40} height={40}   alt='heart logo' className='text-[#111111]'></Image>
        
       </div>
       
       
       <div className='div-3iii w-[90px h-[90px bg-slat-400 relative top-[3px]'>
      
          <Image src={lockIcon} width={40} height={40}   alt='lock logo' className='text-[#111111]'></Image>
      
       </div>

        </div>

      </div>
    </div>
    
    
    
    
    
    
    </>
  )
}

export default Header
