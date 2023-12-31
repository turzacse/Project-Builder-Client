import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
           <div className='card w-[400px] shadow-2xl md:mt-20 mt-4 h-[300px] mx-auto bg-yellow-200'>
              <div>
                <img className='w-1/2 mx-auto mt-10' src="https://i.ibb.co/SVSSJTB/logo.png" alt="" />
                <h2 className='text-xl mt-10 text-center font-bold'>This Page is not build yet <br />
                <Link to='/' className='text-blue-500'>Go back to Dashboard</Link>
                </h2>
              </div>
           </div>
        </div>
    );
};

export default Error;