import React from 'react';

import pictureOfMe from '@assets/me.jpg';
import text from 'src/text';

const AboutMe: React.FC = () => {
	return (
		<div className='grid grid-cols-1 xl:grid-cols-2 gap-20 items-center justify-items-center'>
			<div className='w-120 h-120 xl:h-200 xl:w-200 flex-center' data-aos='fade-right'>
				<div className='flex-center h-95p w-95p bg-primary clip-hexagon hover:w-full hover:h-full transition-all'>
					<img className='w-95p h-auto clip-hexagon' src={pictureOfMe} alt='Picture of me' />
				</div>
			</div>
			<div
				className='text-3xl text-gray-7 dark:text-gray-1 leading-relaxed flex-center flex-col p-8 rounded-lg bg-gray-2 dark:bg-gray-6'
				data-aos='fade-left'
			>
				{Object.values(text.aboutMe).map((text) => (
					<p key={text} className='mb-8 last:mb-0'>
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
