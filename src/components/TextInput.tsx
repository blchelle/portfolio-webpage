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

	const labelColor = (error && visited) ? 'text-error' : isEmpty ? 'text-gray-4' : 'text-primary';
	const labelFontSize = isEmpty ? 'text-3xl' : 'text-2xl';
	const labelTop = numLines === 1 ? '1.4rem' : '0.3rem';
	const inputBorderColor = (error && visited) ? 'border-error' : 'border-gray-5';
	const inputHeight = numLines === 1 ? 'h-20' : 'h-auto'

	const commonProps = {
		className: `w-full ${inputHeight} px-4 bg-gray-1 ${inputBorderColor} border-2 border-solid rounded-md text-gray-4 text-3xl`,
		type: type,
		name: name,
		id: name,
		required: required,
		onChange: handleChange,
		onBlur: handleBlur,
	};

	return (
		<div className='relative w-full mb-12'>
			<label
				className={`absolute left-4 transition-all ${labelColor} ${labelFontSize}`}
				style={{ top: isEmpty ? labelTop : '-2.2rem' }}
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
