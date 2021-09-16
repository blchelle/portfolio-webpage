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
		<header ref={ref} className='header' onMouseMove={moveTopInitial}>
			<img className='header__initial header__initial--bottom' src={initialBottom} alt='B Bottom' />
			<img
				className='header__initial header__initial--top'
				src={initialTop}
				ref={topInitialRef}
				alt='B Top'
			/>
			<div className='header__content'>
				<h1 className='header__title'>
					Hello, I'm
					<span className='header__name'>Brock Chelle</span>
				</h1>
				<h2 className='header__title'>I'm a Full Stack Engineer & Software Engineering Student</h2>
				<button className='header__btn' onClick={scrollToStart}>
					<span className='header__btn__text'>Learn More</span>
					<ArrowIcon className='header__btn__icon' />
				</button>
			</div>
		</header>
	);
});

export default Header;
