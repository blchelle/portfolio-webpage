import React from 'react';
import classes from '@tailwind/CategorySelector';

interface CategorySelectorProps {
	categories: string[];
	category: number;
	onChange: (category: number) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ categories, category, onChange }) => {
	return (
		<ul className={classes.list}>
			<div className={classes.slider} style={{ left: `${category * 25}%` }} />
			{categories.map((title, i) => (
				<li className={classes.item} key={title}>
					<button className={classes.itemButton} onClick={() => onChange(i)}>
						{title}
					</button>
				</li>
			))}
		</ul>
	);
};

export default CategorySelector;
