import React from 'react';

interface CategorySelectorProps {
	categories: string[];
	category: number;
	onChange: (category: number) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, category, onChange }) => {
	const categoryWidth = 100 / categories.length;

	return (
		<ul className='categories'>
			<div
				className='categories__slider'
				style={{
					left: `${category * categoryWidth}%`,
					width: `${categoryWidth}%`,
				}}
			/>
			{categories.map((title, i) => (
				<li className='category' key={title}>
					<button onClick={() => onChange(i)}>{title}</button>
				</li>
			))}
		</ul>
	);
};

export default CategorySelector;
