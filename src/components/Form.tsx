import React, { ChangeEvent, useState } from 'react';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';

interface InputState {
	error: boolean;
	isEmpty: boolean;
	value: string;
}

const Form = () => {
	const [name, setName] = useState<InputState>({ error: false, isEmpty: true, value: '' });
	const [email, setEmail] = useState<InputState>({ error: false, isEmpty: true, value: '' });
	const [message, setMessage] = useState<InputState>({ error: false, isEmpty: true, value: '' });

	const handleInputChange =
		(setter: React.Dispatch<React.SetStateAction<InputState>>) =>
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const {
				validity: { valid },
				value,
			} = event.target;
			setter({ error: !valid, isEmpty: value.length === 0, value });
		};

	return (
		<form method='POST' name='contact' className='contact__form' data-aos='fade-left'>
			<input type='hidden' name='form-name' value='contact' />
			<div className='contact__container contact__container--name'>
				<label
					className={`name__label ${name.error ? 'error' : ''} ${name.isEmpty ? '' : 'raised'}`}
					htmlFor='name'
				>
					Name
				</label>
				<input type='text' name='name' id='name' required onChange={handleInputChange(setName)} />
			</div>
			<div className='contact__container contact__container--email'>
				<label
					htmlFor='email'
					className={`${email.error ? 'error' : ''} ${email.isEmpty ? '' : 'raised'}`}
				>
					Email Address
				</label>
				<input
					type='email'
					name='email'
					id='email'
					required
					onChange={handleInputChange(setEmail)}
				/>
			</div>
			<div className='contact__container contact__container--message'>
				<label
					htmlFor='message'
					className={`${message.error ? 'error' : ''} ${message.isEmpty ? '' : 'raised'}`}
				>
					Your Message
				</label>
				<textarea
					name='message'
					id='message'
					cols={30}
					rows={8}
					required
					onChange={handleInputChange(setMessage)}
				/>
			</div>
			<button type='submit'>
				Send <SendIcon className='contact__send__icon' />
			</button>
		</form>
	);
};

export default Form;
