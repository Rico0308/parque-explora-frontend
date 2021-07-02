import React from 'react';
import '../styles/NosotrosSection.css';
import Dot from '../WEB/CARACTERISTICAS-BULLET.png'

function NosotrosSection() {
	return (
		<div className='nosotros-container' id="Conócenos">
			<div className="nosotros-links">
				<div className="nosotros-link-wrapper">
					<div className="nosotros">
						<h2>
							¿Quiénes Somos?
						</h2>
					</div>
				</div>
			</div>
			<div className='nosotros-links'>
				<div className='nosotros-link-wrapper'>
					<div className='nosotros'>
						<p>Somos un parque de ciencia y tecnología, un acuario, un planetario.
							Somos espacios versátiles, escenarios memorables ubicados bajo el agua, al
							borde del universo y en salas premiadas nacional e internacionalmente por sus
							experiencias poco convencionales, que permiten vivir el significado más profundo
							y verdadero de la innovación. Pero más que una obra física, somos una idea en expansión
							con vigorosa vida fuera del Parque, pues desde hace un tiempo nuestros dominios se
							extendieron a otros barrios de la ciudad, e incluso a otros municipios de Antioquia, a
							través de talleres, procesos comunitarios y experiencias itinerantes como el Exploramóvil.
						</p>
					</div>
				</div>
			</div>
			<div className="nosotros-links">
				<div className="nosotros-link-wrapper">
					<div className="nosotros-link-items">
						<h2>
							Portafolios
						</h2>
					</div>
				</div>
			</div>
			<div className='nosotros-links'>
				<div className='nosotros-link-wrapper'>
					<div className='nosotros-link-items'>
						<h3>Comunidad Educativa</h3>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/recorridos-y-rutas-virtuales-para-grupos/" target="_blank" rel="noreferrer">Recorridos y Rutas</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/navegacion-por-el-universo/" target="_blank" rel="noreferrer">Navegación por el Universo</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/formacion-online-para-maestros/" target="_blank" rel="noreferrer">Formación para Maestros</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/talleres-de-experimentacion-y-creatividad/" target="_blank" rel="noreferrer">Talleres</a>
						</div>
					</div>
					<div className='nosotros-link-items'>
						<h3>Empresas</h3>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://www.parqueexplora.org/secciones-independientes/empresas/espacios-para-eventos-empresariales" target="_blank" rel="noreferrer">Espacios para Eventos</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/navegacion-para-empresas/" target="_blank" rel="noreferrer">Navegación por el Universo</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/talleres-de-experimentacion-y-creatividad/" target="_blank" rel="noreferrer">Talleres</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://parqueexplora.org/empresas/explora-itinerante/explora-itinerante" target="_blank" rel="noreferrer">Explora Móvil</a>
						</div>
					</div>
					<div className='nosotros-link-items'>
						<h3>Público en General</h3>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/tienda/" target="_blank" rel="noreferrer">Cursos Explora y Planetario</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/cumpleanos-explora-y-planetario/" target="_blank" rel="noreferrer">Celebración de Cumpleaños</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://encasa.parqueexplora.org/regala-una-boleta/" target="_blank" rel="noreferrer">¡Regala una Boleta!</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://www.parqueexplora.org/compra-tu-boleta-para-explora" target="_blank" rel="noreferrer">¡Visítanos! Compra tus Boletas para Explora</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://planetariomedellin.org/compra-tu-boleta-para-planetario" target="_blank" rel="noreferrer">¡Visítanos! Compra tus Boletas para Planetario</a>
						</div>
						<div className="list">
							<img src={Dot} alt="Dot" />
							<a href="https://parqueexplora.org/tienda" target="_blank" rel="noreferrer">Tienda</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NosotrosSection;