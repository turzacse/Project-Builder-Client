import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDatabase } from "react-icons/fa";
import { TbApps } from "react-icons/tb";
import { RiAppsFill } from "react-icons/ri";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiFeedbackFill } from "react-icons/ri";

//bg-[#FFF]
const Sideber = () => {


    return (
        <div className=' min-h-screen pl-8 pt-2'>

            {/* <h2 className='mb-10 text-center'>Neclec</h2> */}

            

            <ul className='menu z-10 md:fixed flex flex-col justify-between overflow-x-hidden md:space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform'>
            
                <div>
                <img className='h-[27px] w-[76px] mx-auto mb-12' src="https://i.ibb.co/SVSSJTB/logo.png" alt="" />
                <div>
                <li><NavLink to='/'><FaDatabase /> My Project</NavLink></li>
                    <li><NavLink to='/dashboard/myparcel'><RiAppsFill /> Sample Project</NavLink></li>
                    <hr />
                    <li><NavLink to='/dashboard/profile'><TbApps /> Apps</NavLink></li>
                    <li><NavLink to='/dashboard/profile'><MdSlowMotionVideo /> Intro to Necleo</NavLink></li>

                </div>
                {/* <div className='md:hidden block'>
                    <li><NavLink to='/dashboard/book'><IoIosHelpCircleOutline /> Help & Support</NavLink></li>
                    <li><NavLink to='/dashboard/myparcel'><RiFeedbackFill /> Feedback</NavLink></li>
                </div> */}
                </div>

                <div className=''>
                    <li><NavLink to='/dashboard/book'><IoIosHelpCircleOutline /> Help & Support</NavLink></li>
                    <li><NavLink to='/dashboard/myparcel'><RiFeedbackFill /> Feedback</NavLink></li>
                </div>
            </ul>
            
        </div>
    );
};

export default Sideber;