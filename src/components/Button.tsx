import React from 'react';
import Tooltip from 'react-tooltip';
import classes from '@tailwind/Button';

interface ButtonProps {
	text: string;
	onClick: () => void;
	color?: 'primary' | 'github';
	style?: React.CSSProperties;
	Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
	disabled?: boolean
	tooltip?: string
}

const Button: React.FC<ButtonProps> = ({ text, onClick, color = 'primary', style, Icon, disabled = false, tooltip }) => {
	return (
		<>
			{ tooltip && <Tooltip effect='solid' />}
			<button
				className={classes.container(color, disabled)}
				style={style}
				onClick={() => !disabled && onClick()}
				data-tip={tooltip}
			>
				{text}
				{Icon && <Icon className={classes.icon} />}
			</button>
		</>
	);
};

export default Button;
