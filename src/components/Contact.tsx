import React from 'react';

import { ReactComponent as CompassIcon } from '@assets/icons/compass.svg';
import { ReactComponent as MailIcon } from '@assets/icons/mail.svg';
import { ReactComponent as LinkedInIcon } from '@assets/logos/linkedin-logo.svg';
import { ReactComponent as GithubIcon } from '@assets/logos/github-logo.svg';
import { ReactComponent as SendIcon } from '@assets/icons/send.svg';

const Contact = React.forwardRef<HTMLElement>((_, ref) => {
	return (
		<section className='contact' ref={ref}>
			<h2 className='contact__title' data-aos='fade-up'>
				Get in touch
			</h2>
			<p className='contact__description' data-aos='fade-up'>
				I'm currently looking for 3-8 month internship opportunities starting based out of Edmonton,
				Canada or Remotely. I look forward to hearing from you!
			</p>
			<div className='contact__flex'>
				<div className='contact__info__container' data-aos='fade-right'>
					<div className='contact__info'>
						<div className='contact__info__icon__container'>
							<CompassIcon className='contact__info__icon' />
						</div>
						<div className='contact__info__content'>
							<h4 className='contact__info__content--title'>Location</h4>
							<p className='contact__info__content--subtitle'>Edmonton, Canada</p>
						</div>
					</div>
					<div className='contact__info'>
						<div className='contact__info__icon__container'>
							<MailIcon className='contact__info__icon' />
						</div>
						<div className='contact__info__content'>
							<h4 className='contact__info__content--title'>Email Address</h4>
							<p className='contact__info__content--subtitle'>brocklchelle@gmail.com</p>
						</div>
					</div>
					<div className='contact__info'>
						<div className='contact__info__icon__container'>
							<LinkedInIcon className='contact__info__icon' />
						</div>
						<div className='contact__info__content'>
							<h4 className='contact__info__content--title'>LinkedIn</h4>
							<a
								className='contact__info__content--subtitle contact__info__content--subtitle--link'
								href='https://linkedin.com/in/blchelle'
								aria-label='LinkedIn'
								rel='noopener'
								target='_blank'
							>
								Click here to be redirected!
							</a>
						</div>
					</div>
					<div className='contact__info'>
						<div className='contact__info__icon__container'>
							<GithubIcon className='contact__info__icon' />
						</div>
						<div className='contact__info__content'>
							<h4 className='contact__info__content--title'>GitHub</h4>
							<a
								className='contact__info__content--subtitle contact__info__content--subtitle--link'
								href='https://github.com/blchelle'
								aria-label='GitHub'
								rel='noopener'
								target='_blank'
							>
								Click here to be redirected!
							</a>
						</div>
					</div>
				</div>

				<form
					action='POST'
					name='contact'
					className='contact__form'
					data-aos='fade-left'
					data-netlify='true'
				>
					<div className='contact__container contact__container--name'>
						<label className='name__label' htmlFor='name'>
							Name
						</label>
						<input type='text' name='name' id='name' required />
					</div>
					<div className='contact__container contact__container--email'>
						<label htmlFor='email'>Email Address</label>
						<input type='email' name='email' id='email' required />
					</div>
					<div className='contact__container contact__container--message'>
						<label htmlFor='message'>Your Message</label>
						<textarea name='message' id='message' cols={30} rows={8} required></textarea>
					</div>
					<button type='submit'>
						Send <SendIcon className='contact__send__icon' />
					</button>
				</form>
			</div>
		</section>
	);
});

export default Contact;
