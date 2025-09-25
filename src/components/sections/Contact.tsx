import React from 'react';
import ContactHighlight from '@components/ContactHighlight';
import Form from '@components/Form';
import Card from '@components/Card';
import Highlight from '@components/Highlight';

import { ReactComponent as CompassIcon } from '@assets/icons/compass.svg';
import { ReactComponent as MailIcon } from '@assets/icons/mail.svg';
import { ReactComponent as LinkedInIcon } from '@assets/logos/linkedin.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github.svg';

const Contact: React.FC = () => {
	return (
		<>
			<div className='text-3xl mb-16 text-center'>
				Thank you so much for taking the time to learn about my skills and professional experience.
				If you would like to learn more about the skill I could bring to your team, please feel free
				to reach out to me through <Highlight text='LinkedIn' />, the contact form below, or by
				emailing me at <Highlight text='brocklchelle@gmail.com' />.
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-7 gap-8 w-full'>
				<Card
					className='grid gap-8 col-span-1 lg:col-span-3 content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-1'
					animation='fade-right'
				>
					<ContactHighlight Icon={CompassIcon} title='Location' subtitle='Edmonton, Canada' />
					<ContactHighlight Icon={MailIcon} title='Email' subtitle='brocklchelle@gmail.com' />
					<ContactHighlight
						Icon={LinkedInIcon}
						title='LinkedIn'
						subtitle='blchelle'
						url='https://linkedin.com/in/blchelle'
					/>
					<ContactHighlight
						Icon={GithubIcon}
						title='Github'
						subtitle='blchelle'
						url='https://github.com/blchelle'
					/>
				</Card>
				<Form />
			</div>
		</>
	);
};

export default Contact;
