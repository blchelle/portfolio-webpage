import React from 'react';
import {
	AOSAnimation,
	BackgroundGrayClasses,
	PaddingClass,
	RoundedClass,
	ShadowClass,
} from 'src/helpers/tailwind';

type CardProps = React.HTMLProps<HTMLDivElement> & {
	animation?: AOSAnimation;
	roundedClass?: RoundedClass;
	paddingClass?: PaddingClass;
	shadowClass?: ShadowClass;
	bgColorClass: BackgroundGrayClasses;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const {
		className,
		animation = '',
		roundedClass = 'rounded-lg',
		paddingClass = 'p-8',
		shadowClass = 'shadow-lg',
		bgColorClass,
		children,
	} = props;

	return (
		<div
			className={`${className} ${roundedClass} ${shadowClass} ${paddingClass} ${bgColorClass}`}
			ref={ref}
			data-aos={animation}
		>
			{children}
		</div>
	);
});

export default Card;
