//mini calculatrice
//fonction addition
function addition(nombreA,nombreB){
    return nombreA + nombreB;
}

//fonction multiplication
function multiplication(nombreA,nombreB){
    return nombreA * nombreB;
}

//fonction soustraction
function soustraction(nombreA,nombreB){
    return nombreA - nombreB;
}

//fonction division
function division(nombreA,nombreB){
    if(nombreB == 0){
        throw new Error ('impossible de diviser par 0 ')
    }
    return nombreA / nombreB;
}

let redemarre = false; // Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.
//grande boucle do while pour la boite de dialogue permettant de redemander un calcul
do{
//boucle do while !
do{
    var choix = Number (prompt("que voulez vous faire ? \n\n 1- Addition\n 2 - Multiplication\n 3 - Soustraction \n 4 - Division \n"));
    //Number permet de transformer les valeurs que l'utilisateur va donner en nombres 
    // l'antislash \n\n permet un retour à la ligne
} while(choix != 1 && choix != 2 && choix != 3 && choix != 4)



//boucle do while !
do{
var premierNombre = Number (prompt("entrez un premier nombre"));
var deuxiemeNombre = Number (prompt("entrez un deuxieme nombre"));

}while( isNaN(premierNombre) || isNaN(deuxiemeNombre))

//isNan permet de verifier si la valeur est un nombre
try {
//siwtch permet d'utiliser une de nos fonction par rapport au choix de l'utilisateur
switch(choix) {
    case 1 :
    var resultat = addition(premierNombre,deuxiemeNombre);
    break;

    case 2 :
        var resultat = multiplication(premierNombre,deuxiemeNombre);
        break;  
     case 3 :
            var resultat = soustraction(premierNombre,deuxiemeNombre);
            break;

            case 4 :
            var resultat = division(premierNombre,deuxiemeNombre);
            break;
        
        // il faut créer  une exception
            default: 
              throw new Error ("une erreur est survenue ");

}
//  ici alert va permettre d'afficher un message avec (une chaine de caractère) + la variable résultat 
alert("votre résultat est " + resultat);
}
catch(error){
    alert(error);
}
 redemarre = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer

}while(redemarre)
