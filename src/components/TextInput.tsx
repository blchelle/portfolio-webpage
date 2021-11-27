import React, { ChangeEvent, useState } from 'react';
import classes from '@tailwind/TextInput';

interface TextInputProps {
	label: string;
	name: string;
	numLines?: number;
	required: boolean;
	type?: string;
	isValid: (value: string) => boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
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
	onChange,
}) => {
	const [input, setInput] = useState<InputState>({ error: false, isEmpty: true, visited: false });
	const { error, isEmpty, visited } = input;

	const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {
			target: { value },
		} = event;

		const error = !isValid(value);
		setInput({ error, isEmpty: value.length === 0, visited });
		onChange(event);
	};

	const handleBlur = () => {
		setInput({ ...input, visited: true });
	};

	const commonInputProps = {
		className: classes.input(error, visited, numLines),
		type: type,
		name: name,
		id: name,
		required: required,
		onChange: handleChange,
		onBlur: handleBlur,
	};

	return (
		<div className={classes.container}>
			<label
				className={classes.label(visited, isEmpty, error)}
				style={{ top: isEmpty ? '1.4rem' : '-2.2rem' }}
				htmlFor={name}
			>
				{label}
			</label>
			{numLines === 1 ? (
				<input {...commonInputProps} type={type} />
			) : (
				<textarea {...commonInputProps} rows={numLines} />
			)}
		</div>
	);
};

export default TextInput;
