import React from 'react';

import pictureOfMe from '@assets/me.jpg';
import text from 'src/text';

const AboutMe: React.FC = () => {
	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 gap-20 items-center justify-items-center'>
			<div className='w-120 h-120 xl:h-200 xl:w-200 flex-center' data-aos='fade-right'>
				<div className='flex-center h-95p w-95p bg-primary clip-hexagon hover:w-full hover:h-full transition-all'>
					<img className='w-11/12 h-auto clip-hexagon' src={pictureOfMe} alt='Picture of me' />
				</div>
			</div>
			<div className='flex-center flex-col'>
			{ Object.values(text.aboutMe).map((text) => (
				<p className='mb-8' data-aos='fade-left'>
					{text}
				</p>
			))}
			</div>
			<a
				className='btn-primary col-span-full'
				target='_blank'
				href='./resume.pdf'
				data-aos='zoom-in'
			>
				View My Resume
			</a>
		</div>
	);
};

export default AboutMe;
