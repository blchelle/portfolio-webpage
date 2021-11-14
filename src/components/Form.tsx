import React from 'react';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';
import TextInput from '@components/TextInput';
import { SectionChildProps } from './Section';

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

const Form: React.FC<SectionChildProps> = ({ cardColor }) => {
	return (
		<form
			method='POST'
			name='contact'
			className={`${cardColor} col-span-1 lg:col-span-4 flex flex-col justify-between flex-1 w-full sm:w-auto p-12 pt-20 rounded-lg shadow-xl`}
			data-aos='fade-left'
		>
			<input type='hidden' name='form-name' value='contact' />
			<TextInput label='Name' name='name' required isValid={validateEmpty} />
			<TextInput label='Email' name='email' required type='email' isValid={validateEmail} />
			<TextInput label='Message' name='message' required numLines={6} isValid={validateEmpty} />
			<button type='submit' className='btn-primary'>
				Send <SendIcon className='h-10 w-10 text-gray-1 fill-current ml-4' />
			</button>
		</form>
	);
};

export default Form;
