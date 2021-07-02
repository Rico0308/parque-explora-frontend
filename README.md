# El proyecto :blue_book:
:page_facing_up: El presente proyecto es presentado para la prueba Técnica de Parque Explora, este es el segun punto denominado Frontend. Dicho proyecto está enfocado a solamente Web, no cuenta con diseño responsive, entendiéndose, que no se cumple con el requisito de que fuese tanto para Móvil como Web. Así mismo, la página de Inicio no consume la información de la API de WordPress suministrada por los evaluadores de la prueba técnica.
# Tecnologías Empleadas :computer:
:arrow_right: React JS
###
:arrow_right: Material UI para el desarrollo de algunas Interfaces y uso de Íconos
###
:arrow_right: Formik y Yup para la Validación de Formulario
###
:arrow_right: EmailJS para enviar un correo a la persona que llene el formulario presente en la página
# Correr el Proyecto en Local :point_down:
:one:Se requiere tener instalado NodeJS, el instalador puede ser encontrado en la página oficial: https://nodejs.org/es/download/
###
:two:Si el usuario no cuenta con Yarn, puede instalarlo de forma global abriendo una consola y tipeando: npm install --global yarn
###
:three:Se debe clonar el repositorio, es por ello que donde se quiera bajar el repositorio, se abre una consola y se clona con la instrucción: git clone https://github.com/Rico0308/pruebagithub.git
###
:four:Se abre el proyecto con el IDE preferido y si cuenta con terminal integrada, procedemos a instalar las dependencias: npm install
###
:five:Estando ubicados en la ruta del Proyecto desde la consola, procedemos a ejecutar el Proyecto en local tipeando: yarn start
###
:six:Como el Proyecto debe consumir los datos que se realizaron en el proyecto parque-explora-backend (puede ser encontrado en) se debe haber iniciado anteriormente el servidor en Local de la Api que se contiene en parque-explora-backend, para ello debemos abrir el proyecto con nuestro IDE o consola, ubicarnos en el directorio api y allí ejecutar: yarn dev
###
Si no se realiza el proceso anterior, el componente de Inicio no cargará las Card de las Experiencias registradas en el proyecto parque-explora-backend
