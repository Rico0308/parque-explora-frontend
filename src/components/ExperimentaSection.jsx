import React from 'react';
import '../App.css';
import '../styles/ExperimentaSection.css';
import WS from '../WEB/INTRO-WHATSAPP.png';

export default function ExperimentaSection() {

	return (
		<>
			<div className="experimenta-container" id="Experimenta">
				<div className="text-experimenta">
					<div className="text-experimenta-wrapper">
						<div className="text-experimenta-items">
							<h1>
								Navegación por el universo para colegios
							</h1>
						</div>
					</div>
				</div>

				<div className="text-experimenta">
					<div className="text-experimenta-wrapper">
						<div className="text-experimenta-items">
							<p>
								En este viaje en vivo conoceremos los logros
								y descubrimientos que hicieron mujeres y hombres
								inquietos por observar los misterios del cosmos.
								Acompañados por la curiosidad y el asombro, seremos
								testigos de la diversidad de objetos que hay en nuestro
								universo y, a través de historias, viajaremos por lugares
								ya conocidos y por conocer.
							</p>
						</div>
					</div>
				</div>

				<div className="ws">
					<img
						src={WS}
						alt="Whatsapp"
					/>
					<p>Escríbenos por Whatsapp</p>
				</div>

			</div>
		</>
	)
}
