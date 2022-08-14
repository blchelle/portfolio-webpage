import { IExperience } from '@components/Experience';

import ualbertaBackground from '@assets/experience/ualberta.png';
import teslaBackground from '@assets/experience/tesla.png';
import willowglenBackground from '@assets/experience/willowglen.png';

import { ReactComponent as UAlbertaLogo } from '@assets/logos/ualberta.svg';
import { ReactComponent as TeslaLogo1 } from '@assets/logos/tesla1.svg';
import { ReactComponent as TeslaLogo2 } from '@assets/logos/tesla2.svg';
import { ReactComponent as WillowglenLogo1 } from '@assets/logos/willowglen1.svg';
import { ReactComponent as WillowglenLogo2 } from '@assets/logos/willowglen2.svg';
import React from 'react';
import Highlight from '@components/Highlight';
import { classnames } from 'tailwindcss-classnames';

const bulletPointClasses = classnames(
	'list-disc',
	'text-3xl',
	'leading-relaxed',
	'flex',
	'flex-col',
	'ml-8'
);

const bulletPoints: { [key: string]: React.ReactElement<HTMLUListElement> } = {
	tesla: (
		<ul className={bulletPointClasses}>
			<li>
				Developing GRPC microservices in <Highlight text='Go' /> and <Highlight text='Protobuf' />,
				REST APIs in <Highlight text='Rails' />, and UIs with <Highlight text='React' /> and{' '}
				<Highlight text='Javascript' /> in a production environment used by over 1,000,000 customers
				every day.
			</li>
			<li>
				Improving the performance of several high-volume endpoints by utilizing background job
				processing tools like <Highlight text='Sidekiq' /> and <Highlight text='Kafka' />, and
				caching with <Highlight text='Redis' />.
			</li>
			<li>
				Writing unit, integration, and end-to-end tests with <Highlight text='RSpec' />,{' '}
				<Highlight text='Ginkgo' />, and <Highlight text='Enzyme' /> with every commit I made.
			</li>
			<li>
				Automating testing, building <Highlight text='Docker' /> images, and deploying to{' '}
				<Highlight text='Kubernetes' /> using <Highlight text='Concourse' />.
			</li>
			<li>
				Adding logging and monitoring dashboards with <Highlight text='Splunk' /> and{' '}
				<Highlight text='Grafana' /> which allowed our team to measure performance and quickly
				identify issues for critical endpoints.
			</li>
			<li>
				Taking leadership in the development of key security features for an identity and access
				management platform used by over 10,000 employees.
			</li>
		</ul>
	),
	willowglen: (
		<ul className={bulletPointClasses}>
			<li>
				Developed a backend application with <Highlight text='C++' />, <Highlight text='MariaDB' />
				, and <Highlight text='Redis' /> that is used to save the lives of metro-rail track workers.
			</li>
			<li>
				Created a front-end application with <Highlight text='JQuery' />, <Highlight text='HTML' />,
				and <Highlight text='CSS' />, which compiles reports for safety and system accuracy.
			</li>
			<li>
				Designed and Implemented several front-end components with <Highlight text='ExtJS' /> for a
				client upgrade project; these new components were approved and applauded by the client.
			</li>
			<li>
				Led multiple company update meetings with 30+ attendees, resulting in company-wide clarity
				regarding each active project’s status.
			</li>
		</ul>
	),
	ualberta: (
		<ul className={bulletPointClasses}>
			<li>Achieved a GPA of 3.7</li>
			<li>
				Completed courses in Object Oriented Programming, Parallel Computing, Operating Systems,
				Test Driven Development, Database Management, and More.
			</li>
			<li>
				Developed an <Highlight text='Android' /> app with <Highlight text='Java' />, a Full Stack
				web app with <Highlight text='Rust' />, <Highlight text='WebAssembly' />, and{' '}
				<Highlight text='MongoDB' />, a Stack Overflow CLI with <Highlight text='Python' /> and{' '}
				<Highlight text='SQLite' />, a Unix Kernel with <Highlight text='C' />, and many more.
			</li>
			<li>
				Joined the Google Student Developer Group as a Technical Lead where I gave mentorship to
				early year students.
			</li>
		</ul>
	),
};

const EXPERIENCES: IExperience[] = [
	{
		name: 'Tesla',
		position: 'Full Stack Engineer',
		startEndYears: [2021, 'Present'],
		bulletPoints: bulletPoints.tesla,
		backgroundImage: teslaBackground,
		Logo: TeslaLogo1,
		SecondaryLogo: TeslaLogo2,
		logoBackgroundClass: classnames('bg-tesla'),
	},
	{
		name: 'Willowglen Systems',
		position: 'Software Engineer Intern',
		startEndYears: [2020, 2020],
		bulletPoints: bulletPoints.willowglen,
		backgroundImage: willowglenBackground,
		Logo: WillowglenLogo1,
		SecondaryLogo: WillowglenLogo2,
		logoBackgroundClass: classnames('bg-willowglen'),
	},
	{
		name: 'University of Alberta',
		position: 'Bachelor of Computer Engineering',
		bulletPoints: bulletPoints.ualberta,
		startEndYears: [2017, 2022],
		backgroundImage: ualbertaBackground,
		Logo: UAlbertaLogo,
		logoBackgroundClass: classnames('bg-ualberta'),
	},
];

export default EXPERIENCES;
