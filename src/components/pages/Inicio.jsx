import React from 'react'
import '../../App.css';
import Card from '../Card';
import ExperimentaSection from '../ExperimentaSection';
import ConectateSection from '../ConectateSection';
import ProgramateSection from '../ProgramateSection';
import NosotrosSection from '../NosotrosSection';
import SuscribeteSection from '../SuscribeteSection';

export default function Inicio() {

	return (
		<>	
			<Card />
			<ExperimentaSection />
			<ConectateSection />
			<ProgramateSection />
			<NosotrosSection />
			<SuscribeteSection />
		</>
	)
}
