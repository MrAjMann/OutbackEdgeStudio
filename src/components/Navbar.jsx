import {  useState } from "react";

import "../styles/animations.css";
import NavMenu from "./NavMenu";
import { AnimatePresence } from 'framer-motion';



const Navbar = () => {
	const [isActive, setIsActive] = useState(false);



	return (
		<nav className='w-full'>
			{/* Mobile View */}
			<div
				className={`lg:hidden fixed flex xl:py-5 px-3 w-full h-[4.5rem] z-50 transition-colors ${
					isActive ? "opacity-90" : "opacity-75"
				}`}
			>
				<div className='flex w-full justify-between items-center mx-4 '>
						<a href='/' className='flex items-center text-2xl font-[Oswald] text-white  mt-8'>
							OUTBACK EDGE STUDIO
						</a>

					<div
						onClick={() => {
							console.log('clicked')
							setIsActive(!isActive);
						}}
						className={`${"button cursor-pointer"} `}
					>
						<div
							id='nav-icon'
							className={` ${"burger"} ${isActive ? "burgerActive" : ""}`}
						></div>
					</div>
				</div>
				<AnimatePresence mode='wait'>{isActive && <NavMenu />}</AnimatePresence>
			</div>

			
			{/* Desktop View */}
			<div className="hidden fixed left-0 w-full p-8 z-10  h-18 max-h-20  lg:flex items-center justify-center  bg-[#020202d1] text-white mix-blend-luminosity font-['Inter']"  >
				<ul className='relative flex justify-center align-middle items-center gap-16 '> 
					<li className='hover:border-b   py-2 tranisition ease-in-out font-semibold' >
						<a href='/'>HOME</a>
					</li>
					{/* <div className=' border-l border-gray-500  w-[2px] '></div> */}
					<li className='hover:border-b py-2 tranisition ease-in-out duration-200 font-semibold' >
						<a href='/portfolio'>PORTFOLIO</a>
					</li>

					<li>
					<a href='/' className="flex items-center text-5xl ">
							OUTBACK EDGE STUDIO
						</a>
					</li>
					<li className='hover:border-b py-2 tranisition ease-in-out duration-200 font-semibold'>
						<a href='/services'>SERVICES</a>
					</li>
					{/* <div className='h-[70px] bg-white fill-white w-[2px]'></div> */}
					<li className='hover:border-b py-2 tranisition ease-in-out duration-200 font-semibold'>
						<a href='/about'>ABOUT US</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
