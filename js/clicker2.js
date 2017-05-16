// Ma convention de nommage :
// infoQuelqueChose : information destinée à l'affichage



//Déclaration des variables
	//Les Boutons
	var $leBoutonPrincipal = document.getElementById("leBoutonPrincipal"); //Bouton que l'on doit cliquer pour gagner des points

	//Les indicateurs textuels
	var $infoScoreTotal = document.getElementById("infoScoreTotal"); //Où je vais afficher le score
	var $infoNavbar = document.getElementById("infoNavbar"); //Où je vais afficher les messages

	//Les variables liées au score
	var scoreTotal = 0;

	//Le magasin
		/*
		(
		type: [multi(mutiplificateur), auto(autockicker)]
		nom:
		cout: prix de l'augmentation quand on clique
		indexCout: comment le prix evolue quand on clique
		quantite: combien on en a au départ
		indiceScore: comment le clic / tic agit sur le score
		),
		*/

	var augmentation = [
		(
		type: multi,
		nom: enfant,
		cout: 25,
		indexCout: 2,
		quantite: 1,
		indice: 2,
		),
		(
		type: auto,
		nom: calculatrice,
		cout: 150,
		indexCout: 3,
		quantite: 1,
		indice: 2,
		),
	]

//Actions d'affichage
	//Le score
	function afficherLeScore() {
		 $infoScoreTotal.innerHTML = "Score : " + scoreTotal;
	}

	//Afficher le magasin
	function afficherLeMagasin() {
		function afficherLesBoutons() {

		}
		function afficherLesPrix() {

		}
		function afficherLaQté() {

		}
	}

//Comptage des points
	//Score Total
	function calculerLeScore() {
		scoreTotal = scoreTotal + 1;
		afficherLeScore();
	}

//Actions des boutons
	//Bouton principal
	$leBoutonPrincipal.onclick = calculerLeScore;


//Actions au démarrage
	afficherLeScore(); 