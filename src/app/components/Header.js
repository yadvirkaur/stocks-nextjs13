'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="z-10 fixed top-0 left-0 right-0 overflow-hidden">
      {/* Header---------------------------------------------------------- */}
      <div className="  min-h-[65px] flex flex-row flex-nowrap py-3 px-2 items-center justify-between border-b overflow-hidden  bg-white">
        <Link href="/">
          <Image src="/images/logo.jpg" alt="Logo" width={50} height={50} />
        </Link>
        <div className=" w-[50%] justify-between ml-[14px] mr-[24px] flex flex-row items-center border rounded-md p-[6px]">
          <div className="navbar_text">
            <input
              type="text"
              className="text-[15px] outline-none"
              placeholder="Enter Stock Name"
            />
          </div>
          <div className="icon">
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.939453 6.27637C0.939453 9.41113 3.48828 11.96 6.62305 11.96C7.91211 11.96 9.08398 11.5278 10.0361 10.8101L13.8521 14.6333C13.9839 14.7651 14.167 14.8384 14.3501 14.8384C14.7749 14.8384 15.0532 14.5161 15.0532 14.1279C15.0532 13.9375 14.98 13.7617 14.8555 13.6299L11.0542 9.82129C11.8379 8.84717 12.3066 7.6167 12.3066 6.27637C12.3066 3.1416 9.75781 0.592773 6.62305 0.592773C3.48828 0.592773 0.939453 3.1416 0.939453 6.27637ZM1.8916 6.27637C1.8916 3.66895 4.01562 1.54492 6.62305 1.54492C9.23047 1.54492 11.3545 3.66895 11.3545 6.27637C11.3545 8.88379 9.23047 11.0078 6.62305 11.0078C4.01562 11.0078 1.8916 8.88379 1.8916 6.27637Z"
                fill="#5C5C5C"
              />
            </svg>
          </div>
        </div>

        <div className=" xs:hidden  md:block text-sm flex flex-row flex-nowrap items-center ">
          <Link href="/" className="mx-2">
            Contact us
          </Link>
          <button className="border rounded-md px-[14px] py-[4px] mx-2">
            Sign up
          </button>
          <button className="border rounded-md px-[14px] py-[4px] mx-2">
            Log in
          </button>
        </div>

        {/* Dropdown Icon */}
        <div
          className="md:hidden xs:block cursor-pointer"
          onClick={toggleDropdown}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 320 512"
            fill="grey"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg>
        </div>

        <div
          className={`bg-white z-10 fixed top-[65px] right-0 text-sm flex flex-col w-[40%] justify-start transition-all duration-300 transform ${
            isDropdownOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Link href="/" className="border-b border-gray-100 p-3 pl-4">
            Sign up
          </Link>
          <span className="border-b border-gray-100 p-3 pl-4">Log in</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
