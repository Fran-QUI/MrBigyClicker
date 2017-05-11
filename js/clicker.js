$bouton = document.getElementById("myBouton");
$score = document.getElementById("score");
$multiplicateurCont = document.getElementById("multiplicateurCont");
$achatMultiplicateur = document.getElementById("achatMultiplicateur");


var scoreTotal = 0;
var multiplicateur = 1;
var prixMultiplicateur = 25;


function afficherLeScore() {
	$score.innerHTML = "Score : " + scoreTotal;
}

function afficherMultiplicateur() {
	$multiplicateurCont.innerHTML = "Multiplicateur x " + multiplicateur;
}


function point() {
	scoreTotal = scoreTotal + multiplicateur;
	afficherLeScore();
}

function achatMultiplicateur() {
	if ( scoreTotal >= prixMultiplicateur ) {
		scoreTotal = scoreTotal - prixMultiplicateur ;
		multiplicateur = multiplicateur + 1 ;
		prixMultiplicateur = prixMultiplicateur * 2;
	}

	else {
		alert("Pas Assez de points !!")
	}
	afficherLeScore();
	afficherMultiplicateur();
}


$bouton.onclick = point;
$achatMultiplicateur.onclick = achatMultiplicateur;
afficherLeScore();
afficherMultiplicateur();