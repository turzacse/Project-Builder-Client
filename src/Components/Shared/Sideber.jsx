import React from 'react';
import { NavLink } from 'react-router-dom';
//bg-[#FFF]
const Sideber = () => {


    return (
        <div className=' bg-yellow-200 min-h-screen pl-8 pt-2'>

            {/* <h2 className='mb-10 text-center'>Neclec</h2> */}

            

            <ul className='menu z-10 md:fixed flex flex-col justify-between overflow-x-hidden space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform'>
            
                <div>
                <img className='h-[27px] w-[76px] mx-auto mb-12' src="https://i.ibb.co/SVSSJTB/logo.png" alt="" />
                    <li><NavLink to='/dashboard/book'>My Project</NavLink></li>
                    <li><NavLink to='/dashboard/myparcel'>Sample Project</NavLink></li>
                    <hr />
                    <li><NavLink to='/dashboard/profile'>Apps</NavLink></li>
                    <li><NavLink to='/dashboard/profile'>Intro to Necleo</NavLink></li>
                </div>

                <div className=''>
                    <li><NavLink to='/dashboard/book'>My Project</NavLink></li>
                    <li><NavLink to='/dashboard/myparcel'>Sample Project</NavLink></li>
                </div>
            </ul>
            
        </div>
    );
};

export default Sideber;