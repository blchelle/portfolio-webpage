import React from 'react';
import { SectionChildProps } from '@components/Section';
import AboutMe from '@components/sections/AboutMe';
import Experiences from '@components/sections/Experiences';
import Projects from '@components/sections/Projects';
import Contact from '@components/sections/Contact';

import { ReactComponent as HomeIcon } from '@assets/icons/home.svg';
import { ReactComponent as PersonIcon } from '@assets/icons/person.svg';
import { ReactComponent as BriefcaseIcon } from '@assets/icons/briefcase.svg';
import { ReactComponent as HammerIcon } from '@assets/icons/hammer.svg';
import { ReactComponent as MailOutlineIcon } from '@assets/icons/mail-outline.svg';

export interface ISection {
	title: string;
	Content?: React.FC<SectionChildProps>;
	Icon: React.FC<React.SVGProps<SVGSVGElement> & { title?: string | undefined }>;
	ref: React.RefObject<HTMLElement>;
}

const CONTENT_SECTIONS: ISection[] = [
	{
		title: 'Home',
		Icon: HomeIcon,
		ref: React.createRef(),
	},
	{
		title: 'About',
		Content: AboutMe,
		Icon: PersonIcon,
		ref: React.createRef(),
	},
	{
		title: 'Experience',
		Content: Experiences,
		Icon: BriefcaseIcon,
		ref: React.createRef(),
	},
	{
		title: 'Projects',
		Content: Projects,
		Icon: HammerIcon,
		ref: React.createRef(),
	},
	{
		title: 'Contact',
		Content: Contact,
		Icon: MailOutlineIcon,
		ref: React.createRef(),
	},
];

export default CONTENT_SECTIONS;
