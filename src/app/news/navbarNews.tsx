import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const NewsNavbar = () => {
  return (
    <div>
        <div className="mt-1 px-1 w-[96vw] bg-black/20 text-xs py-2 rounded-lg flex overflow-x-auto
          text-black">
          {/* Example categories, adjust as needed */}
          <Link href={'/news/articles/'} >
            <div className="min-w-[76px] h-[88px] shadow-lg border-[1px] flex flex-col items-center justify-between p-[4px]  rounded-lg mx-2
              bg-white hover:bg-white/60">
              <div className="h-[60px] w-[100%] bg-gray-200 rounded flex justify-center">
                < Image src="/images/news_navbar/news_button1.png" alt="T-MAK Logo" width={70} height={70} 
                  className='rounded-md'/>   
              </div> 
              articles
            </div>
          </Link>
          <Link href={'/news/magazines'} >
            <div className="min-w-[76px] h-[88px] shadow-lg border-[1px] flex flex-col items-center justify-between p-[4px] rounded-lg mx-2
              bg-white hover:bg-white/60">
              <div className="h-[60px] w-[100%] bg-gray-200 rounded flex justify-center">
                < Image src="/images/news_navbar/news_button3.png" alt="T-MAK Logo" width={70} height={70} 
                  className='rounded-md'/>   
              </div> 
               Magazines
            </div>
          </Link>
          <Link href={'/news/podcasts'} >
            <div className="min-w-[76px] h-[88px] shadow-lg border-[1px] flex flex-col items-center justify-between p-[4px] rounded-lg mx-2
              bg-white hover:bg-white/60">
              <div className="h-[60px] w-[100%] bg-gray-200 rounded flex justify-center">
                < Image src="/images/news_navbar/news_button7.png" alt="T-MAK Logo" width={70} height={70} 
                  className='rounded-md'/>   
              </div> 
               podcasts
            </div>
          </Link>
          <Link href={'/news/videos'} >
            <div className="min-w-[76px] h-[88px] shadow-lg border-[1px] flex flex-col items-center justify-between p-[4px] rounded-lg mx-2
              bg-white hover:bg-white/60">
              <div className="h-[60px] w-[100%] bg-gray-200 rounded flex justify-center">
                < Image src="/images/news_navbar/news_button6.png" alt="T-MAK Logo" width={70} height={70} 
                  className='rounded-md'/>   
              </div> 
              Emmissions
            </div>
          </Link>
          <Link href={'/news/events'} >
            <div className="min-w-[76px] h-[88px] shadow-lg border-[1px] flex flex-col items-center justify-between p-[4px] rounded-lg mx-2
              bg-white hover:bg-white/60">
              <div className="h-[60px] w-[100%] bg-gray-200 rounded flex justify-center">
                < Image src="/images/news_navbar/news_button9.png" alt="T-MAK Logo" width={70} height={70} 
                  className='rounded-md'/>   
              </div>  Events
            </div>
          </Link>
          <Link href={'/news/job/'} >
            <div className="min-w-[76px] h-[88px] shadow-lg border-[1px] flex flex-col items-center justify-between p-[4px] rounded-lg mx-2
              bg-white hover:bg-white/60">
              <div className="h-[60px] w-[100%] bg-gray-200 rounded flex justify-center">
                < Image src="/images/news_navbar/news_button12.png" alt="T-MAK Logo" width={70} height={70} 
                  className='rounded-md'/>   
              </div> 
               Job
            </div>
          </Link>
          {/* Add more categories as needed */}
        </div>
    </div>
  )
}

export default NewsNavbar;
