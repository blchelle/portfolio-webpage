import React, { useRef, MouseEvent, useState } from 'react';

import Button from '@components/Button';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrow_down.svg';

const Header = React.forwardRef<HTMLElement>((_, ref) => {
	const circleOneRef = useRef<HTMLDivElement>(null);
	const circleTwoRef = useRef<HTMLDivElement>(null);

	const worstGreen = [143, 224, 180];
	const bestGreen = [44, 160, 96];
	const maxDistance = 500;

	const [solved, setSolved] = useState(false);

	const scrollToStart = () => {
		if (ref == null || typeof ref === 'function') return;

		const { current } = ref;
		const headerHeight = current?.clientHeight;
		window.scroll({ top: headerHeight, behavior: 'smooth' });
	};

	const moveTopInitial = (event: MouseEvent) => {
		if (solved) return;

		const { current: circleOne } = circleOneRef;
		const { current: circleTwo } = circleTwoRef;

		if (!circleOne || !circleTwo) return;
		if (ref === null || typeof ref === 'function' || !ref.current) return;

		const centerX = ref.current.clientWidth / 2;
		const centerY = ref.current.clientHeight / 2;

		const distToCenterX = event.clientX - centerX;
		const distToCenterY = event.clientY - centerY;

		const distanceFromCenter = Math.sqrt(Math.pow(distToCenterX, 2) + Math.pow(distToCenterY, 2));

		// Snaps the circles together if close enough
		if (distanceFromCenter < 5) {
			circleOne.style.left = `${centerX - circleOne.offsetWidth / 2}px`;
			circleOne.style.bottom = `${centerY}px`;
			circleTwo.style.right = `${centerX - circleOne.offsetWidth / 2}px`;
			circleTwo.style.bottom = `${centerY}px`;

			setSolved(true);
		} else {
			circleOne.style.left = `${event.clientX - circleOne.offsetWidth / 2}px`;
			circleOne.style.bottom = `${event.clientY}px`;
			circleTwo.style.right = `${event.clientX - circleTwo.offsetWidth / 2}px`;
			circleTwo.style.bottom = `${ref.current.clientHeight - event.clientY}px`;
		}

		const red = Math.min(
			bestGreen[0] + (worstGreen[0] - bestGreen[0]) * (distanceFromCenter / maxDistance),
			worstGreen[0]
		);
		const green = Math.min(
			bestGreen[1] + (worstGreen[1] - bestGreen[1]) * (distanceFromCenter / maxDistance),
			worstGreen[1]
		);
		const blue = Math.min(
			bestGreen[2] - (bestGreen[2] - worstGreen[2]) * (distanceFromCenter / maxDistance),
			worstGreen[2]
		);
		ref.current.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
	};

	const circleColor = solved ? 'bg-header-close' : 'bg-gray-1';

	return (
		<header
			ref={ref}
			className='relative h-screen flex-center flex-col bg-header-far overflow-hidden'
			onMouseMove={moveTopInitial}
		>
			<div
				className={`${circleColor} absolute header-circle left-1/2 bottom-1/4 transform translate-y-1/2 opacity-70`}
				ref={circleOneRef}
			/>
			<div
				className={`${circleColor} absolute header-circle right-1/2 bottom-3/4 transform translate-y-1/2 opacity-70`}
				ref={circleTwoRef}
			/>
			<div className='flex flex-col items-center w-5/6 sm:w-3/4 z-10 p-8 bg-gray-transparent1 dark:bg-gray-transparent7 rounded-xl'>
				<h1 className='text-8xl font-bold px-12 mb-8'>
					Hey there, I'm
					<span className='text-primary ml-4'>Brock Chelle</span>
				</h1>
				<h2 className='text-6xl font-light px-12 mb-8'>
					Senior Full Stack Software Engineer Extraordinaire
				</h2>
				<Button text='Learn More' onClick={scrollToStart} Icon={ArrowIcon} />
			</div>
		</header>
	);
});

export default Header;
