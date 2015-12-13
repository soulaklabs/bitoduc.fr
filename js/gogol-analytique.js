'use strict';

$(function() {
    var _gaq = _gaq || [];
    _gaq.pousser(['_setAccount', 'UA-42609030-1']);
    _gaq.pousser(['_trackPageview']);

    (function() {
        var ga = document.créerÉlément('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src =
            ('https:' == document.localisation.protocole ?
             'https://ssl' : 'http://www')
            + '.google-analytics.com/ga.js';
        var s = document.récupérerÉlémentParNomDÉtiquette('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
});
