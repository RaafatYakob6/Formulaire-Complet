function chargerCombosData() {
    chargerCombosAnnee();
    chargerCombosMois();
    chargerCombosJour();
}

function SelectionnerMoisAnnee() {
    var cboMois = document.forms["formulaire"].elements["cboMois"];
    var indexSelectionMois = cboMois.selectedIndex;
    var mois = parseInt(cboMois.options[indexSelectionMois].value);
    var nombreJour = 31;
    switch (mois) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nombreJour = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nombreJour = 30;
            break;
        case 2:
            var cboAnnee = document.forms["formulaire"].elements["cboAnnee"];
            var indexSelectedAnnee = cboAnnee.selectedIndex;
            var annee = cboAnnee.options[indexSelectedAnnee].value;
            if (estBissextile(annee)) {
                nombreJour = 28;
            } //if
            else {
                nombreJour = 29;
            } //else
    } //fin Switch Case
    chargerCombosJour(nombreJour);
} //Fin Function SelectionnerMoisAnnee

function estBissextile(annee) {
    var bissextile = true;
    if (annee % 4 != 0) {
        bissextile = false;
    } else {
        if (annee % 100 == 0 && annee % 400 != 0) {
            bissextile = false;
        } //fin if
    } //fin else
    return bissextile;
} //fin Function estBissextile

function chargerCombosAnnee() {
    var dateActuel = new Date();
    var annee = dateActuel.getFullYear();
    var nombreAnnee = 50;
    var cboAnnee = document.forms["formulaire"].elements["cboAnnee"];
    var nombreElement = cboAnnee.options.length;
    for (var i = 0; i < nombreElement; i++) {
        cboAnnee.options.remove(i);
    }
    var compteur = 0;
    for (var i = annee; i > (annee - nombreAnnee); i--) {
        var option = new Option("" + i, "" + i); //option (text , value)
        cboAnnee.options.add(option, i);
    } //for

} //function Annee

function chargerCombosMois() {
    var mois = ["Janv", "Fev", "Mars", "Avr", "Mai", "Juin", "Juil", "Aout", "Sept", "Oct", "Nov", "Dec"];
    var cboMois = document.forms["formulaire"].elements["cboMois"];
    var numbreElement = cboMois.options.length;
    for (var i = 0; i < numbreElement; i++) {
        cboMois.options.remove(i);
    }
    for (var i = 0; i < mois.length; i++) {
        var option = new Option(mois[i], "" + (i + 1)); //option(text , value)
        cboMois.options.add(option, i);
    } //for
} //function Mois

function chargerCombosJour(nombreJour) {
    var jours = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    var cboJour = document.forms["formulaire"].elements["cboJour"];
    var numbreElement = cboJour.options.length;
    for (var i = 0; i < numbreElement; i++) {
        cboJour.options.remove(i);
    }

    if (nombreJour == undefined) {
        nombreJour = jours.length;
    } //fin if nombre jours
    cboJour.options.length = nombreJour;
    for (var i = 0; i < jours.length; i++) {
        var option = new Option(jours[i], "" + (i + 1));
        cboJour.options.add(option, i);
    } //for
} //function Jour

function activerAutres() {
    var autres = document.forms["formulaire"].elements["chkAutres"].checked;
    if (autres == true) {
        document.forms["formulaire"].elements["txtAutres"].disabled = false;
    } //fin de if
    else {
        document.forms["formulaire"].elements["txtAutres"].disabled = true;
        document.forms["formulaire"].elements["txtAutres"].value = "";
    } //fin de else
} //fin de Function Activer Autres


function valider() {
    var nom = document.forms["formulaire"].elements["txtNom"].value;
    var prenom = document.forms["formulaire"].elements["txtPrenom"].value;

    //Languages
    var langueFrancaise = document.forms["formulaire"].elements["chkFrancais"].checked;
    var langueAnglais = document.forms["formulaire"].elements["chkAnglais"].checked;
    var autreLangue = document.forms["formulaire"].elements["chkAutres"].checked;
    var languesParlees = "";
    if (langueFrancaise == true) {
        languesParlees = document.forms["formulaire"].elements["chkFrancais"].value;
    }
    if (langueAnglais == true) {
        if (languesParlees != "") { languesParlees += ", "; }
        languesParlees += document.forms["formulaire"].elements["chkAnglais"].value;
    }
    if (autreLangue == true) {
        var textAutresLangues = document.forms["formulaire"].elements["txtAutres"].value;
        if (textAutresLangues != "") {
            if (languesParlees != "") {
                languesParlees += ", ";
            } //if
            languesParlees += textAutresLangues;
        } //fin if

    } //fin if et Languages

    //Sexe
    var listSex = document.forms["formulaire"].elements["radioGender"];
    var psexe = "";
    for (var z = 0; z < listSex.length; z++) {
        if (listSex[z].checked) {
            psexe = listSex[z].value;
            break;
        }
    }

    var indexEtatCivil = document.forms["formulaire"].elements["cboEtatCivil"].selectedIndex;
    var etatCivil = document.forms["formulaire"].elements["cboEtatCivil"].options[indexEtatCivil].text;

    var commentaire = document.forms["formulaire"].elements["txtCommentaire"].value;

    //Adress
    var adresse = "";
    var numero = document.forms["formulaire"].elements["txtNumero"].value;
    var rue = document.forms["formulaire"].elements["txtRue"].value;
    var app = document.forms["formulaire"].elements["txtApp"].value;
    var ville = document.forms["formulaire"].elements["txtVille"].value;
    var codePostal = document.forms["formulaire"].elements["txtCodePostal"].value;

    var indexprovince = document.forms["formulaire"].elements["cboProvince"].selectedIndex;
    var province = document.forms["formulaire"].elements["cboProvince"].options[indexprovince].text;

    adresse += numero + " " + rue;
    if (app != "") {
        adresse += " app " + app;
    }
    adresse += ", " + ville + ", " + province + ", " + codePostal;
    //fin Adress

    var photo = document.forms["formulaire"].elements["txtPhoto"].files[0].name;

    //Date de Naissance

    var indexAnnee = document.forms["formulaire"].elements["cboAnnee"].selectedIndex;
    var bd_Annee = document.forms["formulaire"].elements["cboAnnee"].options[indexAnnee].text;
    var indexMois = document.forms["formulaire"].elements["cboMois"].selectedIndex;
    var bd_Mois = document.forms["formulaire"].elements["cboMois"].options[indexMois].text;
    var indexJour = document.forms["formulaire"].elements["cboJour"].selectedIndex;
    var bd_Jour = document.forms["formulaire"].elements["cboJour"].options[indexJour].text;

    var dNaissance = bd_Annee + " - " + bd_Mois + " - " + bd_Jour;
    var dateActuel = new Date();

    var age = dateActuel.getFullYear() - bd_Annee;
    var m = dateActuel.getMonth() - bd_Mois;
    if (m < 0 || m === 0 && dateActuel.getDate() < bd_Jour) {
        age = age - 1;
    }
    if (age > 17 && age < 41) {
        alert("ok");
    } else {
        alert("You are not allawed to register");

    }

    document.getElementById("idAffichageNomPrenom").innerHTML = nom + " " + prenom;
    document.getElementById("idAffichageAdresse").innerHTML = adresse;
    document.getElementById("idAffichageSexe").innerHTML = psexe;
    document.getElementById("idAffichageEtatCivil").innerHTML = etatCivil;
    document.getElementById("idAffichageLanguesParlee").innerHTML = languesParlees;
    document.getElementById("idAffichageCommentaire").innerHTML = commentaire;
    document.getElementById("idAffichagePhoto").src = photo;
    document.getElementById("idAffichageDateDeNaissance").innerHTML = age;
    document.getElementById("idzoneAffichage").style.display = "block";

} //fin function valider