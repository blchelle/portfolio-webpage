import React, { ChangeEvent, useState } from 'react';

interface TextInputProps {
	label: string;
	name: string;
	numLines?: number;
	required: boolean;
	type?: string;
	isValid: (value: string) => boolean;
}

interface InputState {
	error: boolean;
	isEmpty: boolean;
	visited: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
	label,
	name,
	required,
	numLines = 1,
	type = 'text',
	isValid,
}) => {
	const [input, setInput] = useState<InputState>({ error: false, isEmpty: true, visited: false });
	const { error, isEmpty, visited } = input;

	const handleChange = ({
		target: { value },
	}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const error = !isValid(value);
		setInput({ error, isEmpty: value.length === 0, visited });
	};

	const handleBlur = () => {
		setInput({ ...input, visited: true });
	};

	const commonProps = {
		className: `${error ? 'error' : ''} ${visited ? 'visited' : ''}`,
		type: type,
		name: name,
		id: name,
		required: required,
		onChange: handleChange,
		onBlur: handleBlur,
	};

	return (
		<div className='contact__container'>
			<label
				className={`name__label ${error ? 'error' : ''} ${visited ? 'visited' : ''} ${
					isEmpty ? '' : 'raised'
				}`}
				htmlFor={name}
			>
				{label}
			</label>
			{numLines === 1 ? (
				<input {...commonProps} type={type} />
			) : (
				<textarea {...commonProps} rows={numLines} />
			)}
		</div>
	);
};

export default TextInput;
