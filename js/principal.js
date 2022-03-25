/*
 * Droits d'auteur 2013-2015 Guillaume Piolat <guillaume.piolat@gmail.com>
 * Droits d'auteur 2013-2015 Etienne Millon <me@emillon.org>
 * Droits d'auteur 2013-2015 Quentin Sabah <quentin.sabah@gmail.com>
 * Droits d'auteur 2015      Christophe-Marie Duquesne <chmd@chmd.fr>
 * Droits d'auteur 2015      Valentin Lorentz <progval+github@progval.net>
 *
 * Attention, ce fichier est désuet depuis la migration vers les pages de GitHub.
 */

'use strict';

var réciproque = {'anglais': 'français', 'français': 'anglais'};

function inverser(traductions) {
    var langue = $( "#mots" ).attr("data-langue");
    $( "#mots" ).attr("data-langue", réciproque[langue]);
    construireListe(traductions);
    mettreÀJourLienInversion();
}

function mettreÀJourLienInversion() {
    var langue = $( "#mots" ).attr("data-langue");
    var langueSource = langue;
    var langueDestination = réciproque[langue];
    $( "#lienInversion" )
        .html(
                '<span class="mot-' + désamorcerLeHtml(langueSource) + '">'
                + désamorcerLeHtml(langueSource.majusculer())
                + '</span>'
                + ' &rarr; '
                + '<span class="mot-' + désamorcerLeHtml(langueDestination) + '">'
                + désamorcerLeHtml(langueDestination.majusculer())
                + '</span>'
          );
}

function htmlifier(mot, langue){
    var res = '<span class="mot-' + désamorcerLeHtml(langue) + '">';
    res += désamorcerLeHtml(mot[langue]) + '</span>';
    if (langue == "français") {
        if ("genre" in mot){
            var genre = désamorcerLeHtml('N' + mot["genre"].enMajuscules());
            res += ' <span class="genre">' + genre + '</span>';
        }
        if ("classe" in mot){
            var classe = "";
            if (mot["classe"] == "groupe nominal") {
                classe = "GN";
            }
            if (mot["classe"] == "proposition") {
                classe = "Prop";
            }
            if (classe != ""){
                res += ' <span class="classe">' + classe + '</span>';
            }
        }
    }
    return res;
}

function construireListe(traductions) {
    var langue = $( "#mots" ).attr("data-langue");

    // trier par ordre alphabétique de la langue de départ
    traductions.trier(function(traduction1, traduction2){
        var s1 = traduction1[langue].enMinuscules().sansAccents();
        var s2 = traduction2[langue].enMinuscules().sansAccents();
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
    for (var i=0; i < traductions.longueur(); i++) {
        var mot = traductions[i];
        var c = mot[langue].caractèreÀ(0).enMajuscules().sansAccents();


        if (c != l) {
            l = c;
            $( "#index" ).ajouter(
                    $("<a></a>")
                        .attr("href", "#" + l)
                        .html(l)
                    );
            $( "#mots" ).ajouter(
                    $("<div></div>")
                        .attr("class", "groupe-lettre")
                        .append($("<a></a>").attr("name", l))
                        .append($("<h3></h3>").html(l))
                    );
        }

        $( "#mots" )
            .enfants()
            .dernier()
            .ajouter(
                $("<div></div>")
                    .attr("class", "definition")
                    .html(
                        '· '
                        + htmlifier(mot, langue)
                        + ' : '
                        + htmlifier(mot, réciproque[langue])
                        )
            );
    }
}

function désamorcerLeHtml(suspect) {
    return suspect
        .remplacer(/&/g, "&amp;")
        .remplacer(/</g, "&lt;")
        .remplacer(/>/g, "&gt;")
        .remplacer(/'/g, "&#39;")
        .remplacer(/"/g, "&quot;");
}

$(function() {
    $.récupérerJSON("liste_de_traductions.json", function(traductions) {
        construireListe(traductions);
        mettreÀJourLienInversion();
        $( "#lienInversion" ).clic( function() {inverser(traductions);} );
    });
});

