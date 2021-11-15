import React from 'react';
import Card from '@components/Card';
import { SectionChildProps } from '@components/Section';

export interface IExperience {
	name: string;
	position: string;
	startEndYears: [number, number];
	text: string[];
	Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	SecondaryLogo?: React.FunctionComponent<
		React.SVGProps<SVGSVGElement> & { title?: string | undefined }
	>;
	logoBackgroundClass: string;
	backgroundImage: string;
}

interface ExperienceProps {
	experience: IExperience;
}

const Experience: React.FC<ExperienceProps & SectionChildProps> = ({
	experience: {
		name,
		position,
		startEndYears,
		text,
		backgroundImage,
		Logo,
		SecondaryLogo,
		logoBackgroundClass,
	},
	cardColor,
}) => {
	return (
		<div className='grid grid-cols-1 xl:grid-cols-3 gap-20 mb-16'>
			<div className='flex flex-col col-span-2 self-start p-8'>
				<Card className='mb-8' animation='fade-right' bgColorClass={cardColor}>
					<div className='flex'>
						{SecondaryLogo !== undefined ? (
							<Logo className='h-16 w-16 mr-4 visible xl:hidden' />
						) : (
							<Logo className='h-16 w-16 mr-4 visible xl:hidden' />
						)}
						<h3 className='text-6xl font-bold mb-4'>{name}</h3>
					</div>
					<div className='flex justify-between text-3xl font-light'>
						<p>{position}</p>
						<p>
							{startEndYears[0] === startEndYears[1]
								? startEndYears[0]
								: startEndYears[0] + '-' + startEndYears[1]}
						</p>
					</div>
				</Card>
				<ul className='list-disc text-3xl leading-relaxed flex flex-col ml-8'>
					{text.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</div>
			<div className='relative hidden xl:flex justify-center items-end' data-aos='fade-left'>
				<div className='overflow-hidden rounded-full border-solid border-primary border-4'>
					<img src={backgroundImage} />
				</div>
				<div
					className={`absolute flex-center bottom-0 left-0 overflow-hidden rounded-full border-solid border-gray-6 border-4 ${logoBackgroundClass}`}
				>
					<Logo className='w-2/3 h-44' />
				</div>
			</div>
		</div>
	);
};

export default Experience;
