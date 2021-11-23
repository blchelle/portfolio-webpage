import React from 'react';
import Experience from '@components/Experience';
import EXPERIENCES_CONTENT from '@content/experiences';

const Experiences: React.FC = () => {
	const divider = <div className='w-3/4 h-px bg-gray-5 mb-16' />;

	return (
		<div className='flex flex-col items-center'>
			{EXPERIENCES_CONTENT.map((experience, index) => (
				<React.Fragment key={experience.name}>
					<Experience experience={experience} />
					{index < EXPERIENCES_CONTENT.length - 1 && divider}
				</React.Fragment>
			))}
		</div>
	);
};

export default Experiences;
