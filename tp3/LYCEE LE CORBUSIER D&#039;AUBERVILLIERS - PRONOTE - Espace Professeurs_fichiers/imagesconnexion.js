IE.fModule({f:function(exports,require,module,global){"use strict";module.exports = function (lObjetImageConnexion) {
var TypeArrierePlanAuthentification = require('TypeArrierePlanAuthentification.js').TypeArrierePlanAuthentification
var ObjetImageConnexion = require('ObjetImageConnexion.js');
if (!ObjetImageConnexion) ObjetImageConnexion = lObjetImageConnexion;

var imagesExtra = { 
    '9-1': {
      srcImage: 'ressources/dicosdor.gif',
      urlImageFond: 'ressources/dicosdor-background.jpg',
      widthImageSuite: 1330,
      heightImageSuite: 760,
      couleurConnexion: '#ffffff',
      classImageFond: 'Cover',
      avecLien: true,
      lien: 'https://www.dicosdor-campus.fr/?utm_source=partenariat&utm_medium=web&utm_campaign=pronote_01_10_20 ',
      texteLien: 'En savoir plus sur le concours Les Dicos d\'Or Campus',
      suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=dicosdor',
      couleurLien: '#ffffff',
      bottomLien: '3%',   
      leftLien: '12%',
      tailleLien: '100%'
    },
    '9-2': {
      srcImage: 'ressources/dicosdor.gif',
      urlImageFond: 'ressources/dicosdor-background.jpg',
      widthImageSuite: 1330,
      heightImageSuite: 760,
      couleurConnexion: '#ffffff',
      classImageFond: 'Cover',
      avecLien: true,
      lien: 'https://www.dicosdor-campus.fr/?utm_source=partenariat&utm_medium=web&utm_campaign=pronote_01_10_20 ',
      texteLien: 'En savoir plus sur le concours Les Dicos d\'Or Campus',
      suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=dicosdor',
      couleurLien: '#ffffff',
      bottomLien: '3%',   
      leftLien: '12%',
      tailleLien: '100%'
    },
    '9-3': {
      srcImage: 'ressources/dicosdor.gif',
      urlImageFond: 'ressources/dicosdor-background.jpg',
      widthImageSuite: 1330,
      heightImageSuite: 760,
      couleurConnexion: '#ffffff',
      classImageFond: 'Cover',
      avecLien: true,
      lien: 'https://www.dicosdor-campus.fr/?utm_source=partenariat&utm_medium=web&utm_campaign=pronote_01_10_20 ',
      texteLien: 'En savoir plus sur le concours Les Dicos d\'Or Campus',
      suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=dicosdor',
      couleurLien: '#ffffff',
      bottomLien: '3%',   
      leftLien: '12%',
      tailleLien: '100%'
    },
    '9-4': {
      srcImage: 'ressources/dicosdor.gif',
      urlImageFond: 'ressources/dicosdor-background.jpg',
      widthImageSuite: 1330,
      heightImageSuite: 760,
      couleurConnexion: '#ffffff',
      classImageFond: 'Cover',
      avecLien: true,
      lien: 'https://www.dicosdor-campus.fr/?utm_source=partenariat&utm_medium=web&utm_campaign=pronote_01_10_20 ',
      texteLien: 'En savoir plus sur le concours Les Dicos d\'Or Campus',
      suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=dicosdor',
      couleurLien: '#ffffff',
      bottomLien: '3%',   
      leftLien: '12%',
      tailleLien: '100%'
    },
    '9-5': {
      srcImage: 'ressources/dicosdor.gif',
      urlImageFond: 'ressources/dicosdor-background.jpg',
      widthImageSuite: 1330,
      heightImageSuite: 760,
      couleurConnexion: '#ffffff',
      classImageFond: 'Cover',
      avecLien: true,
      lien: 'https://www.dicosdor-campus.fr/?utm_source=partenariat&utm_medium=web&utm_campaign=pronote_01_10_20 ',
      texteLien: 'En savoir plus sur le concours Les Dicos d\'Or Campus',
      suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=dicosdor',
      couleurLien: '#ffffff',
      bottomLien: '3%',   
      leftLien: '12%',
      tailleLien: '100%'
    },

    '10-5': {
      srcImage: 'ressources/harcelement2020.png',
      urlImageFond: 'ressources/harcelement-background.png',
      widthImageSuite: 1330,
      heightImageSuite: 760,
      couleurConnexion: '#ffffff',
      classImageFond: 'Cover'
    },

};
ObjetImageConnexion.setDefinitionImagesExtra(imagesExtra);

var lImages = [];

lImages[TypeArrierePlanAuthentification.Louvre] = [{ // janvier
  srcImage: 'ressources/salon.png',
  urlImageSuite: 'ressources/salon-suite.png',
  urlImageFond: 'ressources/salon-background.png',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/quatre-heures-au-salon?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_salon',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_salon',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_salon',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // février
  srcImage: 'ressources/delacroix.png',
  urlImageSuite: 'ressources/delacroix-suite.png',
  urlImageFond: 'ressources/delacroix-background.png',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/portrait-de-l%E2%80%99artiste-dit-au-gilet-vert?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_delacroix',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_dlx',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_dlx',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // mars
  srcImage: 'ressources/rembrandt.png',
  urlImageSuite: 'ressources/rembrandt-suite.png',
  urlImageFond: 'ressources/rembrandt-background.png',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/portrait-de-l%E2%80%99artiste-au-chevalet?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_rembrandt',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_rbdt',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_rbdt',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // avril
  srcImage: 'ressources/chardon.png',
  urlImageSuite: 'ressources/chardon-suite.png',
  urlImageFond: 'ressources/chardon-background.jpg',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/portrait-de-l%E2%80%99artiste-tenant-un-chardon?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_chardon',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_chard',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_chard',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // mai
  srcImage: 'ressources/vigee.png',
  urlImageSuite: 'ressources/vigee-suite.png',
  urlImageFond: 'ressources/vigee-background.jpg',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/madame-vig%C3%A9e-le-brun-et-sa-fille?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_vigeelebrun',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_vig',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_vig',  
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // juin
  srcImage: 'ressources/michelange.png',
  urlImageSuite: 'ressources/michelange-suite.png',
  urlImageFond: 'ressources/michelange-background.jpg',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/portrait-de-michel-ange-%C3%A2g%C3%A9-de-47-ans?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_michelange',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_mang',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_mang',  
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // juillet
  srcImage: 'ressources/venus.png',
  urlImageSuite: 'ressources/venus-suite.png',
  urlImageFond: 'ressources/venus-background.jpg',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/groupe-de-venus-et-cupidon?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_venus',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_venus',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_venus',  
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // aout
  srcImage: 'ressources/irtysen.png',
  urlImageSuite: 'ressources/irtysen-suite.png',
  urlImageFond: 'ressources/irtysen-background.jpg',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/st%C3%A8le-du-chef-des-artisans-scribe-et-sculpteur-irtysen?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_stele',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_irty',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_irty',  
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // septembre
  srcImage: 'ressources/felicie.png',
  urlImageSuite: 'ressources/felicie-suite.png',
  urlImageFond: 'ressources/felicie-background.png',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/portrait-de-f%C3%A9licie-de-fauveau?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_fauveau',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_felicie',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_felicie',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // octobre
  srcImage: 'ressources/abondance.png',
  urlImageSuite: 'ressources/abondance-suite.png',
  urlImageFond: 'ressources/abondance-background.png',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/la-paix-ramenant-l%E2%80%99abondance?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_evigeelebrun',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_abond',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_abond',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // novembre
  srcImage: 'ressources/melendez.png',
  urlImageSuite: 'ressources/melendez-suite.png',
  urlImageFond: 'ressources/melendez-background.png',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/portrait-de-l%E2%80%99artiste?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_melendez',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_melendez',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_melendez',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}, { // décembre
  srcImage: 'ressources/saloncarre.png',
  urlImageSuite: 'ressources/saloncarre-suite.png',
  urlImageFond: 'ressources/saloncarre-background.png',
  classImageFond: 'Cover',
  widthImageSuite: 1330,
  heightImageSuite: 760,
  couleurConnexion: '#ffffff',
  lien: 'https://petitegalerie.louvre.fr/oeuvre/le-salon-carr%C3%A9-en-1861?utm_campaign=pronotepg5&utm_medium=page_oeuvre&utm_source=pronote_castiglione',
  suiviLogo1: 'https://www.index-education.com/swie/tl.php?ln=l_saloncar',
  suiviLogo2: 'https://www.index-education.com/swie/tl.php?ln=lpg_saloncar',
  nomExpo: 'Figure d\'artiste',
  dateMaxLien: new Date(1625443200000) // Thu Jul 05 2021 00:00:00
}];

ObjetImageConnexion.setDefinitionImages(lImages);
}
},fn:"imagesconnexion.js"});