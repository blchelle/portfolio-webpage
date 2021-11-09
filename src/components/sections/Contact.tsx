import React from 'react';
import ContactHighlight from '@components/ContactHighlight';
import Form from '@components/Form';

import { ReactComponent as CompassIcon } from '@assets/icons/compass.svg';
import { ReactComponent as MailIcon } from '@assets/icons/mail.svg';
import { ReactComponent as LinkedInIcon } from '@assets/logos/linkedin.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github.svg';

const Contact: React.FC = () => {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-7 gap-8 w-full'>
			<div
				className='grid gap-8 col-span-1 lg:col-span-3 content-start grid-cols-1 md:grid-cols-2 lg:grid-cols-1 p-12 rounded-lg dark:bg-gray-6 bg-gray-2'
				data-aos='fade-right'
			>
				<ContactHighlight
					Icon={CompassIcon}
					title='Location'
					subtitle={{ text: 'Edmonton, Canada' }}
				/>
				<ContactHighlight
					Icon={MailIcon}
					title='Email'
					subtitle={{ text: 'brocklchelle@gmail.com' }}
				/>
				<ContactHighlight
					Icon={LinkedInIcon}
					title='LinkedIn'
					subtitle={{ text: 'Click to be redirected!', url: 'https://linkedin.com/in/blchelle' }}
				/>
				<ContactHighlight
					Icon={GithubIcon}
					title='Github'
					subtitle={{ text: 'Click to be redirected!', url: 'https://github.com/blchelle' }}
				/>
			</div>
			<Form />
		</div>
	);
};

export default Contact;
