import React from 'react';
import Experience, { IExperience } from '@components/Experience';

import ualbertaBackground from '@assets/experience/ualberta.png';
import teslaBackground from '@assets/experience/tesla.png';
import willowglenBackground from '@assets/experience/willowglen.png';

import { ReactComponent as UAlbertaLogo } from '@assets/logos/ualberta.svg';
import { ReactComponent as TeslaLogo } from '@assets/logos/tesla.svg';
import { ReactComponent as WillowglenLogo1 } from '@assets/logos/willowglen1.svg';
import { ReactComponent as WillowglenLogo2 } from '@assets/logos/willowglen2.svg';
import text from 'src/text';

const EXPERIENCE_SECTIONS: IExperience[] = [
    {
        name: 'Tesla',
        position: 'Full Stack Engineer Intern',
        startEndYears: [2021, 2021],
        text: text.experience.tesla,
        backgroundImage: teslaBackground,
        Logo: TeslaLogo,
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

const Experiences = () => {
    const divider = <div className='w-3/4 h-px bg-gray-5 mb-16' />;

    return (
        <div className='flex flex-col items-center'>
            {EXPERIENCE_SECTIONS.map((experience, index) => (
                <>
                    <Experience experience={experience} />
                    {index < EXPERIENCE_SECTIONS.length - 1 && divider}
                </>
            ))}
        </div>
    );
};

export default Experiences;
