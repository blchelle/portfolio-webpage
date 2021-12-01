import React, { useState } from 'react';
import classes from '@tailwind/Form';

import Button from '@components/Button';
import Card from '@components/Card';
import TextInput from '@components/TextInput';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';

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

	const handleSubmitClicked = () => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', name: name, email: email, message: message }),
		}).then(() => {
			setFormSent(true);
		});
	};

	const handleInputChange =
		(setter: React.Dispatch<React.SetStateAction<string>>) =>
		(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			setter(event.target.value);
		};

	return (
		<Card className={classes.container} animation='fade-left'>
			<div className={classes.sentCard} style={{ left: formSent ? '0' : '100%' }}>
				I've received your message!
			</div>
			<div className={classes.form}>
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
				<Button text='Send Message' onClick={handleSubmitClicked} Icon={SendIcon} />
			</div>
		</Card>
	);
};

export default Form;
