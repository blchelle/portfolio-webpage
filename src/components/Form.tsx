import React, { useState } from 'react';

import TextInput from '@components/TextInput';
import Card from '@components/Card';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';
import { classnames } from 'tailwindcss-classnames';

const isEmpty = (value: string) => {
	return value.length === 0;
};

const validateEmpty = (value: string) => {
	return !isEmpty(value);
};

const validateEmail = (email: string) => {
	if (isEmpty(email)) {
		return false;
	}

	const emailRegex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(String(email).toLowerCase());
};

const encode = (data: { [field in FormField | 'form-name']: string }) => {
	const keys = Object.keys(data) as (FormField | 'form-name')[];
	return keys.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
};

type FormField = 'name' | 'email' | 'message';

const Form: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [formSent, setFormSent] = useState(false);

	const handleSubmitClicked = (event: React.FormEvent<HTMLFormElement>) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', name: name, email: email, message: message }),
		}).then(() => {
			setFormSent(true);
		});

		event.preventDefault();
	};

	const handleInputChange =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setter(event.target.value);
		};

	const buttonClasses = classnames('bg-primary', {
		'opacity-50': formSent,
		'cursor-default': formSent,
		'hover:bg-primary-dark': !formSent,
	});

	const successCardClasses = classnames(
		'absolute',
		'top-0',
		'h-full',
		'w-full',
		'p-8',
		'flex',
		'items-center',
		'justify-center',
		'text-center',
		'text-4xl',
		'font-bold',
		'bg-primary',
		'rounded-lg',
		'z-10',
		'transition-all',
		'duration-500'
	);

	return (
		<Card className='relative col-span-1 lg:col-span-4 overflow-hidden' animation='fade-left'>
			<div className={successCardClasses} style={{ left: formSent ? '0' : '100%' }}>
				I've received your message!
			</div>
			<form
				method='POST'
				name='contact'
				className='flex flex-col justify-between flex-1'
				onSubmit={handleSubmitClicked}
			>
				<div className='h-8 w-full' />
				<TextInput
					label='Name'
					name='name'
					required
					onChange={handleInputChange(setName)}
					isValid={validateEmpty}
				/>
				<TextInput
					label='Email'
					name='email'
					required
					type='email'
					onChange={handleInputChange(setEmail)}
					isValid={validateEmail}
				/>
				<TextInput
					label='Message'
					name='message'
					required
					numLines={6}
					onChange={handleInputChange(setMessage)}
					isValid={validateEmpty}
				/>
				<button disabled={formSent} type='submit' className={`btn ${buttonClasses}`}>
					Send <SendIcon className='h-10 w-10 text-gray-1 fill-current ml-4' />
				</button>
			</form>
		</Card>
	);
};

export default Form;
