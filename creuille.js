function changeDeSens(traductions)
{
    var langue = $( "#mots" ).attr("data-langue");
    var autre = {'anglais': 'francais',
                 'francais': 'anglais'};
    $( "#mots" ).attr("data-langue", autre[langue]);
    construitListe(traductions);
}

function metAJourLienChange(langue){
    var de = ' <span class="mot-anglais">Anglais</span>  ';
    var vers = '<span class="mot-francais">Français</span>';
    var fleche = ' &rarr; ';
    if (langue == 'francais') {
        var tmp = de;
        de = vers;
        vers = tmp;
    }
    $( "#lienChange" ).html(de + fleche  + vers);
}

function sansAccents(mot){
    // Faute d'une bibliotheque unidecode, nous nous limitons aux lettres
    // accentuées du français.
    // https://fr.wikipedia.org/wiki/Diacritiques_utilisés_en_français
    return mot
        .toLowerCase()
        .replace("à", "a")
        .replace("â", "a")
        .replace("ç", "c")
        .replace("é", "e")
        .replace("è", "e")
        .replace("ê", "e")
        .replace("ë", "e")
        .replace("î", "i")
        .replace("ï", "i")
        .replace("ô", "o")
        .replace("ù", "u")
        .replace("ü", "u");
}

function construitListe(traductions)
{
    var langue = $( "#mots" ).attr("data-langue");

    metAJourLienChange(langue);

    traductions = traductions["vrais mots"].concat(traductions["faux mots"]);
    // tri par ordre alphabétique de la langue de départ
    traductions.sort(function(traduction1, traduction2){
        return (sansAccents(traduction1[langue]) >
                sansAccents(traduction2[langue]));
    });

    $( "#mots" ).html("");
    $( "#index" ).html("");

    var lettreAlphabet = '';
    for (var i=0; i < traductions.length; i++) {
        var mot = traductions[i];
        var l = sansAccents(mot[langue]).charAt(0).toUpperCase();

        if (l != lettreAlphabet) {
            lettreAlphabet = l;
            $( "#index" ).append(
                    $("<a></a>")
                        .attr("href", "#" + lettreAlphabet)
                        .html(lettreAlphabet)
                    );
            $( "#mots" ).append(
                    $("<div></div>")
                        .attr("class", "groupe-lettre")
                        .append($("<a></a>").attr("name", lettreAlphabet))
                        .append($("<h3></h3>").html(lettreAlphabet))
                    );
        }

        var cle = '<span class="mot-anglais"> ' + mot.anglais + ' </span>';
        var val = '<span class="mot-francais">' + mot.francais + '</span>';
        if (langue == "francais") {
            var tmp = cle;
            cle = val;
            val = tmp;
        }
        $( "#mots" )
            .children()
            .last()
            .append(
                $("<div></div>")
                    .attr("class", "definition")
                    .html('· ' + cle + ' : ' + val)
            );
    }
}
