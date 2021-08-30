import React from 'react';

import pictureOfMe from '@assets/me.jpg';

const AboutMe = React.forwardRef<HTMLElement>((_, ref) => {
	return (
		<section className='about' ref={ref}>
			<h2 className='about__title' data-aos='fade-up'>
				About me
			</h2>
			<div className='about__content'>
				<div className='about__image__container' data-aos='fade-right'>
					<div className='about__image__frame'>
						<img className='about__image' src={pictureOfMe} alt='Picture of me' />
					</div>
				</div>
				<p className='about__text' data-aos='fade-left'>
					I am a 4th year Software Engineering Student at the University of Alberta. I have
					experience developing full-stack wep applications with React & Node as well as mobile apps
					for iOS using Swift (iOS) and Java (Android).
					<br />
					<br />
					Most recently I've been developing full-stack web applications using the popular MERN
					Stack. I used these skills to build a team collaboration software similar to Trello or
					Jira.
					<br />
					<br />
					Professionally, I have experience working as a software developer at Willowglen Systems, a
					leader in the industrial automation industry. Here, I had the opportunity to work on life
					saving products and gained valuable experience that will help me immensely throughout the
					length of my career.
				</p>
				<a className='resume-btn' target='_blank' href='./resume.pdf' data-aos='zoom-in'>
					View My Resume
				</a>
			</div>
		</section>
	);
});

export default AboutMe;
