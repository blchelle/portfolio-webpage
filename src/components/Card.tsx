import React, { useContext } from 'react';
import {
	AOSAnimation,
	BackgroundGrayClasses,
	PaddingClass,
	RoundedClass,
	ShadowClass,
} from 'src/helpers/tailwind';
import { BackgroundColorContext } from './Section';

type CardProps = React.HTMLProps<HTMLDivElement> & {
	animation?: AOSAnimation;
	roundedClass?: RoundedClass;
	paddingClass?: PaddingClass;
	shadowClass?: ShadowClass;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const {
		className,
		animation = '',
		roundedClass = 'rounded-lg',
		paddingClass = 'p-8',
		shadowClass = 'shadow-lg',
		children,
	} = props;

	const sectionBgColorClass = useContext(BackgroundColorContext);
	const cardBgColorClass =
		sectionBgColorClass === 'bg-gray-1 dark:bg-gray-5'
			? 'bg-gray-2 dark:bg-gray-6'
			: 'bg-gray-1 dark:bg-gray-5';

	return (
		<BackgroundColorContext.Provider value={cardBgColorClass}>
			<div
				className={`${className} ${roundedClass} ${shadowClass} ${paddingClass} ${cardBgColorClass}`}
				ref={ref}
				data-aos={animation}
			>
				{children}
			</div>
		</BackgroundColorContext.Provider>
	);
});

export default Card;
