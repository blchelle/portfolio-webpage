import React, { ChangeEvent, useState } from 'react';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';
import TextInput from '@components/TextInput';

const Form = () => {
	return (
		<form method='POST' name='contact' className='contact__form' data-aos='fade-left'>
			<input type='hidden' name='form-name' value='contact' />
			<TextInput label='Name' name='name' required />
			<TextInput label='Email' name='email' required type='email' />
			<TextInput label='Message' name='message' required numLines={6} />
			<button type='submit'>
				Send <SendIcon className='contact__send__icon' />
			</button>
		</form>
	);
};

export default Form;
