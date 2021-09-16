import React, { ChangeEvent, useState } from 'react';
import ContactHightlight from '@components/ContactHightlight';

import { ReactComponent as CompassIcon } from '@assets/icons/compass.svg';
import { ReactComponent as MailIcon } from '@assets/icons/mail.svg';
import { ReactComponent as LinkedInIcon } from '@assets/logos/linkedin-logo.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github-logo.svg';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';

interface InputState {
	error: boolean;
	isEmpty: boolean;
}
interface ContactInputState {
	name: InputState;
	email: InputState;
	message: InputState;
}

const Contact: React.FC = () => {
	const [inputs, setInputs] = useState<ContactInputState>({
		name: { error: false, isEmpty: true },
		email: { error: false, isEmpty: true },
		message: { error: false, isEmpty: true },
	});

	const checkInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {
			name,
			validity: { valid },
			value,
		} = event.target;
		if (name !== 'name' && name !== 'email' && name !== 'message') return;

		setInputs({ ...inputs, [name]: { error: !valid, isEmpty: value.length === 0 } });
	};

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

			<form method='POST' name='contact' className='contact__form' data-aos='fade-left'>
				<input type='hidden' name='form-name' value='contact' />
				<div className='contact__container contact__container--name'>
					<label
						className={`name__label ${inputs.name.error ? 'error' : ''} ${
							inputs.name.isEmpty ? '' : 'raised'
						}`}
						htmlFor='name'
					>
						Name
					</label>
					<input type='text' name='name' id='name' required onChange={checkInput} />
				</div>
				<div className='contact__container contact__container--email'>
					<label
						htmlFor='email'
						className={`${inputs.email.error ? 'error' : ''} ${
							inputs.email.isEmpty ? '' : 'raised'
						}`}
					>
						Email Address
					</label>
					<input type='email' name='email' id='email' required onChange={checkInput} />
				</div>
				<div className='contact__container contact__container--message'>
					<label
						htmlFor='message'
						className={`${inputs.message.error ? 'error' : ''} ${
							inputs.message.isEmpty ? '' : 'raised'
						}`}
					>
						Your Message
					</label>
					<textarea name='message' id='message' cols={30} rows={8} required onChange={checkInput} />
				</div>
				<button type='submit'>
					Send <SendIcon className='contact__send__icon' />
				</button>
			</form>
		</div>
	);
};

export default Contact;
