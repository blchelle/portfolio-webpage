import { IExperience } from '@components/Experience';
import text from 'src/text';

import ualbertaBackground from '@assets/experience/ualberta.png';
import teslaBackground from '@assets/experience/tesla.png';
import willowglenBackground from '@assets/experience/willowglen.png';

import { ReactComponent as UAlbertaLogo } from '@assets/logos/ualberta.svg';
import { ReactComponent as TeslaLogo1 } from '@assets/logos/tesla1.svg';
import { ReactComponent as TeslaLogo2 } from '@assets/logos/tesla2.svg';
import { ReactComponent as WillowglenLogo1 } from '@assets/logos/willowglen1.svg';
import { ReactComponent as WillowglenLogo2 } from '@assets/logos/willowglen2.svg';

const EXPERIENCES: IExperience[] = [
	{
		name: 'Tesla',
		position: 'Full Stack Engineer Intern',
		startEndYears: [2021, 2021],
		text: text.experience.tesla,
		backgroundImage: teslaBackground,
		Logo: TeslaLogo1,
		SecondaryLogo: TeslaLogo2,
		logoBackgroundClass: 'bg-tesla',
	},
	{
		name: 'Willowglen Systems',
		position: 'Software Engineer Intern',
		startEndYears: [2020, 2020],
		text: text.experience.willowglen,
		backgroundImage: willowglenBackground,
		Logo: WillowglenLogo1,
		SecondaryLogo: WillowglenLogo2,
		logoBackgroundClass: 'bg-willowglen',
	},
	{
		name: 'University of Alberta',
		position: 'Bachelor of Computer Engineering',
		text: text.experience.ualberta,
		startEndYears: [2017, 2022],
		backgroundImage: ualbertaBackground,
		Logo: UAlbertaLogo,
		logoBackgroundClass: 'bg-ualberta',
	},
];

export default EXPERIENCES;
