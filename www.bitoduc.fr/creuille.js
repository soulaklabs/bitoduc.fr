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

function changeDeSens(window)
{
    var element = trouveElement('mots')
    var langueDesClefsActuelle = obtenirLAttribut(element, 'data-langue');
    var autre = {'anglais': 'francais',
                 'francais': 'anglais'};
    var langueDesClefsNouvelle = autre[langueDesClefsActuelle];
    definirLAttribut(element, 'data-langue', langueDesClefsNouvelle);
    construitListe(window)
}

function construitListe(window)
{
    var document = window.document;
    document.creeElement = document.createElement;

    var vrais_mots = [
        {anglais: 'dangling pointer', francais: 'pointeur fou'},
        {anglais: 'URL'             , francais: 'adresse réticulaire'},
        {anglais: 'GC'              , francais: 'ramasse-miettes, glaneur de cellule'},
        {anglais: 'pipeline'        , francais: 'bitoduc'},
        {anglais: 'TL;DR (Too Long; Didn\'t Read)' , francais: 'TL;PL (Trop Long; Pas Lu)'},
        {anglais: 'framework', francais: 'cadriciel'},
        {anglais: 'shareware', francais: 'partagiciel'},
        {anglais: 'freeware', francais: 'gratuiciel'},
        {anglais: 'spam', francais: 'polluriel, pourriel'},
        {anglais: 'spammeur', francais: 'arroseur publicitaire'},
        {anglais: 'CDROM', francais: 'cédérom'},
        {anglais: 'e-mail', francais: 'courriel'},
        {anglais: 'anti-pattern', francais: 'anti-patron'},
        {anglais: 'callback function', francais: 'fonction de rappel'},
        {anglais: 'stack overflow', francais: 'dépassement de pile'},
        {anglais: 'flag', francais: 'fanion'},
        {anglais: 'firewall', francais: 'pare-feu'},
        {anglais: 'bug', francais: 'bogue'},
        {anglais: 'USB key', francais: 'mémorette'},
        {anglais: 'core dump', francais: 'vidage de mémoire'},
        {anglais: 'spinlock', francais: 'tourniquet'},
        {anglais: 'polling', francais: 'attente active'},
        {anglais: 'debugger', francais: 'dévermineur'},
        {anglais: 'god object', francais: 'objet omniscient'},
        {anglais: 'flame', francais: 'propos inflammatoire'},
        {anglais: 'angle brackets', francais: 'chevrons'},
        {anglais: 'home row', francais: 'touche de repos'},
        {anglais: 'number sign', francais: 'croisillon'},
        {anglais: 'slash', francais: 'barre oblique'},
        {anglais: 'backslash', francais: 'barre oblique inversée'},
        {anglais: 'ampersand', francais: 'esperluette'},
        {anglais: 'backport', francais: 'rétroportage'},
        {anglais: 'rolling release', francais: 'publication continue'},
        {anglais: 'checksum', francais: 'somme de contrôle'},
        {anglais: 'repository', francais: 'dépôt'},
        {anglais: 'version control system', francais: 'logiciel de gestion de versions'},
        {anglais: 'lazy evaluation', francais: 'évaluation paresseuse'},
        {anglais: 'upload', francais: 'téléversement'},
        {anglais: 'download', francais: 'téléchargement'},
        {anglais: 'patch', francais: 'rustine logicielle'},
        {anglais: 'endianness', francais: 'boutisme'},
        {anglais: 'big-endian', francais: 'grand boutien'},
        {anglais: 'little-endian', francais: 'petit boutien'},
        {anglais: 'plugin', francais: 'greffon'},
        {anglais: 'online chat', francais: 'clavardage'},
        {anglais: 'webcam', francais: 'cybercaméra'},
        {anglais: 'podcasting', francais: 'balladodiffusion'},
        {anglais: 'phishing', francais: 'hameçonnage'},
        {anglais: 'bloatware', francais: 'boufficiel'},
        {anglais: 'spyware', francais: 'espiogiciel'},
        {anglais: 'flood', francais: 'matraquage'},
        {anglais: 'glue code', francais: 'code ciment'},
        {anglais: 'proxy', francais: 'mandataire'},
        {anglais: 'reverse proxy', francais: 'mandataire inverse'},
        {anglais: 'tutorial', francais: 'didacticiel'},
        {anglais: 'browser', francais: 'butineur'},
        {anglais: 'BBS (Bulletin Board System)', francais: 'babillard électronique'},
        {anglais: 'applet', francais: 'appliquette'},
        {anglais: 'cloud computing', francais: 'infonuagique'},
        {anglais: 'overclocking', francais: 'surcadençage'},
        {anglais: 'double word', francais: 'trente-deuzet'},
        {anglais: 'byte', francais: 'octet'},
        {anglais: 'malware', francais: 'maliciel'},
        {anglais: 'namespace', francais: 'espace de noms'},
        {anglais: 'Cascading Style Sheets (CSS)', francais: 'feuilles de style en cascade'},
        {anglais: 'middleware', francais: 'intergiciel'},
        {anglais: 'webmaster', francais: 'webmestre'},
        {anglais: 'Web', francais: 'toile'},
        {anglais: 'Computer Science (CS)', francais: 'science informatique'},
        {anglais: 'program counter', francais: 'compteur ordinal'},
        {anglais: 'hub', francais: 'concentrateur'},
        {anglais: 'backdoor', francais: 'porte dérobée'},
        {anglais: 'hyperlink', francais: 'hyperlien'},
        {anglais: 'fork', francais: 'scission'},
        {anglais: 'watchdog', francais: 'chien de garde'},
        {anglais: 'ROM (Read-Only Memory)', francais: 'mémoire morte'},
        {anglais: 'deadlock', francais: 'étreinte fatale'},
        {anglais: 'refactoring', francais: 'réusinage'},
        {anglais: 'digital', francais: 'numérique'},
        {anglais: 'tag', francais: 'étiquette'}
    ];

    var faux_mots = [
        {anglais: 'branch merging', francais: 'fusion de branches'},
        {anglais: 'pull-request', francais: 'fusiodemande'},
        {anglais: 'NIH (Not Invented Here)', francais: 'PII (Pas Inventé Ici)'},
        {anglais: 'RTFM (Read The Fucking Manual)', francais: 'LPDM (Lis le Putain De Manuel)'},
        {anglais: 'DRY (Don\'t Repeat Yourself)', francais: 'NTRP (Ne Te Répète Pas)'},
        {anglais: 'hashtag', francais: 'croisiquette'},
        {anglais: 'tweet', francais: 'gazouillis'},
        {anglais: 'lolcat', francais: 'chatmusant'},
        {anglais: 'empowerment', francais: 'empouvoirement'},
        {anglais: 'to spoil', francais: 'divulgâcher'},
        {anglais: 'smartphone', francais: 'malinphone'},
        {anglais: 'walled garden', francais: 'jardin secret, communauté prison'},
        {anglais: 'favicon', francais: 'favorimage'},
        {anglais: 'stand-up meeting', francais: 'réunion debout'},
        {anglais: 'commit', francais: 'atome de code'}
    ];

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
