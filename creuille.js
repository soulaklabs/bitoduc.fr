var reciproque = {'anglais': 'francais', 'francais': 'anglais'};
var embelli = {'francais': 'Français', 'anglais': 'Anglais'};

function changeDeSens(traductions) {
    var langue = $( "#mots" ).attr("data-langue");
    $( "#mots" ).attr("data-langue", reciproque[langue]);
    construitListe(traductions);
}

function metAJourLienChange(langue) {
    var langueSource = langue;
    var langueDestination = reciproque[langue];
    $( "#lienChange" )
        .html(
                '<span class="mot-' + langueSource + '">'
                + embelli[langueSource]
                + '</span>'
                + ' &rarr; '
                + '<span class="mot-' + langueDestination + '">'
                + embelli[langueDestination]
                + '</span>'
          );
}

function sansAccents(mot) {
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

function construitListe(traductions) {
    var langue = $( "#mots" ).attr("data-langue");

    metAJourLienChange(langue);

    traductions = traductions["vrais mots"].concat(traductions["faux mots"]);
    // tri par ordre alphabétique de la langue de départ
    traductions.sort(function(traduction1, traduction2){
        var s1 = sansAccents(traduction1[langue]);
        var s2 = sansAccents(traduction2[langue]);
        if (s1 > s2) {
            return 1;
        }
        if (s2 > s1) {
            return -1;
        }
        return 0;
    });

    $( "#mots" ).html("");
    $( "#index" ).html("");

    var l = '';
    for (var i=0; i < traductions.length; i++) {
        var mot = traductions[i];
        var c = sansAccents(mot[langue]).charAt(0).toUpperCase();

        if (c != l) {
            l = c;
            $( "#index" ).append(
                    $("<a></a>")
                        .attr("href", "#" + l)
                        .html(l)
                    );
            $( "#mots" ).append(
                    $("<div></div>")
                        .attr("class", "groupe-lettre")
                        .append($("<a></a>").attr("name", l))
                        .append($("<h3></h3>").html(l))
                    );
        }

        var langueSource = langue;
        var langueDestination = reciproque[langue];
        $( "#mots" )
            .children()
            .last()
            .append(
                $("<div></div>")
                    .attr("class", "definition")
                    .html(
                        '· '
                        + '<span class="mot-' + langueSource + '">'
                        + mot[langueSource]
                        + '</span>'
                        + ' : '
                        + '<span class="mot-' + langueDestination + '">'
                        + mot[langueDestination]
                        + '</span>'
                        )
            );
    }
}
