import React, { ChangeEvent, useState } from 'react';

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

	const labelColor = error && visited ? 'text-error' : isEmpty ? 'text-gray-4' : 'text-primary';
	const labelFontSize = isEmpty ? 'text-3xl' : 'text-2xl';
	const inputPaddingTop = numLines === 1 ? 'pt-0' : 'pt-4';
	const inputBorderColor = error && visited ? 'border-error' : 'border-gray-3';
	const inputHeight = numLines === 1 ? 'h-20' : 'h-auto';

	const commonInputProps = {
		className: `w-full ${inputHeight} ${inputPaddingTop} px-4 bg-gray-1 ${inputBorderColor} border-2 border-solid rounded-md text-gray-4 text-3xl`,
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
