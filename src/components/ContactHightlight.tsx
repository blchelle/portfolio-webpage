import React from 'react';

interface ContactHightlightProps {
	title: string;
	subtitle: {
		text: string;
		url?: string;
	};
	Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

const ContactHightlight: React.FC<ContactHightlightProps> = ({ title, subtitle, Icon }) => {
	return (
		<div className='group w-full h-24 flex items-center mb-8 last:mb-0'>
			<div className='flex-center w-24 h-full rounded-full mr-8 bg-primary-transparent transition-colors group-hover:bg-primary fill-current'>
				<Icon className='w-10 text-primary transition-colors group-hover:text-gray-1 fill-current' />
			</div>
			<div className='flex flex-col'>
				<h4>{title}</h4>
				{subtitle.url ? (
					<a
						className='text-2xl text-primary font-bold transition-colors hover:text-primary-dark'
						href={subtitle.url}
						aria-label={title}
						rel='noopener'
						target='_blank'
					>
						{subtitle.text}
					</a>
				) : (
					<p className='text-2xl'>{subtitle.text}</p>
				)}
			</div>
		</div>
	);
};

export default ContactHightlight;
