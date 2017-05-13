// Ma convention de nommage :
// infoQuelqueChose : information destinée à l'affichage
// scoreOption : quelle incidence va avoir l'option sur le score
// nombreOption : défini combien de fois l'option a été achetée
// prixOption : combien coûte l'option


//Déclaration des variables
	//Les Boutons
	var $leBoutonPrincipal = document.getElementById("leBoutonPrincipal"); //Bouton que l'on doit cliquer pour gagner des points

	//Les indicateurs textuels
	var $infoScoreTotal = document.getElementById("infoScoreTotal"); //Où je vais afficher le score
	var $infoNavbar = document.getElementById("infoNavbar"); //Où je vais afficher les messages

	//Les variables liées au score
	var scoreTotal = 0;

//Actions d'affichage
	//Le score
	function afficherLeScore() {
		 $infoScoreTotal.innerHTML = "Score : " + scoreTotal;
	}

//Comptage des points
	//Score Total
	function calculerLeScore() {
		scoreTotal = scoreTotal + 1;
		afficherLeScore;
	}

//Action des boutons
	//Bouton principal
	$leBoutonPrincipal.onclick() = calculerLeScore;