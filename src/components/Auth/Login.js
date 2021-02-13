import React from 'react';

import banner from '../../assets/Illustrations/three_alumni.png';
import Navigation from '../../navigation';

export default function Login() {
  const goToRegister = () => {
    Navigation.goToRegister();
  };

  return (
    <div>
      <div className='w-screen min-h-screen bg-blue-400 flex flex-col lg:flex-row items-center px-6'>
        {/* Vector Banner */}
        <div className='hidden lg:flex-1 lg:block flex justify-center'>
          {/* "Designed by Freepik" */}
          <img src={banner} alt='' className='w-0 lg:w-3/4 xl:w-auto mx-auto' />
        </div>
        <div className='w-full md:w-3/4 lg:w-1/3 flex flex-col mt-4'>
          <h3 className='font-extrabold text-3xl text-center text-gray-100'>
            Welcome to AlumTrack
          </h3>
          <div className='w-full bg-white flex flex-col mt-6 p-6 py-6 rounded-md shadow-md'>
            <input
              type='email'
              placeholder='Email'
              className='h-10 bg-gray-200 rounded px-2'
            />
            <input
              type='password'
              placeholder='Password'
              className='h-10 bg-gray-200 mt-2 rounded px-2'
            />

            <button
              type='button'
              className='w-full h-10 bg-blue-500 mt-4 rounded text-white font-bold'
            >
              Login
            </button>

            <button
              type='button'
              className='w-full h-10 bg-white rounded border-2 text-blue-500 font-bold border-blue-500 mt-2'
              onClick={goToRegister}
            >
              Register
            </button>

            <hr className='mt-4' />
            <p className='text-center text-blue-500 font-semibold cursor-pointer mt-6'>
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
