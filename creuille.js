function trouveElement(id)
{
    return document.getElementById(id);
}

function obtenirLAttribut(element, attribut)
{
    return element.getAttribute(attribut);
}

function definirLAttribut(element, attribut, valeur)
{
    return element.setAttribute(attribut, valeur);
}

function changeDeSens(window, traductions)
{
    var element = trouveElement('mots')
    var langueDesClefsActuelle = obtenirLAttribut(element, 'data-langue');
    var autre = {'anglais': 'francais',
                 'francais': 'anglais'};
    var langueDesClefsNouvelle = autre[langueDesClefsActuelle];
    definirLAttribut(element, 'data-langue', langueDesClefsNouvelle);
    construitListe(window, traductions)
}

function construitListe(window, traductions)
{
    var document = window.document;
    document.creeElement = document.createElement;

    var vrais_mots = traductions["vrais mots"];

    var faux_mots = traductions["faux mots"];

    function cache(e)
    {
        e.style.visibility = 'hidden';
    }

    function montre(e)
    {
        e.style.visibility = 'visible';
    }

    var tous_les_mots = vrais_mots.concat(faux_mots);

    var i;
    var lien = trouveElement('lienChange');
    var index = trouveElement('index');
    var mots = trouveElement('mots');
    var langueDesClefs = obtenirLAttribut(mots, 'data-langue');
    var lettres = new Array(26);
    var noeud;

    function enleveLesAccents(s) {
        s = s.replace("é", "e");
        return s;
    }

    var lienFR = '<span class="mot-francais">Français</span>';
    var lienANG = '<span class="mot-anglais">Anglais</span>';
    var lienSource = lienFR;
    var lienDestination = lienANG;
    if (langueDesClefs === 'anglais') {
        lienSource = lienANG;
        lienDestination = lienFR;
    }
    lien.innerHTML = lienSource + ' &rarr; ' + lienDestination;

    mots.innerHTML = '';
    index.innerHTML = '';


    for (i = 0; i < 26; ++i) {

        var lettre = String.fromCharCode(65 + i);

        lettres[i] = noeud = document.creeElement('div');
        noeud.className = 'groupe-lettre';
        noeud.enfants = 0;
        var ancre = document.creeElement('a');
        ancre.name = lettre;
        noeud.appendChild(ancre);
        var titre = document.creeElement('h3');
        titre.innerHTML = lettre;
        noeud.appendChild(titre);
    }

    // renvoie un nombre entre 0 et 25
    function indiceDeLaPremiereLettre(m) {

        var motSansAccent = enleveLesAccents(m);
        var motEnMinuscule = motSansAccent.toLowerCase();
        var resultat = motEnMinuscule.charCodeAt(0) - "a".charCodeAt(0);
        return resultat;
    }

    for (i = 0; i < tous_les_mots.length; ++i) {

        var mot = tous_les_mots[i];

        noeud = document.createElement('div');
        noeud.className = 'definition';

        var spanAnglais = '<span class="mot-anglais"> ' + mot.anglais + ' </span>';
        var spanFrancais = '<span class="mot-francais">' + mot.francais + '</span>';

        var spanClef = spanFrancais;
        var spanValeur = spanAnglais;
        var indice = indiceDeLaPremiereLettre(mot.francais);
        if (langueDesClefs === 'anglais') {
            spanClef = spanAnglais;
            spanValeur = spanFrancais;
            indice = indiceDeLaPremiereLettre(mot.anglais);
        }

        noeud.innerHTML = '· ' + spanClef + ' : ' + spanValeur;

        lettres[indice].appendChild(noeud);
        lettres[indice].enfants++;
    }

    for (i = 0; i < 26; ++i) {
        var lettre = String.fromCharCode(65 + i);
        noeud = lettres[i];
        if (noeud.enfants > 1) {
            mots.appendChild(noeud);
            var lettreIndex = document.creeElement('a');
            lettreIndex.href = '#' + lettre;
            lettreIndex.innerHTML = lettre;
            index.appendChild(lettreIndex);
        }
    }
}
