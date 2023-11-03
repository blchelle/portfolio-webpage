import collaboGreatMockup from '@assets/mockups/collabogreat.png';
import keepItMockup from '@assets/mockups/keepit.png';
import typeTrialMockup from '@assets/mockups/typetrial.png';

import { ReactComponent as collaboGreatLogo } from '@assets/logos/collabogreat.svg';
import { ReactComponent as keepItLogo } from '@assets/logos/keepit.svg';
import { ReactComponent as typeTrialLogo } from '@assets/logos/typetrial.svg';

import { ReactComponent as appleLogo } from '@assets/logos/apple.svg';
import { ReactComponent as expressLogo } from '@assets/logos/express.svg';
import { ReactComponent as firebaseLogo } from '@assets/logos/firebase-2.svg';
import { ReactComponent as mongoDbLogo } from '@assets/logos/mongodb.svg';
import { ReactComponent as mySqlLogo } from '@assets/logos/mysql.svg';
import { ReactComponent as nodeLogo } from '@assets/logos/node.svg';
import { ReactComponent as reactLogo } from '@assets/logos/react.svg';
import { ReactComponent as reduxLogo } from '@assets/logos/redux.svg';
import { ReactComponent as swiftLogo } from '@assets/logos/swift.svg';
import { ReactComponent as tsLogo } from '@assets/logos/typescript2.svg';
import { IProject } from '@components/Project';

const PROJECTS: IProject[] = [
	{
		name: 'CollaboGreat',
		description: `CollaboGreat is a Full Stack web application that encourages strong
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
		// liveUrl: 'https://collabogreat.brockchelle.com',
		githubUrl: 'https://github.com/blchelle/collabogreat',
		liveUrlTooltip: "The live site is currently unavailable because it is too expensive to host."
	},
	{
		name: 'TypeTrial',
		description: `
			TypeTrial is a multiplayer typing game that pits friends and strangers against
			each other in a typing race. TypeTrial is a more playful typing experience than
			other typing games because of our MarioKartesque powerups. Powerups allow players
			to slow down their friends while they race to finish line. TypeTrial will also
			track each users typing data to see how they have improved over time.
		`,
		mockup: typeTrialMockup,
		Logo: typeTrialLogo,
		tools: [
			{ name: 'Typescript', Logo: tsLogo },
			{ name: 'React', Logo: reactLogo },
			{ name: 'Node', Logo: nodeLogo },
			{ name: 'Express', Logo: expressLogo },
			{ name: 'MySQL', Logo: mySqlLogo },
		],
		// liveUrl: 'https://typetrial.brockchelle.com',
		githubUrl: 'https://github.com/blchelle/typetrial',
		liveUrlTooltip: "The live site is currently unavailable because it is too expensive to host."
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
		// liveUrl: 'https://apps.apple.com/ca/app/keepit-item-tracker/id1474698806',
		githubUrl: 'https://github.com/blchelle/keepit',
		liveUrlTooltip: "The app is currently unavailable because it is expensive to join the Apple Developer Program.",
	},
];

export default PROJECTS;
