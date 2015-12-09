Objet = Object
Objet.creer = Objet.create

Chaine = String
Chaine.prototype.enMinuscules = Chaine.prototype.toLowerCase
Chaine.prototype.enMajuscules = Chaine.prototype.toUpperCase
Chaine.prototype.remplacer = Chaine.prototype.replace
Chaine.prototype.caractereA = Chaine.prototype.charAt

Tableau = Array
Tableau.prototype.tri = Tableau.prototype.sort
Tableau.prototype.longueur = function () { return this.length; }
Tableau.prototype.pousser = Tableau.prototype.push

document.creerElement = document.createElement
document.recupererElementParNomDEtiquette = document.getElementsByTagName;
document.localisation = document.location;
document.localisation.protocole = document.localisation.protocole;

jQuery.fn.extend({
    clic: function (x) { return this.click(x); },
    enfants: function () { return this.children(); },
    dernier: function () { return this.last(); },
    ajouter: function (x) { return this.append(x); }
});
$.recupererJSON = $.getJSON
