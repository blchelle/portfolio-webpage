import React from 'react';
import classes from '@tailwind/Button';

interface ButtonProps {
	text: string;
	onClick: () => void;
	color?: 'primary' | 'github';
	style?: React.CSSProperties;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'primary', style, Icon }) => {
	return (
		<button className={classes.container(color)} style={style} onClick={onClick}>
			{text}
			{Icon && <Icon className={classes.icon} />}
		</button>
	);
};

export default Button;
