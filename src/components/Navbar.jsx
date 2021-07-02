import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../WEB/logo.png';
import '../styles/Navbar.css'

const Navbar = () => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<img className='nav-logo' src={Logo} alt="Parque Explora" />
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu item-right'}>
						<li className='nav-item'>
							<Link to='#Inicio' smooth className='nav-links' onClick={closeMobileMenu}>
								Inicio
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='#Experimenta'
								smooth
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Experimenta
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='#Conéctate'
								smooth
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Conéctate
							</Link>
						</li>

						<li>
							<Link
								to='#Prográmate'
								smooth
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Prográmate
							</Link>
						</li>
						<li>
							<Link
								to='#Conócenos'
								smooth
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Conócenos
							</Link>
						</li>
						<li>
							<Link
								to='#Suscríbete'
								smooth
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Suscríbete
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar
