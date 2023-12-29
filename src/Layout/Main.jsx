import React from 'react';
import { Outlet } from 'react-router-dom';
import Sideber from '../Components/Shared/Sideber';
import Navber from '../Components/Shared/Navber';

const Main = () => {
    return (
        <div className='flex '>
            <div className='min-w-[241px]'> 
                <Sideber/>
            </div>
            <div className='w-full'>
                <Navber/>
                <div className='bg-[#F8F8F8]'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Main;