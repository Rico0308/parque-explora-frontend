import React from 'react';
import '../App.css';
import '../styles/ConectateSection.css';
import One from '../WEB/OBJETIVOS-NUM-1.png';
import Two from '../WEB/OBJETIVOS-NUM-2.png';
import Three from '../WEB/OBJETIVOS-NUM-3.png';

export default function ConectateSection() {

	return (
		<>
			<div className="conectate-container" id="Conéctate">
				<div className="text-conectate">
					<div className="text-conectate-wrapper">
						<div className="text-conectate-items">
							<h1>
								¿Cuáles son los objetivos de estos encuentros?
							</h1>
						</div>
					</div>
				</div>

				<div className="text-conectate">
					<div className="text-conectate-wrapper">
						<div className="text-conectate-items">
							<div className="objetivos">
								<img src={One} alt="One" />
								<li>
									Motivar la observación del cielo e incentivar la curiosidad sobre algunos
									temas relacionados con la Astronomía como planetas, estrellas y galaxias.
								</li>
							</div>
							<div className="objetivos">
								<img src={Two} alt="One" />
								<li>
									Fortalecer la divulgación de la Astronomía a través de entornos digitales que
									permitan mantener la conexión con estudiantes y maestros.
								</li>
							</div>
							<div className="objetivos">
								<img src={Three} alt="One" />
								<li>
									Mostrar la Tierra como un planeta muy especial que nos conecta con su familia planetaria
									y el universo en general.
								</li>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}
