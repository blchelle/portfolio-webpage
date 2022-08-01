import crwnMockup from '@assets/mockups/crwn.png';
import collaboGreatMockup from '@assets/mockups/collabogreat.png';
import keepItMockup from '@assets/mockups/keepit.png';

import { ReactComponent as collaboGreatLogo } from '@assets/logos/collabogreat.svg';
import { ReactComponent as crwnLogo } from '@assets/logos/crwn.svg';
import { ReactComponent as keepItLogo } from '@assets/logos/keepit.svg';

import { ReactComponent as appleLogo } from '@assets/logos/apple.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase-2.svg';
import { ReactComponent as jsLogo } from '@assets/logos/javascript2.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux.svg';
import { ReactComponent as sassLogo } from '@assets/logos/sass.svg';
import { ReactComponent as swiftLogo } from '@assets/logos/swift.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript2.svg';
import { IProject } from '@components/Project';

const PROJECTS: IProject[] = [
	{
		name: 'CollaboGreat',
		description: `CollaboGreat is a full-stack web application that encourages strong
		team collaboration. CollaboGreat includes all the features typical of
		a team collaboration software such as Trello or Jira.
		It features user authentication using the OAuth protocol,
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
									various clothing articles, add them to a cart, and finalize
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
									GeoFence. Whenever an item is lost, KeepIt can remind users
									of where they last had their item. With KeepIt, users can
									authenticate with an email & password or use the app anonymously.`,
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

export default PROJECTS;
