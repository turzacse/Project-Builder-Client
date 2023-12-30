import React from 'react';
import { Outlet } from 'react-router-dom';
import Sideber from '../Components/Shared/Sideber';
import Navber from '../Components/Shared/Navber';

const Main = () => {
    return (
        <div className='flex '>
            <div className='fixed md:min-w-[241px] min-w-[120px] '> 
                <Sideber/>
            </div>
            <div className='w-full'>
                <div className='fixed h-[100px] ml-[0px] w-full'>
                <Navber/>
                </div>
                <div className='bg-[#F8F8F8] mt-[100px] md:ml-[241px] ml-[90px]'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;