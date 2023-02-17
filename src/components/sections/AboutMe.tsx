import React from 'react';

import Skills from '@components/Skills';

import Button from '@components/Button';
import pictureOfMe from '@assets/me.jpg';
import { ReactComponent as DocumentIcon } from '@assets/icons/document.svg';
import text from 'src/text';

const AboutMe: React.FC = () => {
	return (
		<>
			<div className='grid grid-cols-1 xl:grid-cols-2 gap-20 items-center justify-items-center mb-16'>
				<div className='w-120 h-120 xl:h-200 xl:w-200 flex-center' data-aos='fade-right'>
					<div className='flex-center h-95p w-95p bg-primary clip-hexagon hover:w-full hover:h-full transition-all'>
						<img className='w-95p h-auto clip-hexagon' src={pictureOfMe} alt='Picture of me' />
					</div>
				</div>
				<div className='text-3xl leading-relaxed flex-center flex-col' data-aos='fade-left'>
					{text.aboutMe.map((text) => (
						<p key={text} className='mb-8 last:mb-0'>
							{text}
						</p>
					))}
					<Button
						text='View My Resume'
						Icon={DocumentIcon}
						onClick={() => window.open('./resume.pdf', '_blank')}
					/>
				</div>
			</div>
			<div className='w-3/4 h-px bg-gray-6 mb-16 col-span-2' />
			<Skills />
		</>
	);
};

export default AboutMe;
