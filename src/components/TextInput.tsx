import React, { ChangeEvent, useState } from 'react';

interface TextInputProps {
	label: string;
	name: string;
	numLines?: number;
	required: boolean;
	type?: string;
}

interface InputState {
	error: boolean;
	isEmpty: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
	label,
	name,
	required,
	numLines = 1,
	type = 'text',
}) => {
	const [input, setInput] = useState<InputState>({ error: false, isEmpty: true });
	const { error, isEmpty } = input;

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const {
			validity: { valid },
			value,
		} = event.target;
		setInput({ error: !valid, isEmpty: value.length === 0 });
	};

	return (
		<div className='contact__container'>
			<label
				className={`name__label ${error ? 'error' : ''} ${isEmpty ? '' : 'raised'}`}
				htmlFor={name}
			>
				{label}
			</label>
			{numLines === 1 ? (
				<input type={type} name={name} id={name} required={required} onChange={handleInputChange} />
			) : (
				<textarea
					name={name}
					id={name}
					required={required}
					onChange={handleInputChange}
					rows={numLines}
				/>
			)}
		</div>
	);
};

export default TextInput;
