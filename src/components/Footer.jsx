import React from 'react';
import '../styles/Footer.css';
import Logo from '../WEB/logo2.png';

function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Encuéntranos en:</h2>
						<a href="https://parqueexplora.org/espacios/planetario-de-medellin/planetario-de-medellin" target="_blank" rel="noreferrer" alt="Planetario" ><img className="logo" src={Logo} alt="Explora" /></a>
					</div>
					<div className='footer-link-items'>
						<h2>Contáctanos</h2>
						<p>Corporación Parque Explora</p>
						<p>+57(4)516 83 00</p>
						<p>comunicaciones@parqueexplora.org</p>
					</div>
					<div className='footer-link-items'>
						<h2>Ubicación</h2>
						<p>Carrera 52 # 73 - 75</p>
						<p>Medellín - Colombia</p>
						<p>+57(4)516 83 00</p>
					</div>
				</div>
			</div>

			<section className='social-media'>
				<div className='social-media-wrap'>
					<p className='website-rights'> &copy;{new Date().getFullYear() - 1} PARQUE EXPLORA | TODOS LOS DERECHOS RESERVADOS </p>
					<div className='social-icons'>
						<a
							className='social-icon-link instagram'
							href='https://www.instagram.com/parqueexplora/'
							target='_blank'
							aria-label='Instagram'
							rel='noreferrer'
						>
							<i className='fab fa-instagram' />
						</a>
						<a
							className='social-icon-link facebook'
							href='https://www.facebook.com/ParqueExplora/'
							target='_blank'
							aria-label='Facebook'
							rel='noreferrer'
						>
							<i className='fab fa-facebook-f' />
						</a>
						<a
							className='social-icon-link youtube'
							href='https://www.youtube.com/parqueexplora'
							target='_blank'
							aria-label='Youtube'
							rel='noreferrer'
						>
							<i className='fab fa-youtube' />
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;