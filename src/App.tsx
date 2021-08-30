import React, { EventHandler, useEffect, useLayoutEffect, useRef, useState } from 'react';
import AboutMe from '@components/AboutMe';
import Contact from '@components/Contact';
import Header from '@components/Header';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import Navigation from '@components/Navigation';
import { INavigationItem } from '@components/NavigationItem';

import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as PersonIcon } from '@assets/icons/person.svg';
import { ReactComponent as HammerIcon } from '@assets/icons/hammer.svg';
import { ReactComponent as CodeIcon } from '@assets/icons/code.svg';
import { ReactComponent as MailOutlineIcon } from '@assets/icons/mail-outline.svg';

const App: React.FC = () => {
	const [section, setSection] = useState(0);

	const headerRef = useRef<HTMLElement>(null);
	const aboutMeRef = useRef<HTMLElement>(null);
	const projectsRef = useRef<HTMLElement>(null);
	const skillsRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	const NAVIGATION: INavigationItem[] = [
		{
			title: 'Home',
			Icon: HomeIcon,
			linkToRef: headerRef,
		},
		{
			title: 'About',
			Icon: PersonIcon,
			linkToRef: aboutMeRef,
		},
		{
			title: 'Projects',
			Icon: HammerIcon,
			linkToRef: projectsRef,
		},
		{
			title: 'Skills',
			Icon: CodeIcon,
			linkToRef: skillsRef,
		},
		{
			title: 'Contact',
			Icon: MailOutlineIcon,
			linkToRef: contactRef,
		},
	];

	const handleScroll = (_: Event): any => {
		const { scrollY } = window;
		const headerTop = headerRef.current?.offsetTop ?? 0;
		const aboutMeTop = aboutMeRef.current?.offsetTop ?? 0;
		const projectsTop = projectsRef.current?.offsetTop ?? 0;
		const skillsTop = skillsRef.current?.offsetTop ?? 0;
		const contactTop = contactRef.current?.offsetTop ?? 0;

		if (scrollY >= contactTop) {
			setSection(4);
		} else if (scrollY >= skillsTop) {
			setSection(3);
		} else if (scrollY >= projectsTop) {
			setSection(2);
		} else if (scrollY >= aboutMeTop) {
			setSection(1);
		} else if (scrollY >= headerTop) {
			setSection(0);
		}
	};

	const handleNavChange = (index: number) => {
		window.removeEventListener('scroll', handleScroll);

		const scrollTarget = NAVIGATION[index].linkToRef.current?.offsetTop;
		if (scrollTarget === undefined) return;

		window.scrollTo({ top: scrollTarget + 5, behavior: 'smooth' });
		setSection(index);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, [section]);

	return (
		<>
			<Navigation section={section} sections={NAVIGATION} onSectionChange={handleNavChange} />
			<main className='container'>
				<Header ref={headerRef} />
				<AboutMe ref={aboutMeRef} />
				<Projects ref={projectsRef} />
				<Skills ref={skillsRef} />
				<Contact ref={contactRef} />
			</main>
		</>
	);
};

export default App;
