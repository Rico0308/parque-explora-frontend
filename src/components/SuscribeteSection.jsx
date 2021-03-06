import React, { useState } from 'react';
import '../styles/SuscribeteSection.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Grid, TextField, Box, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import WS from '../WEB/FORMULARIO-WHATSSAPP.png';
import Planet1 from '../WEB/FORMULARIO-PLANETA-1.png';
import Planet2 from '../WEB/FORMULARIO-PLANETA-2.png';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(2),
			width: 400,
		},
	}
}));

const StyledTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#9A65C9',
		},
		'& label': {
			color: '#9A65C9',
			textAlign: 'center',
			fontSize: '18px',
		},
		'& .MuiInput-underline': {
			borderBottomColor: '#9A65C9',
		},
		"& .MuiInput-underline:before": {
			borderBottomColor: "#9A65C9"
		},
		"& .MuiInput-underline:hover:before": {
			borderBottomColor: "#9A65C9"
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#9A65C9',
		},
		'& label + .MuiInput-formControl': {
			marginTop: '25px'
		},
		'& .MuiButton-label': {
			color: 'red',
			fontWeight: '800'
		},
	},
})(TextField);

const ColorButton = withStyles({
	root: {
		color: '#fff',
		fontWeight: 'bold',
		textTransform: 'none',
		backgroundColor: '#9A65C9',
		'&:hover': {
			backgroundColor: '#9A65C9'
		},
	},
})(Button);

const sendMail = (data) => {
	emailjs.send(
		'service_s4az211',
		'template_7ucmyly',
		data,
		'user_aG0fDiMlYrkQua2pG5yxk'
	).then(res => {
		console.log(res);
	}).catch( err => console.log(err));
}

const grados = [
	{
		value: 'Preescolar',
		label: 'Preescolar',
	},
	{
		value: 'Primaria',
		label: 'Primaria',
	},
	{
		value: 'Secundaria',
		label: 'Secundaria',
	}
];

function SuscribeteSection() {
	const classes = useStyles();
	const [currency, setCurrency] = useState('Preescolar');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	const formik = useFormik({
		initialValues: {
			nombre: '',
			cedula: '',
			telefono: '',
			email: '',
			institucion: '',
			nivel: currency
		},
		//Validaci??n con Yup
		validationSchema: Yup.object({
			nombre: Yup.string()
				.min(10, 'Tama??o del Nombre Inv??lido')
				.required('Nombre Requerido'),
			cedula: Yup.string()
				.min(8, 'Tama??o de la C??dula Inv??lido')
				.required('C??dula Requerida'),
			telefono: Yup.string()
				.min(8, 'Tama??o N??mero Inv??lido')
				.required('Tel??fono Requerido'),
			email: Yup.string().email('Email Inv??lido').required('Email Requerido'),
			institucion: Yup.string()
				.min(2, 'Tama??o Inv??lido')
				.required('Nombre Instituci??n Requerido'),
			nivel: Yup.string()
				.required('Seleccionar Nivel')
		}),
		onSubmit: values => {
			sendMail(values);
			formik.handleReset();
		},
	});

	return (
		<div className='susc-container' id="Suscr??bete">
			<div className="susc-links">
				<div className="susc-link-wrapper">
					<div className="susc">
						<div className="susc-title">
							<img src={Planet1} alt="Planeta 1" />
							<h2>
								??Quieres m??s informaci??n?
							</h2>
							<img src={Planet2} alt="Planeta 2" />
						</div>
						<h3>D??janos tus datos y te contactaremos</h3>
					</div>
				</div>
			</div>
			<div className='susc-links'>
				<div className='susc-link-wrapper'>
					<div className='susc'>
						<form className={classes.root} onSubmit={formik.handleSubmit} autoComplete="off">
							<Grid container align="center">
								<Grid item xs>
									<StyledTextField
										className="cont"
										label="Nombre"
										id="nombre"
										name="nombre"
										color="secondary"
										defaultValue={formik.values.nombre}
										onChange={formik.handleChange}
									/>
									{formik.errors.nombre ? <Alert severity="error">{formik.errors.nombre}</Alert> : null}
								</Grid>
								<Grid item xs>
									<StyledTextField
										className="cont"
										label="C??dula"
										id="cedula"
										name="cedula"
										type="number"
										defaultValue={formik.values.cedula}
										onChange={formik.handleChange}

									/>
									{formik.errors.cedula ? <Alert severity="error">{formik.errors.cedula}</Alert> : null}

								</Grid>
							</Grid>
							<Grid container align="center">
								<Grid item xs>
									<StyledTextField
										className="cont"
										label="Telefono celular"
										id="telefono"
										name="telefono"
										type="number"
										defaultValue={formik.values.telefono}
										onChange={formik.handleChange}

									/>
									{formik.errors.telefono ? <Alert severity="error">{formik.errors.telefono}</Alert> : null}
								</Grid>
								<Grid item xs>
									<StyledTextField
										className="cont"
										label="Correo electr??nico"
										id="email"
										name="email"
										defaultValue={formik.values.email}
										onChange={formik.handleChange}
									/>
									{formik.errors.email ? <Alert severity="error">{formik.errors.email}</Alert> : null}
								</Grid>
							</Grid>
							<Grid container align="center">
								<Grid item xs>
									<StyledTextField
										className="cont"
										label="Nombre de instituci??n educativa"
										id="institucion"
										name="institucion"
										defaultValue={formik.values.institucion}
										onChange={formik.handleChange}

									/>
									{formik.errors.institucion ? <Alert severity="error">{formik.errors.institucion}</Alert> : null}
								</Grid>
								<Grid item xs>
									<StyledTextField
										className="cont"
										id="standard-select-currency"
										select
										label="Est??s interesado en una navegaci??n por el universo para:"
										value={currency}
										onChange={handleChange}
									>
										{grados.map((option) => (
											<MenuItem style={{ marginTop: '20px' }} key={option.value} value={option.value}>
												{option.label}
											</MenuItem>
										))}
									</StyledTextField>
								</Grid>
							</Grid>
							<Grid align="center">
								<Box m={2}>
									<ColorButton
										type="submit"
										variant="contained"
									>
										Enviar
									</ColorButton>
								</Box>
							</Grid>
						</form>
					</div>
				</div>
			</div>
			<div className="ws-sus">
				<img
					src={WS}
					alt="Whatsapp"
				/>
				<p>Escr??benos por Whatsapp</p>
				<div className="terms">
					<p>Al diligenciar este formulario aceptas seguir
						recibiendo informaci??n del Parque Explora y nos autorizas
						para que incluyamos tus datos personales en nuestras bases de datos,
						en calidad de responsable y encargado de los mismos,
						con la finalidad de enviarte informaci??n sobre eventos y
						actividades. Tambi??n te das por enterado de los derechos que
						tienes de consultarlos, actualizarlos, rectificarlos y suprimirlos en
						cualquier momento, y conoces la pol??tica de manejo de
						datos de la Corporaci??n, que se encuentran en la p??gina web
						www.parqueexplora.org/condicionales-legales. En ella se encuentran
						descritos los canales de atenci??n para el ejercicio de tus derechos y
						la presentaci??n de quejas y reclamos. As?? mismo comprendes que esta
						autorizaci??n es requerida de acuerdo a lo dispuesto por la ley
						1581 de 2012 y sus decretos reglamentarios. Esta autorizaci??n la
						otorgas gratuitamente sin ninguna limitaci??n de car??cter
						temporal o territoral.
					</p>
				</div>
			</div>
		</div>
	);
}

export default SuscribeteSection;