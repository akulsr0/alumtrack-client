import React, { useRef } from 'react';

export default function Topbar({ user }) {
  const navMobile = useRef();
  const navMobileRight = useRef();

  const toggleMenu = () => {
    if (navMobile.current.classList[0] === 'w-full') {
      navMobile.current.classList.value = 'hidden';
    } else {
      navMobile.current.classList.value =
        'w-full h-full z-50 transition fixed top-0 left-0 flex flex-row';
    }
  };

  return (
    <div>
      <div
        id='nav'
        className='w-full h-12 bg-blue-400 px-2 flex flex-row items-center'
      >
        <img
          id='menu'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/30px-Hamburger_icon_white.svg.png'
          alt=''
          className='cursor-pointer'
          onClick={toggleMenu}
        />
        <h3 className='text-lg text-white font-bold ml-4'>
          {user.firstname} {user.lastname}
        </h3>
      </div>
      <div className='hidden' ref={navMobile}>
        <div className='w-4/5 h-full bg-gray-50 flex flex-col p-4'>
          <div className='flex flex-col'>
            <img
              src={user.profileImage}
              alt=''
              className='w-32 rounded-full shadow self-center'
            />
            <h2 className='mt-4 text-gray-900 text-2xl text-center font-extrabold'>
              {user.firstname} {user.lastname}
            </h2>
          </div>
          <ul className='mt-4'>
            <li className='text-xl mt-2 font-bold text-gray-900'>
              🏠&nbsp;&nbsp;&nbsp;Home
            </li>
            <li className='text-xl mt-2 font-bold text-gray-900'>
              👥&nbsp;&nbsp;&nbsp;Connections
            </li>
            <li className='text-xl mt-2 font-bold text-gray-900'>
              🔥&nbsp;&nbsp;&nbsp;Trending
            </li>
            <li className='text-xl mt-2 font-bold text-gray-900'>
              ℹ️&nbsp;&nbsp;&nbsp;About
            </li>
          </ul>
        </div>
        <div
          ref={navMobileRight}
          className='w-1/5 h-full bg-transparent'
          onClick={toggleMenu}
        ></div>
      </div>
    </div>
  );
}
