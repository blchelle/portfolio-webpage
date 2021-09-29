import React, { useRef, MouseEvent } from 'react';

import { ReactComponent as ArrowIcon } from '@assets/icons/arrow_forward.svg';
import initialTop from '@assets/initial_top.png';
import initialBottom from '@assets/initial_bottom.png';

const Header = React.forwardRef<HTMLElement>((_, ref) => {
	const topInitialRef = useRef<HTMLImageElement>(null);

	let oldMouseLeft: number | null = null;
	let oldMouseTop: number | null = null;

	const scrollToStart = () => {
		if (ref == null || typeof ref === 'function') return;

		const { current } = ref;
		const headerHeight = current?.clientHeight;
		window.scroll({ top: headerHeight, behavior: 'smooth' });
	};

	const moveTopInitial = (event: MouseEvent) => {
		const { current } = topInitialRef;
		if (!current) return;
		if (ref === null || typeof ref === 'function') return;

		let leftCss = current.style.left;
		let bottomCss = current.style.bottom;
		if (leftCss === '' || bottomCss === '') {
			leftCss = `${(ref.current?.clientWidth ?? 0) * 0.15}px`;
			bottomCss = `${(ref.current?.clientHeight ?? 0) * 0.08}px`;
		}

		const left = +leftCss.substring(0, leftCss.length - 2);
		const bottom = +bottomCss.substring(0, bottomCss.length - 2);

		if (oldMouseLeft == null || oldMouseTop == null) {
			oldMouseLeft = event.clientX;
			oldMouseTop = event.clientY;
		}

		const horizontalTranslate = (event.clientX - oldMouseLeft) / 40;
		const verticalTranslate = (event.clientY - oldMouseTop) / 40;

		current.style.left = `${left - horizontalTranslate}px`;
		current.style.bottom = `${bottom + verticalTranslate}px`;

		oldMouseLeft = event.clientX;
		oldMouseTop = event.clientY;
	};

	return (
		<header
			ref={ref}
			className='relative h-screen flex-center flex-col bg-secondary'
			onMouseMove={moveTopInitial}
		>
			<img className='absolute bottom-initial' src={initialBottom} alt='B Bottom' />
			<img className='absolute top-initial' src={initialTop} ref={topInitialRef} alt='B Top' />
			<div className='flex flex-col w-5/6 sm:w-3/4 z-10 p-8 bg-gray-transparent rounded-xl'>
				<h1 className='text-8xl font-bold px-12 mb-8'>
					Hello, I'm
					<span className='text-primary ml-4'>Brock Chelle</span>
				</h1>
				<h2 className='text-6xl font-light px-12 mb-8'>I'm a Full Stack Software Engineer</h2>
				<button className='group btn-primary self-center' onClick={scrollToStart}>
					<span className='mr-4'>Learn More</span>
					<ArrowIcon className='h-16 w-16 text-gray-1 fill-current transition-transform transform group-hover:rotate-90' />
				</button>
			</div>
		</header>
	);
});

export default Header;
