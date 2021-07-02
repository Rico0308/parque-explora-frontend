import React, { useState } from 'react';
import { SliderData } from './SliderData';
import '../styles/ImageSlider.css';

const ImageSlider = () => {

	const [current, setCurrent] = useState(0);
	const length = SliderData.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	return (
		<section className="slider">
			<i className="fas fa-chevron-left left-arrow" onClick={prevSlide} />
			{
				SliderData.map((slide, index) => {
					return (
						<div className={index === current ? "slide active" : "slide"} key={index}>

							{index === current && <img src={slide.image} alt="Slide" className="image" />}

						</div>

					)
				})
			}
			<i className="fas fa-chevron-right right-arrow" onClick={nextSlide} />
		</section>
	)
}

export default ImageSlider
