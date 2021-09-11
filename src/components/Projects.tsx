import React from 'react';
import Project, { IProject } from '@components/Project';

import crwnMockup from '@assets/mockups/crwn-mockup.png';
import collaboGreatMockup from '@assets/mockups/collabogreat-mockup.png';
import keepItMockup from '@assets/mockups/keepit-mockup.png';
import { ReactComponent as collaboGreatLogo } from '@assets/logos/collabogreat-logo.svg';
import { ReactComponent as crwnLogo } from '@assets/logos/crwn-logo.svg';
import { ReactComponent as keepItLogo } from '@assets/logos/keepit-logo.svg';

import { ReactComponent as appleLogo } from '@assets/logos/apple-logo.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express-logo.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase-logo-2.svg';
import { ReactComponent as jsLogo } from '@assets/logos/javascript-2.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb-logo.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node-logo.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react-logo.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux-logo.svg';
import { ReactComponent as sassLogo } from '@assets/logos/sass-logo.svg';
import { ReactComponent as swiftLogo } from '@assets/logos/swift-logo.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript-2.svg';

const PROJECTS: IProject[] = [
	{
		name: 'CollaboGreat',
		description: `CollaboGreat is a full-stack web application that encourages strong
		team collaboration. I built to CollaboGreat to have all the features
		you would expect from a team collaboration software such as Trello
		or Jira. It features user authentication using the OAuth protocol,
		interactive Kanban Boards with drag and drop functionality, project
		statistics, and many more exciting features.`,
		mockup: collaboGreatMockup,
		Logo: collaboGreatLogo,
		tools: [
			{ name: 'Typescript', Logo: tsLogo },
			{ name: 'React', Logo: reactLogo },
			{ name: 'Redux', Logo: reduxLogo },
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
			{ name: 'MongoDB', Logo: mongoDbLogo },
		],
		liveUrl: 'https://collabogreat.brockchelle.com',
		githubUrl: 'https://github.com/blchelle/collabogreat',
	},
	{
		name: 'CRWN Ecommmerce',
		description: `CRWN is an E-Commerce store for a fictional clothing company.
									It provides all the core functionality that a user would
									expect from an E-Commerce store. Here, users can choose from
									various clothing articles, add them to a cart and finalize
									their order by checking out with a credit/debit card, which
									is done through Stripe. Users can also authenticate with
									their Google account or email address if they wish to keep
									their cart for later.`,
		mockup: crwnMockup,
		Logo: crwnLogo,
		tools: [
			{ name: 'Javascript', Logo: jsLogo },
			{ name: 'React', Logo: reactLogo },
			{ name: 'Redux', Logo: reduxLogo },
			{ name: 'Sass', Logo: sassLogo },
			{ name: 'Firebase', Logo: firebaseLogo },
		],
		liveUrl: 'https://crwn.brockchelle.com',
		githubUrl: 'https://github.com/blchelle/crwn-ecommerce',
	},
	{
		name: 'KeepIt - Item Tracker',
		description: `KeepIt is an iOS App built to help users keep track of all
									their personal belongings without GPS hardware. It does this
									through customizable notifications that can be time based or
									triggered upon crossing the border of a personalized
									GeoFence. Whenever you lose an item, you can use KeepIt to
									remember where you had it last. With KeepIt, users can
									authenticate with an email & password or even anonymously.`,
		mockup: keepItMockup,
		Logo: keepItLogo,
		tools: [
			{ name: 'Swift', Logo: swiftLogo },
			{ name: 'iOS', Logo: appleLogo },
			{ name: 'Firebase', Logo: firebaseLogo },
		],
		liveUrl: 'https://apps.apple.com/ca/app/keepit-item-tracker/id1474698806',
		githubUrl: 'https://github.com/blchelle/keepit',
	},
];

const Projects: React.FC = () => {
	const divider = <div className='w-3/4 h-px bg-gray-6 mb-16' />

	return (
		<div className='flex flex-col items-center'>
			{PROJECTS.map((project, index) => (
				<>
					<Project project={project} key={index} />
					{ index < PROJECTS.length - 1 && divider }
				</>
			))}
		</div>
	);
};

export default Projects;
