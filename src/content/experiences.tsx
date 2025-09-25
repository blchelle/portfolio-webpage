import { IExperience } from '@components/Experience';

import digitalOceanBackground from '@assets/experience/digitalocean.png';
import limeBackground from '@assets/experience/lime.png';
import teslaBackground from '@assets/experience/tesla.png';
import ualbertaBackground from '@assets/experience/ualberta.png';

import { ReactComponent as UAlbertaLogo } from '@assets/logos/ualberta.svg';
import { ReactComponent as LimeLogo } from '@assets/logos/lime.svg';
import { ReactComponent as DigitalOceanLogo1 } from '@assets/logos/digitalocean1.svg';
import { ReactComponent as DigitalOceanLogo2 } from '@assets/logos/digitalocean2.svg';
import { ReactComponent as TeslaLogo1 } from '@assets/logos/tesla1.svg';
import { ReactComponent as TeslaLogo2 } from '@assets/logos/tesla2.svg';
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
	digitalocean: (
		<ul className={bulletPointClasses}>
			<li>
				Developed gRPC endpoints in <Highlight text='Go' /> and <Highlight text='Protobuf' /> to
				collect metrics on wasted IP Addresses, and identify top consumers of IP Addresses.
			</li>
			<li>
				Safely deployed and backfilled a <Highlight text='MySQL' /> integration for a critical
				service and deprecated the legacy datastore once the transition was complete.
			</li>
			<li>
				Improved <Highlight text='Prometheus' /> alerting coverage for a critical service to
				eliminate false-positive alerts and reduce mean time to detection below 10 minutes.
			</li>
			<li>
				Created <Highlight text='Grafana' /> dashboards to help the company track IP Address usage
				across all 15 of our data centers.
			</li>
		</ul>
	),
	tesla: (
		<ul className={bulletPointClasses}>
			<li>
				Developed gRPC microservices in <Highlight text='Go' /> and <Highlight text='Protobuf' />,
				REST APIs in <Highlight text='Rails' />, and UIs with <Highlight text='React' /> and{' '}
				<Highlight text='Javascript' /> in a production environment used by over 1,000,000 customers
				every day.
			</li>
			<li>
				Improved the performance of several high-volume endpoints by utilizing background job
				processing tools like <Highlight text='Sidekiq' /> and <Highlight text='Kafka' />, and
				caching with <Highlight text='Redis' />.
			</li>
			<li>
				Automated testing, building <Highlight text='Docker' /> images, and deploying to{' '}
				<Highlight text='Kubernetes' /> using <Highlight text='Concourse' />.
			</li>
			<li>
				Added logging and monitoring dashboards with <Highlight text='Splunk' /> and{' '}
				<Highlight text='Grafana' /> which allowed our team to measure performance and quickly
				identify issues for critical endpoints.
			</li>
			<li>
				Took leadership in the development of key security features for an identity and access
				management platform used by over 10,000 employees.
			</li>
		</ul>
	),
	ualberta: (
		<ul className={bulletPointClasses}>
			<li>
				Completed courses in Object Oriented Programming, Parallel Computing, Operating Systems,
				Test Driven Development, Database Management, and Software Architecture.
			</li>
			<li>
				Developed an <Highlight text='Android' /> app with <Highlight text='Java' />, a Full Stack
				web app with <Highlight text='Rust' />, <Highlight text='WebAssembly' />, and{' '}
				<Highlight text='MongoDB' />, a Stack Overflow CLI with <Highlight text='Python' /> and{' '}
				<Highlight text='SQLite' />, a Unix Kernel with <Highlight text='C' />, and many more.
			</li>
			<li>
				Joined the Google Student Developer Group as a Technical Lead where I mentored first-year
				students.
			</li>
		</ul>
	),
	lime: (
		<ul className={bulletPointClasses}>
			<li>
				Reduced timeout errors by 95% in our <Highlight text='Ruby on Rails' /> service by
				optimizing high-latency queries and implementing new indexes on high load tables in our{' '}
				<Highlight text='MySQL' /> Database.
			</li>
			<li>
				Designed an approvals framework in <Highlight text='Ruby on Rails' /> and{' '}
				<Highlight text='React' /> that enables engineers to wrap high-risk actions with an
				approvals workflow in less than 2 days.
			</li>
			<li>
				Developed an Attribute Based Access Control (ABAC) system to enable more granular and
				restrictive access for our 3,000+ operators around the world.
			</li>
			<li>
				Architected a system to automate the process of launching, and pausing regions that Lime
				operates in to significantly reduce costly incidents caused by error-prone manual processes.
			</li>
			<li>
				Developed and maintained dashboards, automated monitors, and runbooks in{' '}
				<Highlight text='Datadog' /> for our teams on-call rotation to measure system health and
				SLO's.
			</li>
		</ul>
	),
};

const EXPERIENCES: IExperience[] = [
	{
		name: 'Lime',
		position: 'Senior Full Stack Software Engineer',
		startEndYears: [2023, 'Present'],
		bulletPoints: bulletPoints.lime,
		backgroundImage: limeBackground,
		Logo: LimeLogo,
		logoBackgroundClass: classnames('bg-lime'),
	},
	{
		name: 'DigitalOcean',
		position: 'Software Engineer II',
		startEndYears: [2022, 2023],
		bulletPoints: bulletPoints.digitalocean,
		backgroundImage: digitalOceanBackground,
		Logo: DigitalOceanLogo1,
		SecondaryLogo: DigitalOceanLogo2,
		logoBackgroundClass: classnames('bg-digitalocean'),
	},
	{
		name: 'Tesla',
		position: 'Full Stack Software Engineer',
		startEndYears: [2021, 2022],
		bulletPoints: bulletPoints.tesla,
		backgroundImage: teslaBackground,
		Logo: TeslaLogo1,
		SecondaryLogo: TeslaLogo2,
		logoBackgroundClass: classnames('bg-tesla'),
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
