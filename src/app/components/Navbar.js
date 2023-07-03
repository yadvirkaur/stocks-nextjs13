'use client';

import Link from 'next/link';

const links = [
  // 'Discussion Forum',
  // 'Market Stories',
  'Sentiment',
  'Market',
  'Sector',
  'Watchlist',
  'Events',
  'News Interview',
];

const Navbar = ({ setIsNavbarOpen, isNavbarOpen }) => {
  return (
    <div className="">
      {/* Navbar----------------------------------------------------------- */}
      <nav
        className={` fixed top-[65px] h-[100vh] sm:w-[23vw] xs:w-[50vw] flex flex-col bg-[#093967] text-white text-xs  transition-transform duration-300 ease-in-out  ${
          isNavbarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Navbar User */}

        <div className=" p-6 pl-6 flex gap-2 items-center justify-start h-8  border-b border-slate-600 ">
          <svg className=" h-[15px] w-[15px] fill-white">
            <use href="/images/icons.svg#icon-user"></use>
          </svg>
          <div className="whitespace-nowrap">Hello, User</div>
          <svg className=" h-[15px] w-[15px] fill-white ml-auto">
            <use href="/images/icons.svg#icon-notification"></use>
          </svg>
        </div>

        {/* Navbar Items */}

        <ul className="  flex-grow overflow-auto mt-4 mb-[80px]">
          <li className=" flex gap-2 items-center justify-start p-2 pl-6 hover:bg-blue-950">
            <svg className=" h-[15px] w-[15px] fill-white">
              <use href="/images/icons.svg#icon-discussion"></use>
            </svg>
            <Link href="discussionforum">Discussion Forum</Link>
          </li>

          <li className=" flex gap-2 items-center justify-start p-2 pl-6 hover:bg-blue-950">
            <svg className=" h-[15px] w-[15px] fill-white">
              <use href="/images/icons.svg#icon-market"></use>
            </svg>
            <Link href="marketstories">Market Stories</Link>
          </li>

          {links.map((link) => (
            <li key={link} className=" p-2 pl-6 hover:bg-blue-950">
              <Link href={link.toLowerCase().replace(' ', '')}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Button to toggle the navbar */}
      <button
        className={`fixed top-[50vh] flex items-center pr-1 transition-transform duration-300 ease-in-out w-3 h-16 bg-[#093967] text-white  rounded-r-[4px] border-none outline-none focus:outline-none ${
          isNavbarOpen
            ? 'sm:translate-x-[23vw] xs:translate-x-[50vw]'
            : 'translate-x-0'
        }`}
        onClick={() => setIsNavbarOpen((prevState) => !prevState)}
      >
        <svg className=" h-[15px] w-[15px] fill-white">
          <use href="/images/icons.svg#icon-right-arrow"></use>
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
