import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Cards/Card';

const Project = () => {
    return (
        <div className='my-5 md:mx-20 ml-[100px]'>
            <h2 className='text-black text-4xl font-normal mb-6'>My Projects</h2>
            <div className=' md:w-[404px] w-[202px] h-[132px] md:h-[265px] p-4'>
                <div className='bg-[#fa782f66] md:w-[360px] w-[180px] h-[90px] md:h-[180px] mx-1 md:pt-16 pt-6'>
                    <Link to='/add'>
                    <img className=' w-[53px] h-[53px] mx-auto' src="https://i.ibb.co/JyfLrxn/media.png" alt="" />
                    </Link>
                </div>
                <div className='text-center mt-3'>
                    <h2 className='font-semibold'>Create a new project</h2>
                    <p>or try a <Link to='/sample' className='text-[#FA782F]'>sample project</Link></p>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-center text-xl md:text-3xl font-bold text-orange-500 mb-10 '>My Sample Project</h2>
            <Card/>
            </div>
        </div>
    );
};


export default Project;