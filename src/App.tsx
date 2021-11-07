import React, { useEffect, useRef, useState } from 'react';
import Section from '@components/Section';
import AboutMe from '@components/sections/AboutMe';
import Experiences from '@components/sections/Experiences';
import Contact from '@components/sections/Contact';
import Header from '@components/sections/Header';
import Projects from '@components/sections/Projects';
import Skills from '@components/sections/Skills';
import Footer from '@components/sections/Footer';
import Navigation from '@components/Navigation';
import { INavigationItem } from '@components/NavigationItem';

import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as BriefcaseIcon } from '@assets/icons/briefcase.svg';
import { ReactComponent as PersonIcon } from '@assets/icons/person.svg';
import { ReactComponent as HammerIcon } from '@assets/icons/hammer.svg';
import { ReactComponent as CodeIcon } from '@assets/icons/code.svg';
import { ReactComponent as MailOutlineIcon } from '@assets/icons/mail-outline.svg';
import text from './text';

const App: React.FC = () => {
	const [section, setSection] = useState(0);

	const headerRef = useRef<HTMLElement>(null);
	const aboutMeRef = useRef<HTMLElement>(null);
	const experienceRef = useRef<HTMLElement>(null);
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
			title: 'Experience',
			Icon: BriefcaseIcon,
			linkToRef: experienceRef,
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

	const handleScroll = (): any => {
		const { scrollY, innerHeight } = window;
		const { body: { offsetHeight } } = document;

		const headerTop = headerRef.current?.offsetTop ?? 0;
		const aboutMeTop = aboutMeRef.current?.offsetTop ?? 0;
		const experienceTop = experienceRef.current?.offsetTop ?? 0;
		const projectsTop = projectsRef.current?.offsetTop ?? 0;
		const skillsTop = skillsRef.current?.offsetTop ?? 0;
		const contactTop = contactRef.current?.offsetTop ?? 0;

		if (scrollY >= contactTop || scrollY + innerHeight >= offsetHeight - 10) {
			setSection(5);
		} else if (scrollY >= skillsTop) {
			setSection(4);
		} else if (scrollY >= projectsTop) {
			setSection(3);
		} else if (scrollY >= experienceTop) {
			setSection(2);
		} else if (scrollY >= aboutMeTop) {
			setSection(1);
		} else if (scrollY >= headerTop) {
			setSection(0);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();
	}, [section]);

	return (
		<>
			<Navigation section={section} sections={NAVIGATION} />
			<main className='overflow-x-hidden'>
				<Header ref={headerRef} />
				<Section title='About Me' ref={aboutMeRef} backgroundColor="bg-gray-5">
					<AboutMe />
				</Section>
				<Section title='Experience' ref={experienceRef}>
					<Experiences />
				</Section>
				<Section title='Portfolio Projects' ref={projectsRef} backgroundColor='bg-gray-5'>
					<Projects />
				</Section>
				<Section title='My Skills' description={text.skills.description} ref={skillsRef}>
					<Skills />
				</Section>
				<Section
					title='Get In Touch'
					description={text.contact.description}
					ref={contactRef}
					backgroundColor='bg-gray-5'
				>
					<Contact />
				</Section>
				<Footer sections={NAVIGATION} />
			</main>
		</>
	);
};

export default App;
