/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Ramón Sanso",
                Photo: "edindi2.png",

                /*** PASO #1: INSPIRACION *** es la hija, todo antes va el contexto del viaje***/
                goal1: "su hija le propone usar EatWith, ya que ella lo probó en un viaje con sus amigas y le encantó",
                touch1: "teléfono (llamada)",
                feel1: "4",
                con1: "juntarse a comer en casa de alguien que no conoce",
                ima1: "cartoon-planning.png",

                /*** PASO #2: DECICION ***/
                goal2: "descarga la aplicación e intenta registrarse",
                touch2: "móvil",
                feel2: "1",
                con2: "no recuerda la contraseña del correo",
                ima2: "cartoon-PCangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "llama a la hija para pedirle ayuda para registrarse",
                touch3: "teléfono",
                feel3: "3",
                con3: "le da apuro molestar a su hija",
                ima3: "cartoon-phone.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "busca opciones teniendo en cuenta filtros",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Se encuentra 3 opciones que encajan en sus preferencias",
                touch5: "móvil (whatsapp)",
                feel5: "2",
                con5: "Llama a sus amigos (whatsapp no responen) para ver cual es su preferencia, tienen que reservar rápido por los precios",
                ima5: "cartoon-phoning.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Consigue reservar, otro año se encarga otro!",
                touch6: "ordenador",
                feel6: "3",
                con6: "algunos amigos no confirmaron por lo que tuvo que seleccionar reserva con posibilidad de cancelación",
                ima6: "cartoon-resting.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Patricia Cantalapiedra",
                Photo: "mujer.png",

                /*** PASO #1: INSPIRACION ***/
                goal1: "No tiene tiempo para cocinar y pasa mucho tiempo fuera de casa",
                touch1: "",
                feel1: "3",
                con1: "Buscar una solución hacia ambos problemas ",
                ima1: "cartoon-why.png",

                /*** PASO #2: DECISION ***/
                goal2: "Pregunta a sus seguidores por redes sociales si conocen alguna solución que pueda solventar ambos problemas",
                touch2: "móvil (red social) ",
                feel2: "3",
                con2: "Esperar a que las respuestas se adeqüen con la temática de su solicitud de ayuda",
                ima2: "cartoon-phoningangry.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Varias personas le recomiendan Eatwith y decide indagar en la aplicación",
                touch3: "móvil (aplicaciones)",
                feel3: "3",
                con3: "Va a consumirle cierto tiempo",
                ima3: "cartoon-PCangry.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Empieza a pillarle el tranquillo a la aplicación y entonces decide probar uno de sus servicios",
		touch4: "móvil (aplicación)",
                feel4: "4",
                con4: "Buscar alguna oferta adecuada para ella",
                ima4: "cartoon-planning.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Encuentra un sitio cercano a su posición, contrata el servicio y se dirige a la situación",
                touch5: "móvil (aplicación)",
                feel5: "4",
                con5: "Preocupación por si no cumple las expectativas que la aplicación le transmite",
                ima5: "cartoon-phone.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Ha comido muy bien, la experiencia ha sido enriquecedora y el haberla compartido por sus redes sociales le ha hecho ganar público, por lo que va a usarla para sus viajes",
                touch6: "móvil (aplicación)",
                feel6: "5",
                con6: "No es seguro que en los países a los que vaya haya servicios de Eatwith",
                ima6: "cartoon-going.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
