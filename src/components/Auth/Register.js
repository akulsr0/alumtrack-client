import React from 'react';

import banner from '../../assets/Illustrations/three_alumni.png';

export default function Register() {
  return (
    <div>
      <div className='w-screen min-h-screen bg-blue-400 flex flex-col lg:flex-row items-center px-6'>
        {/*  Vector Banner */}
        <div className='hidden lg:flex-1 lg:block flex justify-center'>
          {/* "Designed by Freepik"  */}
          <img src={banner} alt='' className='w-0 lg:w-3/4 xl:w-auto mx-auto' />
        </div>
        <div className='w-full md:w-3/4 lg:w-1/3 flex flex-col mt-4'>
          <h3 className='font-extrabold text-3xl text-center text-gray-100'>
            Register Now
          </h3>
          <div className='w-full bg-white flex flex-col mt-6 p-6 py-6 rounded-md shadow-md'>
            <input
              type='text'
              placeholder='Name'
              className='h-10 bg-gray-200 rounded px-2'
            />
            <input
              type='email'
              placeholder='Email'
              className='h-10 bg-gray-200 mt-2 rounded px-2'
            />
            <div className='flex items-center mt-2'>
              <label for=''>🇮🇳&nbsp;&nbsp;+91</label>
              <input
                type='number'
                pattern='[0-9]{10}'
                placeholder='Mobile Number'
                className='flex-1 h-10 bg-gray-200 rounded ml-2 px-2'
              />
            </div>
            <input
              type='password'
              placeholder='Password'
              className='h-10 bg-gray-200 mt-2 rounded px-2'
            />
            <input
              type='password'
              placeholder='Confirm Password'
              className='h-10 bg-gray-200 mt-2 rounded px-2'
            />
            <button
              type='button'
              className='w-full h-10 bg-blue-500 mt-4 rounded text-white font-bold'
            >
              Register
            </button>
            <hr className='mt-4' />
            <a
              href='/'
              className='text-center text-blue-500 font-semibold cursor-pointer mt-6'
            >
              Already have an account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
