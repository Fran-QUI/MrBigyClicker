$bouton = document.getElementById("bouton");
$score = document.getElementById("score");
$multiplicateurCont = document.getElementById("multiplicateurCont");

scoreTotal = 1
multiplicateur = 1


function afficherLeScore() {
	score.innerHTML = "Score : " + scoreTotal;
}

function afficherMultiplicateur() {
	multiplicateurCont.innerHTML = "Multiplicateur x " + multiplicateur;
	}

function click() {
	scoreTotal = scoreTotal + multiplicateur;
	afficherLeScore();
}

$bouton.onclick = click() ;
afficherLeScore();
afficherMultiplicateur();