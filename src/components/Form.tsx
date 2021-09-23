import React, { ChangeEvent, useState } from 'react';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';
import TextInput from '@components/TextInput';

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

const Form = () => {
	return (
		<form method='POST' name='contact' className='contact__form' data-aos='fade-left'>
			<input type='hidden' name='form-name' value='contact' />
			<TextInput label='Name' name='name' required isValid={validateEmpty} />
			<TextInput label='Email' name='email' required type='email' isValid={validateEmail} />
			<TextInput label='Message' name='message' required numLines={6} isValid={validateEmpty} />
			<button type='submit'>
				Send <SendIcon className='contact__send__icon' />
			</button>
		</form>
	);
};

export default Form;
