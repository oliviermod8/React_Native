const plantsInfo = [
	{
		id: 0,
		nom: "Soleil",
		latin: "soliculus",
		imgUrl:
			"https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
		diametre: "1 393 684 km",
		distanceSoleil: "",
		temperature: "5 500 °C",
		type: "",
		inclinaison: "",
		gravite: "",
		accroche:
			"Le Soleil est l’étoile autour de laquelle tournent la Terre et les autres planètes du Système solaire.",
	},
	{
		id: 1,
		nom: "Mercure",
		latin: "Mercurius",
		imgUrl:
			"https://cnes.fr/sites/default/files/drupal/201511/image/is_mercure-messenger.jpg",
		diametre: "4 879 km",
		distanceSoleil: "57,9 millions de km",
		temperature: "+169°C",
		type: "Tellurique",
		inclinaison: "0,01°",
		gravite: "3,7 m/s2",
		anneau: "",
		lune: "",
		accroche:
			"Mercure est la plus petite des planètes rocheuses et la plus proche du Soleil.",
	},
	{
		id: 2,
		nom: "Vénus",
		latin: "Venus",
		imgUrl:
			"https://cnes.fr/sites/default/files/drupal/201511/image/is_venus-nasa.jpg",
		diametre: "12 104 km",
		distanceSoleil: "57,9 millions de km",
		temperature: "470°C",
		type: "Tellurique",
		inclinaison: "2,6°",
		gravite: "8,87 m/s2",
		anneau: "",
		lune: "",
		accroche:
			"Par sa taille et sa masse, Vénus ressemble à la Terre, ce qui leur vaut parfois d'être considérées comme 2 soeurs.",
	},
	{
		id: 3,
		nom: "La Terre",
		latin: "Terra",
		imgUrl:
			"https://cnes.fr/sites/default/files/drupal/201610/image/is-terre-apollo17.jpg",
		diametre: "12 756 km",
		distance: "149,6 millions de km",
		temperature: "16°",
		type: "Tellurique",
		inclinaison: "23,5°",
		gravite: "9,8 m/s2",
		anneau: "",
		lune: "1",
		accroche:
			"La Terre est la 3e planète du Système solaire, située entre Vénus et Mars.",
	},
	{
		id: 4,
		nom: "Mars",
		latin: "Mārs",
		imgUrl:
			"https://cnes.fr/sites/default/files/drupal/201510/image/is_mars-planete.jpg",
		diametre: "6 794 km",
		distance: "227,9 millions de km",
		temperature: " -63°C ",
		type: "tellurique",
		inclinaison: "25,2°",
		gravite: "3,71 m/s2",
		anneau: "",
		lune: "2",
		accroche:
			"Mars est la 4e planète du Système solaire par son éloignement au Soleil. C'est une petite planète rocheuse : 7 fois moins volumineuse et 10 fois moins massive que la Terre.",
	},
	{
		id: 5,
		nom: "Jupiter",
		latin: "Juppiter",
		imgUrl:
			"https://cnes.fr/sites/default/files/drupal/201604/image/is-jupiter-planete.jpg",
		diametre: "142 984 km",
		distance: "778,6 millions de km",
		temperature: "-108°C",
		type: "Géante",
		inclinaison: "3,1°",
		gravite: "23,1 m/s2",
		anneau: "",
		lune: "67",
		accroche:
			"Jupiter est la 1re planète géante gazeuse en partant du Soleil. C’est aussi la plus grande planète du Système solaire avec un diamètre moyen de 142 984 km. Elle peut ainsi contenir plus de 1 300 fois la Terre.",
	},
	{
		id: 6,
		nom: "Saturne",
		latin: "Saturnus",
		imgUrl:
			"https://images.unsplash.com/photo-1614732414444-096e5f1122d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
		diametre: "120 536 km",
		distance: "1 milliard et 430 millions de km",
		temperature: "-140°C",
		type: "Géante",
		inclinaison: "26,7°",
		gravite: "10,44 m/s2",
		anneau: "",
		lune: "62",
		accroche:
			"Saturne est la 2e planète géante gazeuse en partant du Soleil et la 2e plus grande planète du Système solaire après Jupiter.",
	},
	{
		id: 7,
		nom: "Uranus",
		latin: "Uranus",
		imgUrl:
			"https://images.unsplash.com/photo-1614732484003-ef9881555dc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80",
		diametre: "51 118 km",
		distance: "2 872,5 millions de km",
		temperature: "-220°C",
		type: "Géante",
		inclinaison: "97,8°",
		gravite: "8,87 m/s2",
		anneau: "13",
		lune: "27",
		accroche:
			"Uranus est la 7e planète en partant du Soleil, et la 3e plus grande du Système solaire (4 fois plus grande que la Terre). C’est aussi la planète la plus froide avec Neptune, dotée d’une couleur bleu-vert provenant de la présence de méthane.",
	},
	{
		id: 8,
		nom: "Neptune",
		latin: "Neptūnus",
		imgUrl:
			"https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
		diametre: "49 244 km",
		distance: "4 504 millions de km",
		temperature: " -218°C",
		type: "Géante",
		inclinaison: "28,32",
		gravite: "11,15 m/s2",
		anneau: "",
		lune: "14",
		accroche: "Neptune est la 8e planète en partant du Soleil.",
	},
];

export default plantsInfo;
