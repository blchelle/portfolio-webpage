import React from 'react';

interface CategorySelectorProps {
	categories: string[];
	category: number;
	onChange: (category: number) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, category, onChange }) => {
	return (
		<ul className='relative flex self-start py-4 sm:w-max w-full'>
			<div
				className={`absolute h-2 w-1/4 bottom-0 bg-primary transition-all duration-300`}
				style={{ left: `${category * 25}%` }}
			/>
			{categories.map((title, i) => (
				<li className='w-1/4 flex-center sm:w-48' key={title}>
					<button className='w-11/12 text-2xl font-bold' onClick={() => onChange(i)}>{title}</button>
				</li>
			))}
		</ul>
	);
};

export default CategorySelector;
