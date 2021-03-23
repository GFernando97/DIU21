/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.roadToAndorra";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/GFernando97/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Juan García",
				Photo: "Juan.jpg",
				Quote: "Los momentos más felices de mi vida han sido en el hogar junto a mi familia",
				Age: 55,
				Occupation: "Cartero en Correos España",
				Family: "Viudo y con dos hijos independizados en Granada",
				Location: "Madrid (Pinto)",
				Character: "Familiar, Trabajador, Realista",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 1 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 5 }
				], 
				Goals: ["Pasar más tiempo con su familia", "Visitar Granada por primera vez", "Desconectar del trabajo", "Aprender a bailar flamenco"],
				Frustrations: ["Le es difícil entenderse con las nuevas tecnologías", "No quiere estar tanto tiempo solo", "Le gustaría tener mas tiempo libre"],
				Bio: "Es de Madrid y no tuvo la oportunidad de estudiar mas allá del instituto, conoció a su difunta esposa cuando le entregaba una carta, y se enamoró rapidamente. Procuró que sus hijos tuviesen una educación superior a la suya y está enormemente orgulloso de ellos. En el trabajo es de los mas veteranos y todo el mundo le tiene mucho cariño y respeto, además cada fin de semana se reunen en el bar para ver el partido del Madrid.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 1 },
					{ Name: "RRSS", Value: 0 },
					{ Name: "Software", Value: 0 }
					
				], 
                Contextos: "LLeva mucho tiempo sin ver a sus hijos, y quiere aproverchar su vacaciones para darles una sorpresa y visitarlos, y así visitar Granada por primera vez",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Gabriella Ricci",
				Photo: "Gabriella.jpg",
				Quote: "La vida o es una aventura o no es nada",
				Age: 21,
				Occupation: "Estudiante de interpretación",
				Family: "Vive con su madre y con su hermana. Su padré abandonó la familia cuando aún era muy pequeña",
				Location: "Tarrasa (Barcelona)",
				Character: "Soñadora, impulsiva, inteligente",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Conectar con la mayor cantidad de gente posible", "Viajar", "Descubrir nuevos lugares increíbles", "Probar la gastronomía granadina y las famosas 'tapas' "],
				Frustrations: ["Economía muy limitada", "Le encantaría conducir, pero debido a su incapacidad no le es posible", "Falta de tiempo para hacer todo lo que planea"],
				Bio: "Es de Tarrasa y desde muy pequeña ya le gustaba viajar y aprender nuevos idiomas, a los 18 años sufrió un accidente de coche que la incapacitó para caminar, sin embargo este obstáculo no ha disminuido sus ganas de ver mundo. Nunca deja de lado a su hermana y a su madre, siguiendo siempre las recomendaciones que ellas le dan. Quiere hacer nuevos amigos y viajar con ellos por las ciudades de España, empezando por Granada.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 0 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])