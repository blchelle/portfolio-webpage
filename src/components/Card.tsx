import React from 'react';
import {
	AOSAnimation,
	BackgroundGrayColor,
	PaddingSizes,
	RoundedSizes,
	ShadowSize,
} from 'src/helpers/tailwind';

type CardProps = React.HTMLProps<HTMLDivElement> & {
	animation?: AOSAnimation;
	roundedSize?: RoundedSizes;
	paddingSize?: PaddingSizes;
	shadowSize?: ShadowSize;
	bgColor: BackgroundGrayColor;
};

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const {
		className,
		animation = '',
		roundedSize = 'lg',
		paddingSize = 8,
		shadowSize = 'lg',
		bgColor,
		children,
	} = props;

	return (
		<div
			className={`rounded-${roundedSize} bg-gray-${bgColor} dark:bg-gray-${
				bgColor + 4
			} ${className} p-${paddingSize} shadow-${shadowSize}`}
			ref={ref}
			data-aos={animation}
		>
			{children}
		</div>
	);
});

export default Card;
