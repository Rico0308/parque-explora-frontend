import React from 'react';
import '../styles/ProgramateSection.css';
import ImageSlider from './ImageSlider.jsx';
import Dot from '../WEB/CARACTERISTICAS-BULLET.png';

function ProgramateSection() {
	return (
		<div className='programate-container' id="Prográmate">
			<ImageSlider />
			<div className="programate-links">
				<div className="programate-link-wrapper">
					<div className="programate-link-items">
						<h2>
							Características
						</h2>
					</div>
				</div>
			</div>
			<div className='programate-links'>
				<div className='programate-link-wrapper'>
					<div className='programate-link-items'>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<p>Para estudiantes de 1 a 11</p>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<p>1 sesión de 90 minutos</p>
						</div>
					</div>
					<div className='programate-link-items'>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<p>Incluye viaje por el universo + activida experimental</p>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<p>Conexión privada por Zoom</p>
						</div>
					</div>
					<div className='programate-link-items'>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<p>Grupos de 20 personas acompañados por un mediador</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProgramateSection;