import facebookIcon from "../assets/facebook.svg";
import instagramIcon from "../assets/instagram.svg";
import { motion } from "framer-motion";
import { menuSlide, slide } from "./anim";

const NavMenu = () => {
	const navItems = [
		{
			title: "HOME",
			href: "/",
		},
		{
			title: "PORTFOLIO",
			href: "/portfolio",
		},
		{
			title: "SERVICES",
			href: "/services",
		},
		{
			title: "ABOUT US",
			href: "/about",
		},
	];

	return (
		<motion.div
			variants={menuSlide}
			animate='enter'
			exit='exit'
			initial='initial'
			className='fixed right-0 bg-black  text-white flex w-full justify-center items-center'
		>
			<div className='p-10 justify-between flex my-24 '>
				<div className='flex flex-col text-2xl '>
					<div className='flex flex-col justify-center items-center  '>
						<motion.div
							variants={slide}
							animate='enter'
							exit='exit'
							initial='initial'
						>
						
						</motion.div>
						<div className=' flex flex-col justify-center items-center gap-4 sm:gap-8 -mt-14'>
						<h1 className="text-xl sm:text-2xl md:text-3xl font-['Oswald'] text-white font-bold">
							OUTBACK EDGE STUDIO
						</h1>
							{navItems.map((item) => {
								return (
									
									<motion.div
										variants={slide}
										animate='enter'
										exit='exit'
										initial='initial'
										key={item.title}
									>
										
										<a href={item.href} className="text-lg sm:text-2xl md:text-3xl text-white font-medium font-['Infer'] ">
											{item.title}
										</a>
									</motion.div>
								);
							})}
						</div>
					</div>
					<motion.div
						variants={slide}
						animate='enter'
						exit='exit'
						initial='initial'
					>
						<div class='flex flex-row justify-center gap-8 my-12 md:mr-6'>
							<a href='/' target='_blank'>
								<img
									src={facebookIcon.src}
									alt='Facebook icon'
									width={30}
									height={30}
									loading="lazy"
								/>
							</a>
							<a href='/' target='_blank'>
								<img
									src={instagramIcon.src}
									alt='Instagram Icon'
									width={30}
									height={30}
									loading="lazy"
								/>
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default NavMenu;
