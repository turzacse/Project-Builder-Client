import React from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

const Navber = () => {
    return (
        <div className=''>
            <div className="navbar pr-3">
                <div className="navbar-start">                  
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    <div className='md:flex md:flex-col gap-2 hidden'>
                        <h2 className='mr-3 font-medium text-[14px]'>Free Trail  |  <span className='text-[10px] font-normal'>2 days left</span></h2>
                        <p className='text-[#FA782F] text-[10px] font-medium'>Extend free trail</p>
                    </div>
                    <div className='flex mr-8 justify-center items-center'>
                        <img className='w-[36px] h-[36px] rounded-full mr-3' src="https://i.ibb.co/J3P89HY/Whats-App-Image-2023-09-10-at-12-02-19-PM.jpg" alt="" />
                        <IoMdArrowDropdown/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;