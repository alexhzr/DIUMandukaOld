/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                

                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Patricia Cantalapiedra",
				Photo: "mujer.png",
				Quote: "Dulce introducción al caos",
				Age: 29,
				Occupation: "Community Manager, influencer, vlogger",
				Family: "Padres, sin hijos, sin pareja de hecho",
				Location: "Madrid",
				Character: "Despreocupada, alegre, independiente",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Aumentar al máximo sus ganancias", "Escalar hasta puntos más álgidos en torno a lo que a fama se refiere", "Tener una familia"],
				Frustrations: ["Ve poco a sus padres y a sus amigos","Le cuesta crear una familia debido a su movido nivel de vida"],
				Bio: "Vive en Madrid desde que nació. Es hija única y tiene dos padres. Estudió derecho pero al acabar prefirió meterse en el reciente mundo del empleo basado en RRSS hasta que consiguió un puesto como community manager de la red social de una franquicia. Más tarde, ganó popularidad en Instagram hasta que empezaron a lloverle ofertas marcas de ropa y maquillaje, lo que hizo impulsar de carrera de influencer hasta tal punto de extenderla a vlogger de viajes",
				Tech: [
					{ Name: "TIC/Internet", Value: 4},
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos: "Pasa mucho tiempo fuera de casa y en otros países, por lo cual quiere comer sin tener que cocinar y, además, aprovechar su nivel de vida como material para sus RRSS",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 5 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{
                
                
				Id: 1,
				Name: "Ramón Sanso",
				Photo: "edindi2.png",
				Quote: "A la paz de Dios",
				Age: 58,
				Occupation: "Agricultor",
				Family: "Casado desde hace 38 años, 2 hijas y 1 hijo y 4 nietos",
				Location: "Limones (Granada)",
				Character: "Le gusta cazar",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Jubilarse", "Ir a la playa y que no sea Salobreña", "Aprender a usar Amazon"],
				Frustrations: ["Quiere aprender a ver películas del oeste online, pero no sabe usar internet", "Le pone nervioso no saber desbloquear bien el móvil"],
				Bio: "Nacido y criado en Limones, nunca ha pisado el extranjero. Ha dedicado su vida a trabajar y criar a su familia. Las vacaciones más lejos que ha tenido han sido cuando fueron a ver a su cuñada a Badajoz.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 1.5 },
					{ Name: "RRSS", Value: 0 },
					{ Name: "Software", Value: 0.5 }
					
				], 
                Contextos: "Aunque sea tan torpe con las nuevas tecnologías, tiene afán por aprender",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 3.5 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
                
				
		$scope.model = $scope.Personas[0];

	}])
