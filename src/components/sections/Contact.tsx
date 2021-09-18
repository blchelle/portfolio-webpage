import React from 'react';
import ContactHightlight from '@components/ContactHightlight';
import Form from '@components/Form';

import { ReactComponent as CompassIcon } from '@assets/icons/compass.svg';
import { ReactComponent as MailIcon } from '@assets/icons/mail.svg';
import { ReactComponent as LinkedInIcon } from '@assets/logos/linkedin-logo.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github-logo.svg';

const Contact: React.FC = () => {
	return (
		<div className='contact__flex'>
			<div className='contact__info__container' data-aos='fade-right'>
				<ContactHightlight
					Icon={CompassIcon}
					title='Location'
					subtitle={{ text: 'Edmonton, Canada' }}
				/>
				<ContactHightlight
					Icon={MailIcon}
					title='Email'
					subtitle={{ text: 'brocklchelle@gmail.com' }}
				/>
				<ContactHightlight
					Icon={LinkedInIcon}
					title='LinkedIn'
					subtitle={{ text: 'Click to be redirected!', url: 'https://linkedin.com/in/blchelle' }}
				/>
				<ContactHightlight
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
