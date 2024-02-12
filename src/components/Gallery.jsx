import { imageData } from "./ImageData.js";
import "../styles/slider.css";


const Gallery = () => {
	return (
		<>
			<div className='grid place-items-center slider overflow-hidden '>
				<div
					className={`calc-w-[calc(250px * ${imageData.length})] flex slide-track`}
				>
					<div className='flex items-center gap-2 overflow-hidden'>
						{imageData.map((image) => {
							const imageSrc = image.imageSrc;
							const imageAlt = image.imageAlt;
							const imageIndex = image.imageIndex;
							return (
								<div className='h-full w-full slide object-fit' key={imageIndex}>
									<img
										src={imageSrc}
										alt={imageAlt}
										loading="lazy"
										sizes='100%'
										className=' h-auto min-w-[400px] rounded-lg aspect-square object-cover'
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default Gallery;
