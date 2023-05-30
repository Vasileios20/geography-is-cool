 const countries = [
  {
    "capital": "Kabul",
    "code": "af",
    "continent": "Asia",
    "flag": "assets/images/flags/af.svg",
    "flag_250px": "assets/images/png250px/af.png",
    "iso": true,
    "name": "Afghanistan"
  },
  {
    "capital": "Mariehamn",
    "code": "ax",
    "continent": "Europe",
    "flag": "assets/images/flags/ax.svg",
    "flag_250px": "assets/images/png250px/ax.png",
    "iso": true,
    "name": "Aland Islands"
  },
  {
    "capital": "Tirana",
    "code": "al",
    "continent": "Europe",
    "flag": "assets/images/flags/al.svg",
    "flag_250px": "assets/images/png250px/al.png",
    "iso": true,
    "name": "Albania"
  },
  {
    "capital": "Algiers",
    "code": "dz",
    "continent": "Africa",
    "flag": "assets/images/flags/dz.svg",
    "flag_250px": "assets/images/png250px/dz.png",
    "iso": true,
    "name": "Algeria"
  },
  {
    "capital": "Pago Pago",
    "code": "as",
    "continent": "Oceania",
    "flag": "assets/images/flags/as.svg",
    "flag_250px": "assets/images/png250px/as.png",
    "iso": true,
    "name": "American Samoa"
  },
  {
    "capital": "Andorra la Vella",
    "code": "ad",
    "continent": "Europe",
    "flag": "assets/images/flags/ad.svg",
    "flag_250px": "assets/images/png250px/ad.png",
    "iso": true,
    "name": "Andorra"
  },
  {
    "capital": "Luanda",
    "code": "ao",
    "continent": "Africa",
    "flag": "assets/images/flags/ao.svg",
    "flag_250px": "assets/images/png250px/ao.png",
    "iso": true,
    "name": "Angola"
  },
  {
    "capital": "The Valley",
    "code": "ai",
    "continent": "North America",
    "flag": "assets/images/flags/ai.svg",
    "flag_250px": "assets/images/png250px/ai.png",
    "iso": true,
    "name": "Anguilla"
  },
  {
    "code": "aq",
    "flag": "assets/images/flags/aq.svg",
    "flag_250px": "assets/images/png250px/aq.png",
    "iso": true,
    "name": "Antarctica"
  },
  {
    "capital": "St. John's",
    "code": "ag",
    "continent": "North America",
    "flag": "assets/images/flags/ag.svg",
    "flag_250px": "assets/images/png250px/ag.png",
    "iso": true,
    "name": "Antigua and Barbuda"
  },
  {
    "capital": "Buenos Aires",
    "code": "ar",
    "continent": "South America",
    "flag": "assets/images/flags/ar.svg",
    "flag_250px": "assets/images/png250px/ar.png",
    "iso": true,
    "name": "Argentina"
  },
  {
    "capital": "Yerevan",
    "code": "am",
    "continent": "Asia",
    "flag": "assets/images/flags/am.svg",
    "flag_250px": "assets/images/png250px/am.png",
    "iso": true,
    "name": "Armenia"
  },
  {
    "capital": "Oranjestad",
    "code": "aw",
    "continent": "South America",
    "flag": "assets/images/flags/aw.svg",
    "flag_250px": "assets/images/png250px/aw.png",
    "iso": true,
    "name": "Aruba"
  },
  {
    "capital": "Georgetown",
    "code": "ac",
    "continent": "Africa",
    "flag": "assets/images/flags/ac.svg",
    "flag_250px": "assets/images/png250px/ac.png",
    "iso": false,
    "name": "Ascension Island"
  },
  {
    "capital": "Canberra",
    "code": "au",
    "continent": "Oceania",
    "flag": "assets/images/flags/au.svg",
    "flag_250px": "assets/images/png250px/au.png",
    "iso": true,
    "name": "Australia"
  },
  {
    "capital": "Vienna",
    "code": "at",
    "continent": "Europe",
    "flag": "assets/images/flags/at.svg",
    "flag_250px": "assets/images/png250px/at.png",
    "iso": true,
    "name": "Austria"
  },
  {
    "capital": "Baku",
    "code": "az",
    "continent": "Asia",
    "flag": "assets/images/flags/az.svg",
    "flag_250px": "assets/images/png250px/az.png",
    "iso": true,
    "name": "Azerbaijan"
  },
  {
    "capital": "Nassau",
    "code": "bs",
    "continent": "North America",
    "flag": "assets/images/flags/bs.svg",
    "flag_250px": "assets/images/png250px/bs.png",
    "iso": true,
    "name": "Bahamas"
  },
  {
    "capital": "Manama",
    "code": "bh",
    "continent": "Asia",
    "flag": "assets/images/flags/bh.svg",
    "flag_250px": "assets/images/png250px/bh.png",
    "iso": true,
    "name": "Bahrain"
  },
  {
    "capital": "Dhaka",
    "code": "bd",
    "continent": "Asia",
    "flag": "assets/images/flags/bd.svg",
    "flag_250px": "assets/images/png250px/bd.png",
    "iso": true,
    "name": "Bangladesh"
  },
  {
    "capital": "Bridgetown",
    "code": "bb",
    "continent": "North America",
    "flag": "assets/images/flags/bb.svg",
    "flag_250px": "assets/images/png250px/bb.png",
    "iso": true,
    "name": "Barbados"
  },
  {
    "capital": "Minsk",
    "code": "by",
    "continent": "Europe",
    "flag": "assets/images/flags/by.svg",
    "flag_250px": "assets/images/png250px/by.png",
    "iso": true,
    "name": "Belarus"
  },
  {
    "capital": "Brussels",
    "code": "be",
    "continent": "Europe",
    "flag": "assets/images/flags/be.svg",
    "flag_250px": "assets/images/flags/be.png",
    "iso": true,
    "name": "Belgium"
  },
  {
    "capital": "Belmopan",
    "code": "bz",
    "continent": "North America",
    "flag": "assets/images/flags/bz.svg",
    "flag_250px": "assets/images/png250px/bz.png",
    "iso": true,
    "name": "Belize"
  },
  {
    "capital": "Porto-Novo",
    "code": "bj",
    "continent": "Africa",
    "flag": "assets/images/flags/bj.svg",
    "flag_250px": "assets/images/png250px/bj.png",
    "iso": true,
    "name": "Benin"
  },
  {
    "capital": "Hamilton",
    "code": "bm",
    "continent": "North America",
    "flag": "assets/images/flags/bm.svg",
    "flag_250px": "assets/images/png250px/bm.png",
    "iso": true,
    "name": "Bermuda"
  },
  {
    "capital": "Thimphu",
    "code": "bt",
    "continent": "Asia",
    "flag": "assets/images/flags/bt.svg",
    "flag_250px": "assets/images/png250px/bt.png",
    "iso": true,
    "name": "Bhutan"
  },
  {
    "capital": "Sucre",
    "code": "bo",
    "continent": "South America",
    "flag": "assets/images/flags/bo.svg",
    "flag_250px": "assets/images/png250px/bo.png",
    "iso": true,
    "name": "Bolivia"
  },
  {
    "capital": "Kralendijk",
    "code": "bq",
    "continent": "South America",
    "flag": "assets/images/flags/bq.svg",
    "flag_250px": "assets/images/png250px/bq.png",
    "iso": true,
    "name": "Bonaire, Sint Eustatius and Saba"
  },
  {
    "capital": "Sarajevo",
    "code": "ba",
    "continent": "Europe",
    "flag": "assets/images/flags/ba.svg",
    "flag_250px": "assets/images/png250px/ba.png",
    "iso": true,
    "name": "Bosnia and Herzegovina"
  },
  {
    "capital": "Gaborone",
    "code": "bw",
    "continent": "Africa",
    "flag": "assets/images/flags/bw.svg",
    "flag_250px": "assets/images/png250px/bw.png",
    "iso": true,
    "name": "Botswana"
  },
  {
    "code": "bv",
    "flag": "assets/images/flags/bv.svg",
    "flag_250px": "assets/images/png250px/bv.png",
    "iso": true,
    "name": "Bouvet Island"
  },
  {
    "capital": "Brasília",
    "code": "br",
    "continent": "South America",
    "flag": "assets/images/flags/br.svg",
    "flag_250px": "assets/images/png250px/br.png",
    "iso": true,
    "name": "Brazil"
  },
  {
    "capital": "Diego Garcia",
    "code": "io",
    "continent": "Asia",
    "flag": "assets/images/flags/io.svg",
    "flag_250px": "assets/images/png250px/io.png",
    "iso": true,
    "name": "British Indian Ocean Territory"
  },
  {
    "capital": "Bandar Seri Begawan",
    "code": "bn",
    "continent": "Asia",
    "flag": "assets/images/flags/bn.svg",
    "flag_250px": "assets/images/png250px/bn.png",
    "iso": true,
    "name": "Brunei Darussalam"
  },
  {
    "capital": "Sofia",
    "code": "bg",
    "continent": "Europe",
    "flag": "assets/images/flags/bg.svg",
    "flag_250px": "assets/images/png250px/bg.png",
    "iso": true,
    "name": "Bulgaria"
  },
  {
    "capital": "Ouagadougou",
    "code": "bf",
    "continent": "Africa",
    "flag": "assets/images/flags/bf.svg",
    "flag_250px": "assets/images/png250px/bf.png",
    "iso": true,
    "name": "Burkina Faso"
  },
  {
    "capital": "Bujumbura",
    "code": "bi",
    "continent": "Africa",
    "flag": "assets/images/flags/bi.svg",
    "flag_250px": "assets/images/png250px/bi.png",
    "iso": true,
    "name": "Burundi"
  },
  {
    "capital": "Praia",
    "code": "cv",
    "continent": "Africa",
    "flag": "assets/images/flags/cv.svg",
    "flag_250px": "assets/images/png250px/cv.png",
    "iso": true,
    "name": "Cabo Verde"
  },
  {
    "capital": "Phnom Penh",
    "code": "kh",
    "continent": "Asia",
    "flag": "assets/images/flags/kh.svg",
    "flag_250px": "assets/images/png250px/kh.png",
    "iso": true,
    "name": "Cambodia"
  },
  {
    "capital": "Yaoundé",
    "code": "cm",
    "continent": "Africa",
    "flag": "assets/images/flags/cm.svg",
    "flag_250px": "assets/images/png250px/cm.png",
    "iso": true,
    "name": "Cameroon"
  },
  {
    "capital": "Ottawa",
    "code": "ca",
    "continent": "North America",
    "flag": "assets/images/flags/ca.svg",
    "flag_250px": "assets/images/png250px/ca.png",
    "iso": true,
    "name": "Canada"
  },
  {
    "code": "ic",
    "flag": "assets/images/flags/ic.svg",
    "flag_250px": "assets/images/png250px/ic.png",
    "iso": false,
    "name": "Canary Islands"
  },
  {
    "code": "es-ct",
    "flag": "assets/images/flags/es-ct.svg",
    "flag_250px": "assets/images/png250px/es-ct.png",
    "iso": false,
    "name": "Catalonia"
  },
  {
    "code": "es-pv",
    "flag": "assets/images/flags/es-pv.svg",
    "flag_250px": "assets/images/png250px/es-pv.png",
    "iso": false,
    "name": "Basque Country"
  },
  {
    "capital": "George Town",
    "code": "ky",
    "continent": "North America",
    "flag": "assets/images/flags/ky.svg",
    "flag_250px": "assets/images/png250px/ky.png",
    "iso": true,
    "name": "Cayman Islands"
  },
  {
    "capital": "Bangui",
    "code": "cf",
    "continent": "Africa",
    "flag": "assets/images/flags/cf.svg",
    "flag_250px": "assets/images/png250px/cf.png",
    "iso": true,
    "name": "Central African Republic"
  },
  {
    "code": "cefta",
    "flag": "assets/images/flags/cefta.svg",
    "flag_250px": "assets/images/png250px/cefta.png",
    "iso": false,
    "name": "Central European Free Trade Agreement"
  },
  {
    "code": "ea",
    "flag": "assets/images/flags/ea.svg",
    "flag_250px": "assets/images/png250px/ea.png",
    "iso": false,
    "name": "Ceuta & Melilla"
  },
  {
    "capital": "N'Djamena",
    "code": "td",
    "continent": "Africa",
    "flag": "assets/images/flags/td.svg",
    "flag_250px": "assets/images/png250px/td.png",
    "iso": true,
    "name": "Chad"
  },
  {
    "capital": "Santiago",
    "code": "cl",
    "continent": "South America",
    "flag": "assets/images/flags/cl.svg",
    "flag_250px": "assets/images/png250px/cl.png",
    "iso": true,
    "name": "Chile"
  },
  {
    "capital": "Beijing",
    "code": "cn",
    "continent": "Asia",
    "flag": "assets/images/flags/cn.svg",
    "flag_250px": "assets/images/png250px/cn.png",
    "iso": true,
    "name": "China"
  },
  {
    "capital": "Flying Fish Cove",
    "code": "cx",
    "continent": "Asia",
    "flag": "assets/images/flags/cx.svg",
    "flag_250px": "assets/images/png250px/cx.png",
    "iso": true,
    "name": "Christmas Island"
  },
  {
    "code": "cp",
    "flag": "assets/images/flags/cp.svg",
    "flag_250px": "assets/images/png250px/cp.png",
    "iso": false,
    "name": "Clipperton Island"
  },
  {
    "capital": "West Island",
    "code": "cc",
    "continent": "Asia",
    "flag": "assets/images/flags/cc.svg",
    "flag_250px": "assets/images/png250px/cc.png",
    "iso": true,
    "name": "Cocos (Keeling) Islands"
  },
  {
    "capital": "Bogotá",
    "code": "co",
    "continent": "South America",
    "flag": "assets/images/flags/co.svg",
    "flag_250px": "assets/images/png250px/co.png",
    "iso": true,
    "name": "Colombia"
  },
  {
    "capital": "Moroni",
    "code": "km",
    "continent": "Africa",
    "flag": "assets/images/flags/km.svg",
    "flag_250px": "assets/images/png250px/km.png",
    "iso": true,
    "name": "Comoros"
  },
  {
    "capital": "Avarua",
    "code": "ck",
    "continent": "Oceania",
    "flag": "assets/images/flags/ck.svg",
    "flag_250px": "assets/images/png250px/ck.png",
    "iso": true,
    "name": "Cook Islands"
  },
  {
    "capital": "San José",
    "code": "cr",
    "continent": "North America",
    "flag": "assets/images/flags/cr.svg",
    "flag_250px": "assets/images/png250px/cr.png",
    "iso": true,
    "name": "Costa Rica"
  },
  {
    "capital": "Zagreb",
    "code": "hr",
    "continent": "Europe",
    "flag": "assets/images/flags/hr.svg",
    "flag_250px": "assets/images/png250/hr.png",
    "iso": true,
    "name": "Croatia"
  },
  {
    "capital": "Havana",
    "code": "cu",
    "continent": "North America",
    "flag": "assets/images/flags/cu.svg",
    "flag_250px": "assets/images/png250px/cu.png",
    "iso": true,
    "name": "Cuba"
  },
  {
    "capital": "Willemstad",
    "code": "cw",
    "continent": "South America",
    "flag": "assets/images/flags/cw.svg",
    "flag_250px": "assets/images/png250px/cw.png",
    "iso": true,
    "name": "Curaçao"
  },
  {
    "capital": "Nicosia",
    "code": "cy",
    "continent": "Europe",
    "flag": "assets/images/flags/cy.svg",
    "flag_250px": "assets/images/png250px/cy.png",
    "iso": true,
    "name": "Cyprus"
  },
  {
    "capital": "Prague",
    "code": "cz",
    "continent": "Europe",
    "flag": "assets/images/flags/cz.svg",
    "flag_250px": "assets/images/png250px/cz.png",
    "iso": true,
    "name": "Czech Republic"
  },
  {
    "capital": "Yamoussoukro",
    "code": "ci",
    "continent": "Africa",
    "flag": "assets/images/flags/ci.svg",
    "flag_250px": "assets/images/png250px/ci.png",
    "iso": true,
    "name": "Côte d'Ivoire"
  },
  {
    "capital": "Kinshasa",
    "code": "cd",
    "continent": "Africa",
    "flag": "assets/images/flags/cd.svg",
    "flag_250px": "assets/images/png250px/cd.png",
    "iso": true,
    "name": "Democratic Republic of the Congo"
  },
  {
    "capital": "Copenhagen",
    "code": "dk",
    "continent": "Europe",
    "flag": "assets/images/flags/dk.svg",
    "flag_250px": "assets/images/png250px/dk.png",
    "iso": true,
    "name": "Denmark"
  },
  {
    "code": "dg",
    "flag": "assets/images/flags/dg.svg",
    "flag_250px": "assets/images/png250px/dg.png",
    "iso": false,
    "name": "Diego Garcia"
  },
  {
    "capital": "Djibouti",
    "code": "dj",
    "continent": "Africa",
    "flag": "assets/images/flags/dj.svg",
    "flag_250px": "assets/images/png250px/dj.png",
    "iso": true,
    "name": "Djibouti"
  },
  {
    "capital": "Roseau",
    "code": "dm",
    "continent": "North America",
    "flag": "assets/images/flags/dm.svg",
    "flag_250px": "assets/images/png250px/dm.png",
    "iso": true,
    "name": "Dominica"
  },
  {
    "capital": "Santo Domingo",
    "code": "do",
    "continent": "North America",
    "flag": "assets/images/flags/do.svg",
    "flag_250px": "assets/images/png250px/do.png",
    "iso": true,
    "name": "Dominican Republic"
  },
  {
    "capital": "Quito",
    "code": "ec",
    "continent": "South America",
    "flag": "assets/images/flags/ec.svg",
    "flag_250px": "assets/images/png250px/ec.png",
    "iso": true,
    "name": "Ecuador"
  },
  {
    "capital": "Cairo",
    "code": "eg",
    "continent": "Africa",
    "flag": "assets/images/flags/eg.svg",
    "flag_250px": "assets/images/png250px/eg.png",
    "iso": true,
    "name": "Egypt"
  },
  {
    "capital": "San Salvador",
    "code": "sv",
    "continent": "North America",
    "flag": "assets/images/flags/sv.svg",
    "flag_250px": "assets/images/png250px/sv.png",
    "iso": true,
    "name": "El Salvador"
  },
  {
    "capital": "London",
    "code": "gb-eng",
    "continent": "Europe",
    "flag": "assets/images/flags/gb-eng.svg",
    "flag_250px": "assets/images/png250px/gb-eng.png",
    "iso": false,
    "name": "England"
  },
  {
    "capital": "Malabo",
    "code": "gq",
    "continent": "Africa",
    "flag": "assets/images/flags/gq.svg",
    "flag_250px": "assets/images/png250px/gq.png",
    "iso": true,
    "name": "Equatorial Guinea"
  },
  {
    "capital": "Asmara",
    "code": "er",
    "continent": "Africa",
    "flag": "assets/images/flags/er.svg",
    "flag_250px": "assets/images/png250px/er.png",
    "iso": true,
    "name": "Eritrea"
  },
  {
    "capital": "Tallinn",
    "code": "ee",
    "continent": "Europe",
    "flag": "assets/images/flags/ee.svg",
    "flag_250px": "assets/images/png250px/ee.png",
    "iso": true,
    "name": "Estonia"
  },
  {
    "capital": "Lobamba, Mbabane",
    "code": "sz",
    "continent": "Africa",
    "flag": "assets/images/flags/sz.svg",
    "flag_250px": "assets/images/png250px/sz.png",
    "iso": true,
    "name": "Eswatini"
  },
  {
    "capital": "Addis Ababa",
    "code": "et",
    "continent": "Africa",
    "flag": "assets/images/flags/et.svg",
    "flag_250px": "assets/images/png250px/et.png",
    "iso": true,
    "name": "Ethiopia"
  },
  {
    "code": "eu",
    "flag": "assets/images/flags/eu.svg",
    "flag_250px": "assets/images/png250px/eu.png",
    "iso": false,
    "name": "Europe"
  },
  {
    "capital": "Stanley",
    "code": "fk",
    "continent": "South America",
    "flag": "assets/images/flags/fk.svg",
    "flag_250px": "assets/images/png250px/fk.png",
    "iso": true,
    "name": "Falkland Islands"
  },
  {
    "capital": "Tórshavn",
    "code": "fo",
    "continent": "Europe",
    "flag": "assets/images/flags/fo.svg",
    "flag_250px": "assets/images/png250px/fo.png",
    "iso": true,
    "name": "Faroe Islands"
  },
  {
    "capital": "Palikir",
    "code": "fm",
    "continent": "Oceania",
    "flag": "assets/images/flags/fm.svg",
    "flag_250px": "assets/images/png250px/fm.png",
    "iso": true,
    "name": "Federated States of Micronesia"
  },
  {
    "capital": "Suva",
    "code": "fj",
    "continent": "Oceania",
    "flag": "assets/images/flags/fj.svg",
    "flag_250px": "assets/images/png250px/fj.png",
    "iso": true,
    "name": "Fiji"
  },
  {
    "capital": "Helsinki",
    "code": "fi",
    "continent": "Europe",
    "flag": "assets/images/flags/fi.svg",
    "flag_250px": "assets/images/png250px/fi.png",
    "iso": true,
    "name": "Finland"
  },
  {
    "capital": "Paris",
    "code": "fr",
    "continent": "Europe",
    "flag": "assets/images/flags/fr.svg",
    "flag_250px": "assets/images/png250px/fr.png",
    "iso": true,
    "name": "France"
  },
  {
    "capital": "Cayenne",
    "code": "gf",
    "continent": "South America",
    "flag": "assets/images/flags/gf.svg",
    "flag_250px": "assets/images/png250px/gf.png",
    "iso": true,
    "name": "French Guiana"
  },
  {
    "capital": "Papeete",
    "code": "pf",
    "continent": "Oceania",
    "flag": "assets/images/flags/pf.svg",
    "flag_250px": "assets/images/png250px/pf.png",
    "iso": true,
    "name": "French Polynesia"
  },
  {
    "capital": "Saint-Pierre, Réunion",
    "code": "tf",
    "continent": "Africa",
    "flag": "assets/images/flags/tf.svg",
    "flag_250px": "assets/images/png250px/tf.png",
    "iso": true,
    "name": "French Southern Territories"
  },
  {
    "capital": "Libreville",
    "code": "ga",
    "continent": "Africa",
    "flag": "assets/images/flags/ga.svg",
    "flag_250px": "assets/images/png250px/ga.png",
    "iso": true,
    "name": "Gabon"
  },
  {
    "code": "es-ga",
    "flag": "assets/images/flags/es-ga.svg",
    "flag_250px": "assets/images/png250px/es-ga.png",
    "iso": false,
    "name": "Galicia"
  },
  {
    "capital": "Banjul",
    "code": "gm",
    "continent": "Africa",
    "flag": "assets/images/flags/gm.svg",
    "flag_250px": "assets/images/png250px/gm.png",
    "iso": true,
    "name": "Gambia"
  },
  {
    "capital": "Tbilisi",
    "code": "ge",
    "continent": "Asia",
    "flag": "assets/images/flags/ge.svg",
    "flag_250px": "assets/images/png250px/ge.png",
    "iso": true,
    "name": "Georgia"
  },
  {
    "capital": "Berlin",
    "code": "de",
    "continent": "Europe",
    "flag": "assets/images/flags/de.svg",
    "flag_250px": "assets/images/png250px/de.png",
    "iso": true,
    "name": "Germany"
  },
  {
    "capital": "Accra",
    "code": "gh",
    "continent": "Africa",
    "flag": "assets/images/flags/gh.svg",
    "flag_250px": "assets/images/png250px/gh.png",
    "iso": true,
    "name": "Ghana"
  },
  {
    "capital": "Gibraltar",
    "code": "gi",
    "continent": "Europe",
    "flag": "assets/images/flags/gi.svg",
    "flag_250px": "assets/images/png250px/gi.png",
    "iso": true,
    "name": "Gibraltar"
  },
  {
    "capital": "Athens",
    "code": "gr",
    "continent": "Europe",
    "flag": "assets/images/flags/gr.svg",
    "flag_250px": "assets/images/png250px/gr.png",
    "iso": true,
    "name": "Greece"
  },
  {
    "capital": "Nuuk",
    "code": "gl",
    "continent": "North America",
    "flag": "assets/images/flags/gl.svg",
    "flag_250px": "assets/images/png250px/gl.png",
    "iso": true,
    "name": "Greenland"
  },
  {
    "capital": "St. George's",
    "code": "gd",
    "continent": "North America",
    "flag": "assets/images/flags/gd.svg",
    "flag_250px": "assets/images/png250px/gd.png",
    "iso": true,
    "name": "Grenada"
  },
  {
    "capital": "Basse-Terre",
    "code": "gp",
    "continent": "North America",
    "flag": "assets/images/flags/gp.svg",
    "flag_250px": "assets/images/png250px/gp.png",
    "iso": true,
    "name": "Guadeloupe"
  },
  {
    "capital": "Hagåtña",
    "code": "gu",
    "continent": "Oceania",
    "flag": "assets/images/flags/gu.svg",
    "flag_250px": "assets/images/png250px/gu.png",
    "iso": true,
    "name": "Guam"
  },
  {
    "capital": "Guatemala City",
    "code": "gt",
    "continent": "North America",
    "flag": "assets/images/flags/gt.svg",
    "flag_250px": "assets/images/png250px/gt.png",
    "iso": true,
    "name": "Guatemala"
  },
  {
    "capital": "Saint Peter Port",
    "code": "gg",
    "continent": "Europe",
    "flag": "assets/images/flags/gg.svg",
    "flag_250px": "assets/images/png250px/gg.png",
    "iso": true,
    "name": "Guernsey"
  },
  {
    "capital": "Conakry",
    "code": "gn",
    "continent": "Africa",
    "flag": "assets/images/flags/gn.svg",
    "flag_250px": "assets/images/png250px/gn.png",
    "iso": true,
    "name": "Guinea"
  },
  {
    "capital": "Bissau",
    "code": "gw",
    "continent": "Africa",
    "flag": "assets/images/flags/gw.svg",
    "flag_250px": "assets/images/png250px/gw.png",
    "iso": true,
    "name": "Guinea-Bissau"
  },
  {
    "capital": "Georgetown",
    "code": "gy",
    "continent": "South America",
    "flag": "assets/images/flags/gy.svg",
    "flag_250px": "assets/images/png250px/gy.png",
    "iso": true,
    "name": "Guyana"
  },
  {
    "capital": "Port-au-Prince",
    "code": "ht",
    "continent": "North America",
    "flag": "assets/images/flags/ht.svg",
    "flag_250px": "assets/images/png250px/ht.png",
    "iso": true,
    "name": "Haiti"
  },
  {
    "code": "hm",
    "flag": "assets/images/flags/hm.svg",
    "flag_250px": "assets/images/png250px/hm.png",
    "iso": true,
    "name": "Heard Island and McDonald Islands"
  },
  {
    "capital": "Vatican City",
    "code": "va",
    "continent": "Europe",
    "flag": "assets/images/flags/va.svg",
    "flag_250px": "assets/images/png250px/va.png",
    "iso": true,
    "name": "Holy See"
  },
  {
    "capital": "Tegucigalpa",
    "code": "hn",
    "continent": "North America",
    "flag": "assets/images/flags/hn.svg",
    "flag_250px": "assets/images/png250px/hn.png",
    "iso": true,
    "name": "Honduras"
  },
  {
    "capital": "Hong Kong",
    "code": "hk",
    "continent": "Asia",
    "flag": "assets/images/flags/hk.svg",
    "flag_250px": "assets/images/png250px/hk.png",
    "iso": true,
    "name": "Hong Kong"
  },
  {
    "capital": "Budapest",
    "code": "hu",
    "continent": "Europe",
    "flag": "assets/images/flags/hu.svg",
    "flag_250px": "assets/images/png250px/hu.png",
    "iso": true,
    "name": "Hungary"
  },
  {
    "capital": "Reykjavik",
    "code": "is",
    "continent": "Europe",
    "flag": "assets/images/flags/is.svg",
    "flag_250px": "assets/images/png250px/is.png",
    "iso": true,
    "name": "Iceland"
  },
  {
    "capital": "New Delhi",
    "code": "in",
    "continent": "Asia",
    "flag": "assets/images/flags/in.svg",
    "flag_250px": "assets/images/png250px/in.png",
    "iso": true,
    "name": "India"
  },
  {
    "capital": "Jakarta",
    "code": "id",
    "continent": "Asia",
    "flag": "assets/images/flags/id.svg",
    "flag_250px": "assets/images/png250px/id.png",
    "iso": true,
    "name": "Indonesia"
  },
  {
    "capital": "Tehran",
    "code": "ir",
    "continent": "Asia",
    "flag": "assets/images/flags/ir.svg",
    "flag_250px": "assets/images/png250px/ir.png",
    "iso": true,
    "name": "Iran"
  },
  {
    "capital": "Baghdad",
    "code": "iq",
    "continent": "Asia",
    "flag": "assets/images/flags/iq.svg",
    "flag_250px": "assets/images/png250px/iq.png",
    "iso": true,
    "name": "Iraq"
  },
  {
    "capital": "Dublin",
    "code": "ie",
    "continent": "Europe",
    "flag": "assets/images/flags/ie.svg",
    "flag_250px": "assets/images/png250px/ie.png",
    "iso": true,
    "name": "Ireland"
  },
  {
    "capital": "Douglas",
    "code": "im",
    "continent": "Europe",
    "flag": "assets/images/flags/im.svg",
    "flag_250px": "assets/images/png250px/im.png",
    "iso": true,
    "name": "Isle of Man"
  },
  {
    "capital": "Jerusalem",
    "code": "il",
    "continent": "Asia",
    "flag": "assets/images/flags/il.svg",
    "flag_250px": "assets/images/png250px/il.png",
    "iso": true,
    "name": "Israel"
  },
  {
    "capital": "Rome",
    "code": "it",
    "continent": "Europe",
    "flag": "assets/images/flags/it.svg",
    "flag_250px": "assets/images/png250px/it.png",
    "iso": true,
    "name": "Italy"
  },
  {
    "capital": "Kingston",
    "code": "jm",
    "continent": "North America",
    "flag": "assets/images/flags/jm.svg",
    "flag_250px": "assets/images/png250px/jm.png",
    "iso": true,
    "name": "Jamaica"
  },
  {
    "capital": "Tokyo",
    "code": "jp",
    "continent": "Asia",
    "flag": "assets/images/flags/jp.svg",
    "flag_250px": "assets/images/png250px/jp.png",
    "iso": true,
    "name": "Japan"
  },
  {
    "capital": "Saint Helier",
    "code": "je",
    "continent": "Europe",
    "flag": "assets/images/flags/je.svg",
    "flag_250px": "assets/images/png250px/je.png",
    "iso": true,
    "name": "Jersey"
  },
  {
    "capital": "Amman",
    "code": "jo",
    "continent": "Asia",
    "flag": "assets/images/flags/jo.svg",
    "flag_250px": "assets/images/png250px/jo.png",
    "iso": true,
    "name": "Jordan"
  },
  {
    "capital": "Astana",
    "code": "kz",
    "continent": "Asia",
    "flag": "assets/images/flags/kz.svg",
    "flag_250px": "assets/images/png250px/kz.png",
    "iso": true,
    "name": "Kazakhstan"
  },
  {
    "capital": "Nairobi",
    "code": "ke",
    "continent": "Africa",
    "flag": "assets/images/flags/ke.svg",
    "flag_250px": "assets/images/png250px/ke.png",
    "iso": true,
    "name": "Kenya"
  },
  {
    "capital": "South Tarawa",
    "code": "ki",
    "continent": "Oceania",
    "flag": "assets/images/flags/ki.svg",
    "flag_250px": "assets/images/png250px/ki.png",
    "iso": true,
    "name": "Kiribati"
  },
  {
    "capital": "Pristina",
    "code": "xk",
    "continent": "Europe",
    "flag": "assets/images/flags/xk.svg",
    "flag_250px": "assets/images/png250px/xk.png",
    "iso": false,
    "name": "Kosovo"
  },
  {
    "capital": "Kuwait City",
    "code": "kw",
    "continent": "Asia",
    "flag": "assets/images/flags/kw.svg",
    "flag_250px": "assets/images/png250px/kw.png",
    "iso": true,
    "name": "Kuwait"
  },
  {
    "capital": "Bishkek",
    "code": "kg",
    "continent": "Asia",
    "flag": "assets/images/flags/kg.svg",
    "flag_250px": "assets/images/png250px/kg.png",
    "iso": true,
    "name": "Kyrgyzstan"
  },
  {
    "capital": "Vientiane",
    "code": "la",
    "continent": "Asia",
    "flag": "assets/images/flags/la.svg",
    "flag_250px": "assets/images/png250px/la.png",
    "iso": true,
    "name": "Laos"
  },
  {
    "capital": "Riga",
    "code": "lv",
    "continent": "Europe",
    "flag": "assets/images/flags/lv.svg",
    "flag_250px": "assets/images/png250px/lv.png",
    "iso": true,
    "name": "Latvia"
  },
  {
    "capital": "Beirut",
    "code": "lb",
    "continent": "Asia",
    "flag": "assets/images/flags/lb.svg",
    "flag_250px": "assets/images/png250px/lb.png",
    "iso": true,
    "name": "Lebanon"
  },
  {
    "capital": "Maseru",
    "code": "ls",
    "continent": "Africa",
    "flag": "assets/images/flags/ls.svg",
    "flag_250px": "assets/images/png250px/ls.png",
    "iso": true,
    "name": "Lesotho"
  },
  {
    "capital": "Monrovia",
    "code": "lr",
    "continent": "Africa",
    "flag": "assets/images/flags/lr.svg",
    "flag_250px": "assets/images/png250px/lr.png",
    "iso": true,
    "name": "Liberia"
  },
  {
    "capital": "Tripoli",
    "code": "ly",
    "continent": "Africa",
    "flag": "assets/images/flags/ly.svg",
    "flag_250px": "assets/images/png250px/ly.png",
    "iso": true,
    "name": "Libya"
  },
  {
    "capital": "Vaduz",
    "code": "li",
    "continent": "Europe",
    "flag": "assets/images/flags/li.svg",
    "flag_250px": "assets/images/png250px/li.png",
    "iso": true,
    "name": "Liechtenstein"
  },
  {
    "capital": "Vilnius",
    "code": "lt",
    "continent": "Europe",
    "flag": "assets/images/flags/lt.svg",
    "flag_250px": "assets/images/png250px/lt.png",
    "iso": true,
    "name": "Lithuania"
  },
  {
    "capital": "Luxembourg City",
    "code": "lu",
    "continent": "Europe",
    "flag": "assets/images/flags/lu.svg",
    "flag_250px": "assets/images/png250px/lu.png",
    "iso": true,
    "name": "Luxembourg"
  },
  {
    "capital": "Macau",
    "code": "mo",
    "continent": "Asia",
    "flag": "assets/images/flags/mo.svg",
    "flag_250px": "assets/images/png250px/mo.png",
    "iso": true,
    "name": "Macau"
  },
  {
    "capital": "Antananarivo",
    "code": "mg",
    "continent": "Africa",
    "flag": "assets/images/flags/mg.svg",
    "flag_250px": "assets/images/png250px/mg.png",
    "iso": true,
    "name": "Madagascar"
  },
  {
    "capital": "Lilongwe",
    "code": "mw",
    "continent": "Africa",
    "flag": "assets/images/flags/mw.svg",
    "flag_250px": "assets/images/png250px/mw.png",
    "iso": true,
    "name": "Malawi"
  },
  {
    "capital": "Kuala Lumpur",
    "code": "my",
    "continent": "Asia",
    "flag": "assets/images/flags/my.svg",
    "flag_250px": "assets/images/png250px/my.png",
    "iso": true,
    "name": "Malaysia"
  },
  {
    "capital": "Malé",
    "code": "mv",
    "continent": "Asia",
    "flag": "assets/images/flags/mv.svg",
    "flag_250px": "assets/images/png250px/mv.png",
    "iso": true,
    "name": "Maldives"
  },
  {
    "capital": "Bamako",
    "code": "ml",
    "continent": "Africa",
    "flag": "assets/images/flags/ml.svg",
    "flag_250px": "assets/images/png250px/ml.png",
    "iso": true,
    "name": "Mali"
  },
  {
    "capital": "Valletta",
    "code": "mt",
    "continent": "Europe",
    "flag": "assets/images/flags/mt.svg",
    "flag_250px": "assets/images/png250px/mt.png",
    "iso": true,
    "name": "Malta"
  },
  {
    "capital": "Majuro",
    "code": "mh",
    "continent": "Oceania",
    "flag": "assets/images/flags/mh.svg",
    "flag_250px": "assets/images/png250px/mh.png",
    "iso": true,
    "name": "Marshall Islands"
  },
  {
    "capital": "Fort-de-France",
    "code": "mq",
    "continent": "North America",
    "flag": "assets/images/flags/mq.svg",
    "flag_250px": "assets/images/png250px/mq.png",
    "iso": true,
    "name": "Martinique"
  },
  {
    "capital": "Nouakchott",
    "code": "mr",
    "continent": "Africa",
    "flag": "assets/images/flags/mr.svg",
    "flag_250px": "assets/images/png250px/mr.png",
    "iso": true,
    "name": "Mauritania"
  },
  {
    "capital": "Port Louis",
    "code": "mu",
    "continent": "Africa",
    "flag": "assets/images/flags/mu.svg",
    "flag_250px": "assets/images/png250px/mu.png",
    "iso": true,
    "name": "Mauritius"
  },
  {
    "capital": "Mamoudzou",
    "code": "yt",
    "continent": "Africa",
    "flag": "assets/images/flags/yt.svg",
    "flag_250px": "assets/images/png250px/yt.png",
    "iso": true,
    "name": "Mayotte"
  },
  {
    "capital": "Mexico City",
    "code": "mx",
    "continent": "North America",
    "flag": "assets/images/flags/mx.svg",
    "flag_250px": "assets/images/png250px/mx.png",
    "iso": true,
    "name": "Mexico"
  },
  {
    "capital": "Chișinău",
    "code": "md",
    "continent": "Europe",
    "flag": "assets/images/flags/md.svg",
    "flag_250px": "assets/images/png250px/md.png",
    "iso": true,
    "name": "Moldova"
  },
  {
    "capital": "Monaco",
    "code": "mc",
    "continent": "Europe",
    "flag": "assets/images/flags/mc.svg",
    "flag_250px": "assets/images/png250px/mc.png",
    "iso": true,
    "name": "Monaco"
  },
  {
    "capital": "Ulaanbaatar",
    "code": "mn",
    "continent": "Asia",
    "flag": "assets/images/flags/mn.svg",
    "flag_250px": "assets/images/png250px/mn.png",
    "iso": true,
    "name": "Mongolia"
  },
  {
    "capital": "Podgorica",
    "code": "me",
    "continent": "Europe",
    "flag": "assets/images/flags/me.svg",
    "flag_250px": "assets/images/png250px/me.png",
    "iso": true,
    "name": "Montenegro"
  },
  {
    "capital": "Little Bay, Brades, Plymouth",
    "code": "ms",
    "continent": "North America",
    "flag": "assets/images/flags/ms.svg",
    "flag_250px": "assets/images/png250px/ms.png",
    "iso": true,
    "name": "Montserrat"
  },
  {
    "capital": "Rabat",
    "code": "ma",
    "continent": "Africa",
    "flag": "assets/images/flags/ma.svg",
    "flag_250px": "assets/images/png250px/ma.png",
    "iso": true,
    "name": "Morocco"
  },
  {
    "capital": "Maputo",
    "code": "mz",
    "continent": "Africa",
    "flag": "assets/images/flags/mz.svg",
    "flag_250px": "assets/images/png250px/mz.png",
    "iso": true,
    "name": "Mozambique"
  },
  {
    "capital": "Naypyidaw",
    "code": "mm",
    "continent": "Asia",
    "flag": "assets/images/flags/mm.svg",
    "flag_250px": "assets/images/png250px/mm.png",
    "iso": true,
    "name": "Myanmar"
  },
  {
    "capital": "Windhoek",
    "code": "na",
    "continent": "Africa",
    "flag": "assets/images/flags/na.svg",
    "flag_250px": "assets/images/png250px/na.png",
    "iso": true,
    "name": "Namibia"
  },
  {
    "capital": "Yaren District",
    "code": "nr",
    "continent": "Oceania",
    "flag": "assets/images/flags/nr.svg",
    "flag_250px": "assets/images/png250px/nr.png",
    "iso": true,
    "name": "Nauru"
  },
  {
    "capital": "Kathmandu",
    "code": "np",
    "continent": "Asia",
    "flag": "assets/images/flags/np.svg",
    "flag_250px": "assets/images/png250px/np.png",
    "iso": true,
    "name": "Nepal"
  },
  {
    "capital": "Amsterdam",
    "code": "nl",
    "continent": "Europe",
    "flag": "assets/images/flags/nl.svg",
    "flag_250px": "assets/images/png250px/nl.png",
    "iso": true,
    "name": "Netherlands"
  },
  {
    "capital": "Nouméa",
    "code": "nc",
    "continent": "Oceania",
    "flag": "assets/images/flags/nc.svg",
    "flag_250px": "assets/images/png250px/nc.png",
    "iso": true,
    "name": "New Caledonia"
  },
  {
    "capital": "Wellington",
    "code": "nz",
    "continent": "Oceania",
    "flag": "assets/images/flags/nz.svg",
    "flag_250px": "assets/images/png250px/nz.png",
    "iso": true,
    "name": "New Zealand"
  },
  {
    "capital": "Managua",
    "code": "ni",
    "continent": "North America",
    "flag": "assets/images/flags/ni.svg",
    "flag_250px": "assets/images/png250px/ni.png",
    "iso": true,
    "name": "Nicaragua"
  },
  {
    "capital": "Niamey",
    "code": "ne",
    "continent": "Africa",
    "flag": "assets/images/flags/ne.svg",
    "flag_250px": "assets/images/png250px/ne.png",
    "iso": true,
    "name": "Niger"
  },
  {
    "capital": "Abuja",
    "code": "ng",
    "continent": "Africa",
    "flag": "assets/images/flags/ng.svg",
    "flag_250px": "assets/images/png250px/ng.png",
    "iso": true,
    "name": "Nigeria"
  },
  {
    "capital": "Alofi",
    "code": "nu",
    "continent": "Oceania",
    "flag": "assets/images/flags/nu.svg",
    "flag_250px": "assets/images/png250px/nu.png",
    "iso": true,
    "name": "Niue"
  },
  {
    "capital": "Kingston",
    "code": "nf",
    "continent": "Oceania",
    "flag": "assets/images/flags/nf.svg",
    "flag_250px": "assets/images/png250px/nf.png",
    "iso": true,
    "name": "Norfolk Island"
  },
  {
    "capital": "Pyongyang",
    "code": "kp",
    "continent": "Asia",
    "flag": "assets/images/flags/kp.svg",
    "flag_250px": "assets/images/png250px/kp.png",
    "iso": true,
    "name": "North Korea"
  },
  {
    "capital": "Skopje",
    "code": "mk",
    "continent": "Europe",
    "flag": "assets/images/flags/mk.svg",
    "flag_250px": "assets/images/png250px/mk.png",
    "iso": true,
    "name": "North Macedonia"
  },
  {
    "capital": "Belfast",
    "code": "gb-nir",
    "continent": "Europe",
    "flag": "assets/images/flags/gb-nir.svg",
    "flag_250px": "assets/images/png250px/gb-nir.png",
    "iso": false,
    "name": "Northern Ireland"
  },
  {
    "capital": "Saipan",
    "code": "mp",
    "continent": "Oceania",
    "flag": "assets/images/flags/mp.svg",
    "flag_250px": "assets/images/png250px/mp.png",
    "iso": true,
    "name": "Northern Mariana Islands"
  },
  {
    "capital": "Oslo",
    "code": "no",
    "continent": "Europe",
    "flag": "assets/images/flags/no.svg",
    "flag_250px": "assets/images/png250px/no.png",
    "iso": true,
    "name": "Norway"
  },
  {
    "capital": "Muscat",
    "code": "om",
    "continent": "Asia",
    "flag": "assets/images/flags/om.svg",
    "flag_250px": "assets/images/png250px/om.png",
    "iso": true,
    "name": "Oman"
  },
  {
    "capital": "Islamabad",
    "code": "pk",
    "continent": "Asia",
    "flag": "assets/images/flags/pk.svg",
    "flag_250px": "assets/images/png250px/pk.png",
    "iso": true,
    "name": "Pakistan"
  },
  {
    "capital": "Ngerulmud",
    "code": "pw",
    "continent": "Oceania",
    "flag": "assets/images/flags/pw.svg",
    "flag_250px": "assets/images/png250px/pw.png",
    "iso": true,
    "name": "Palau"
  },
  {
    "capital": "Panama City",
    "code": "pa",
    "continent": "North America",
    "flag": "assets/images/flags/pa.svg",
    "flag_250px": "assets/images/png250px/pa.png",
    "iso": true,
    "name": "Panama"
  },
  {
    "capital": "Port Moresby",
    "code": "pg",
    "continent": "Oceania",
    "flag": "assets/images/flags/pg.svg",
    "flag_250px": "assets/images/png250px/pg.png",
    "iso": true,
    "name": "Papua New Guinea"
  },
  {
    "capital": "Asunción",
    "code": "py",
    "continent": "South America",
    "flag": "assets/images/flags/py.svg",
    "flag_250px": "assets/images/png250px/py.png",
    "iso": true,
    "name": "Paraguay"
  },
  {
    "capital": "Lima",
    "code": "pe",
    "continent": "South America",
    "flag": "assets/images/flags/pe.svg",
    "flag_250px": "assets/images/png250px/pe.png",
    "iso": true,
    "name": "Peru"
  },
  {
    "capital": "Manila",
    "code": "ph",
    "continent": "Asia",
    "flag": "assets/images/flags/ph.svg",
    "flag_250px": "assets/images/png250px/ph.png",
    "iso": true,
    "name": "Philippines"
  },
  {
    "capital": "Adamstown",
    "code": "pn",
    "continent": "Oceania",
    "flag": "assets/images/flags/pn.svg",
    "flag_250px": "assets/images/png250px/pn.png",
    "iso": true,
    "name": "Pitcairn"
  },
  {
    "capital": "Warsaw",
    "code": "pl",
    "continent": "Europe",
    "flag": "assets/images/flags/pl.svg",
    "flag_250px": "assets/images/png250px/pl.png",
    "iso": true,
    "name": "Poland"
  },
  {
    "capital": "Lisbon",
    "code": "pt",
    "continent": "Europe",
    "flag": "assets/images/flags/pt.svg",
    "flag_250px": "assets/images/png250px/pt.png",
    "iso": true,
    "name": "Portugal"
  },
  {
    "capital": "San Juan",
    "code": "pr",
    "continent": "North America",
    "flag": "assets/images/flags/pr.svg",
    "flag_250px": "assets/images/png250px/pr.png",
    "iso": true,
    "name": "Puerto Rico"
  },
  {
    "capital": "Doha",
    "code": "qa",
    "continent": "Asia",
    "flag": "assets/images/flags/qa.svg",
    "flag_250px": "assets/images/png250px/qa.png",
    "iso": true,
    "name": "Qatar"
  },
  {
    "capital": "Brazzaville",
    "code": "cg",
    "continent": "Africa",
    "flag": "assets/images/flags/cg.svg",
    "flag_250px": "assets/images/png250px/cg.png",
    "iso": true,
    "name": "Republic of the Congo"
  },
  {
    "capital": "Bucharest",
    "code": "ro",
    "continent": "Europe",
    "flag": "assets/images/flags/ro.svg",
    "flag_250px": "assets/images/png250px/ro.png",
    "iso": true,
    "name": "Romania"
  },
  {
    "capital": "Moscow",
    "code": "ru",
    "continent": "Europe",
    "flag": "assets/images/flags/ru.svg",
    "flag_250px": "assets/images/png250px/ru.png",
    "iso": true,
    "name": "Russia"
  },
  {
    "capital": "Kigali",
    "code": "rw",
    "continent": "Africa",
    "flag": "assets/images/flags/rw.svg",
    "flag_250px": "assets/images/png250px/rw.png",
    "iso": true,
    "name": "Rwanda"
  },
  {
    "capital": "Saint-Denis",
    "code": "re",
    "continent": "Africa",
    "flag": "assets/images/flags/re.svg",
    "flag_250px": "assets/images/png250px/re.png",
    "iso": true,
    "name": "Réunion"
  },
  {
    "capital": "Gustavia",
    "code": "bl",
    "continent": "North America",
    "flag": "assets/images/flags/bl.svg",
    "flag_250px": "assets/images/png250px/bl.png",
    "iso": true,
    "name": "Saint Barthélemy"
  },
  {
    "capital": "Jamestown",
    "code": "sh",
    "continent": "Africa",
    "flag": "assets/images/flags/sh.svg",
    "flag_250px": "assets/images/png250px/sh.png",
    "iso": true,
    "name": "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    "capital": "Basseterre",
    "code": "kn",
    "continent": "North America",
    "flag": "assets/images/flags/kn.svg",
    "flag_250px": "assets/images/png250px/kn.png",
    "iso": true,
    "name": "Saint Kitts and Nevis"
  },
  {
    "capital": "Castries",
    "code": "lc",
    "continent": "North America",
    "flag": "assets/images/flags/lc.svg",
    "flag_250px": "assets/images/png250px/lc.png",
    "iso": true,
    "name": "Saint Lucia"
  },
  {
    "capital": "Marigot",
    "code": "mf",
    "continent": "North America",
    "flag": "assets/images/flags/mf.svg",
    "flag_250px": "assets/images/png250px/mf.png",
    "iso": true,
    "name": "Saint Martin"
  },
  {
    "capital": "Saint-Pierre",
    "code": "pm",
    "continent": "North America",
    "flag": "assets/images/flags/pm.svg",
    "flag_250px": "assets/images/png250px/pm.png",
    "iso": true,
    "name": "Saint Pierre and Miquelon"
  },
  {
    "capital": "Kingstown",
    "code": "vc",
    "continent": "North America",
    "flag": "assets/images/flags/vc.svg",
    "flag_250px": "assets/images/png250px/vc.png",
    "iso": true,
    "name": "Saint Vincent and the Grenadines"
  },
  {
    "capital": "Apia",
    "code": "ws",
    "continent": "Oceania",
    "flag": "assets/images/flags/ws.svg",
    "flag_250px": "assets/images/png250px/ws.png",
    "iso": true,
    "name": "Samoa"
  },
  {
    "capital": "San Marino",
    "code": "sm",
    "continent": "Europe",
    "flag": "assets/images/flags/sm.svg",
    "flag_250px": "assets/images/png250px/sm.png",
    "iso": true,
    "name": "San Marino"
  },
  {
    "capital": "São Tomé",
    "code": "st",
    "continent": "Africa",
    "flag": "assets/images/flags/st.svg",
    "flag_250px": "assets/images/png250px/st.png",
    "iso": true,
    "name": "Sao Tome and Principe"
  },
  {
    "capital": "Riyadh",
    "code": "sa",
    "continent": "Asia",
    "flag": "assets/images/flags/sa.svg",
    "flag_250px": "assets/images/png250px/sa.png",
    "iso": true,
    "name": "Saudi Arabia"
  },
  {
    "capital": "Edinburgh",
    "code": "gb-sct",
    "continent": "Europe",
    "flag": "assets/images/flags/gb-sct.svg",
    "flag_250px": "assets/images/png250px/gb-sct.png",
    "iso": false,
    "name": "Scotland"
  },
  {
    "capital": "Dakar",
    "code": "sn",
    "continent": "Africa",
    "flag": "assets/images/flags/sn.svg",
    "flag_250px": "assets/images/png250px/sn.png",
    "iso": true,
    "name": "Senegal"
  },
  {
    "capital": "Belgrade",
    "code": "rs",
    "continent": "Europe",
    "flag": "assets/images/flags/rs.svg",
    "flag_250px": "assets/images/png250px/rs.png",
    "iso": true,
    "name": "Serbia"
  },
  {
    "capital": "Victoria",
    "code": "sc",
    "continent": "Africa",
    "flag": "assets/images/flags/sc.svg",
    "flag_250px": "assets/images/png250px/sc.png",
    "iso": true,
    "name": "Seychelles"
  },
  {
    "capital": "Freetown",
    "code": "sl",
    "continent": "Africa",
    "flag": "assets/images/flags/sl.svg",
    "flag_250px": "assets/images/png250px/sl.png",
    "iso": true,
    "name": "Sierra Leone"
  },
  {
    "capital": "Singapore",
    "code": "sg",
    "continent": "Asia",
    "flag": "assets/images/flags/sg.svg",
    "flag_250px": "assets/images/png250px/sg.png",
    "iso": true,
    "name": "Singapore"
  },
  {
    "capital": "Philipsburg",
    "code": "sx",
    "continent": "North America",
    "flag": "assets/images/flags/sx.svg",
    "flag_250px": "assets/images/png250px/sx.png",
    "iso": true,
    "name": "Sint Maarten"
  },
  {
    "capital": "Bratislava",
    "code": "sk",
    "continent": "Europe",
    "flag": "assets/images/flags/sk.svg",
    "flag_250px": "assets/images/png250px/sk.png",
    "iso": true,
    "name": "Slovakia"
  },
  {
    "capital": "Ljubljana",
    "code": "si",
    "continent": "Europe",
    "flag": "assets/images/flags/si.svg",
    "flag_250px": "assets/images/png250px/si.png",
    "iso": true,
    "name": "Slovenia"
  },
  {
    "capital": "Honiara",
    "code": "sb",
    "continent": "Oceania",
    "flag": "assets/images/flags/sb.svg",
    "flag_250px": "assets/images/png250px/sb.png",
    "iso": true,
    "name": "Solomon Islands"
  },
  {
    "capital": "Mogadishu",
    "code": "so",
    "continent": "Africa",
    "flag": "assets/images/flags/so.svg",
    "flag_250px": "assets/images/png250px/so.png",
    "iso": true,
    "name": "Somalia"
  },
  {
    "capital": "Pretoria",
    "code": "za",
    "continent": "Africa",
    "flag": "assets/images/flags/za.svg",
    "flag_250px": "assets/images/png250px/za.png",
    "iso": true,
    "name": "South Africa"
  },
  {
    "capital": "King Edward Point",
    "code": "gs",
    "continent": "Antarctica",
    "flag": "assets/images/flags/gs.svg",
    "flag_250px": "assets/images/png250px/gs.png",
    "iso": true,
    "name": "South Georgia and the South Sandwich Islands"
  },
  {
    "capital": "Seoul",
    "code": "kr",
    "continent": "Asia",
    "flag": "assets/images/flags/kr.svg",
    "flag_250px": "assets/images/png250px/kr.png",
    "iso": true,
    "name": "South Korea"
  },
  {
    "capital": "Juba",
    "code": "ss",
    "continent": "Africa",
    "flag": "assets/images/flags/ss.svg",
    "flag_250px": "assets/images/png250px/ss.png",
    "iso": true,
    "name": "South Sudan"
  },
  {
    "capital": "Madrid",
    "code": "es",
    "continent": "Europe",
    "flag": "assets/images/flags/es.svg",
    "flag_250px": "assets/images/png250px/es.png",
    "iso": true,
    "name": "Spain"
  },
  {
    "capital": "Sri Jayawardenepura Kotte, Colombo",
    "code": "lk",
    "continent": "Asia",
    "flag": "assets/images/flags/lk.svg",
    "flag_250px": "assets/images/png250px/lk.png",
    "iso": true,
    "name": "Sri Lanka"
  },
  {
    "capital": "Ramallah",
    "code": "ps",
    "continent": "Asia",
    "flag": "assets/images/flags/ps.svg",
    "flag_250px": "assets/images/png250px/ps.png",
    "iso": true,
    "name": "State of Palestine"
  },
  {
    "capital": "Khartoum",
    "code": "sd",
    "continent": "Africa",
    "flag": "assets/images/flags/sd.svg",
    "flag_250px": "assets/images/png250px/sd.png",
    "iso": true,
    "name": "Sudan"
  },
  {
    "capital": "Paramaribo",
    "code": "sr",
    "continent": "South America",
    "flag": "assets/images/flags/sr.svg",
    "flag_250px": "assets/images/png250px/sr.png",
    "iso": true,
    "name": "Suriname"
  },
  {
    "capital": "Longyearbyen",
    "code": "sj",
    "continent": "Europe",
    "flag": "assets/images/flags/sj.svg",
    "flag_250px": "assets/images/png250px/sj.png",
    "iso": true,
    "name": "Svalbard and Jan Mayen"
  },
  {
    "capital": "Stockholm",
    "code": "se",
    "continent": "Europe",
    "flag": "assets/images/flags/se.svg",
    "flag_250px": "assets/images/png250px/se.png",
    "iso": true,
    "name": "Sweden"
  },
  {
    "capital": "Bern",
    "code": "ch",
    "continent": "Europe",
    "flag": "assets/images/flags/ch.svg",
    "flag_250px": "assets/images/png250px/ch.png",
    "iso": true,
    "name": "Switzerland"
  },
  {
    "capital": "Damascus",
    "code": "sy",
    "continent": "Asia",
    "flag": "assets/images/flags/sy.svg",
    "flag_250px": "assets/images/png250px/sy.png",
    "iso": true,
    "name": "Syria"
  },
  {
    "capital": "Taipei",
    "code": "tw",
    "continent": "Asia",
    "flag": "assets/images/flags/tw.svg",
    "flag_250px": "assets/images/png250px/tw.png",
    "iso": true,
    "name": "Taiwan"
  },
  {
    "capital": "Dushanbe",
    "code": "tj",
    "continent": "Asia",
    "flag": "assets/images/flags/tj.svg",
    "flag_250px": "assets/images/png250px/tj.png",
    "iso": true,
    "name": "Tajikistan"
  },
  {
    "capital": "Dodoma",
    "code": "tz",
    "continent": "Africa",
    "flag": "assets/images/flags/tz.svg",
    "flag_250px": "assets/images/png250px/tz.png",
    "iso": true,
    "name": "Tanzania"
  },
  {
    "capital": "Bangkok",
    "code": "th",
    "continent": "Asia",
    "flag": "assets/images/flags/th.svg",
    "flag_250px": "assets/images/png250px/th.png",
    "iso": true,
    "name": "Thailand"
  },
  {
    "capital": "Dili",
    "code": "tl",
    "continent": "Asia",
    "flag": "assets/images/flags/tl.svg",
    "flag_250px": "assets/images/png250px/tl.png",
    "iso": true,
    "name": "Timor-Leste"
  },
  {
    "capital": "Lomé",
    "code": "tg",
    "continent": "Africa",
    "flag": "assets/images/flags/tg.svg",
    "flag_250px": "assets/images/png250px/tg.png",
    "iso": true,
    "name": "Togo"
  },
  {
    "capital": "Nukunonu, Atafu,Tokelau",
    "code": "tk",
    "continent": "Oceania",
    "flag": "assets/images/flags/tk.svg",
    "flag_250px": "assets/images/png250px/tk.png",
    "iso": true,
    "name": "Tokelau"
  },
  {
    "capital": "Nukuʻalofa",
    "code": "to",
    "continent": "Oceania",
    "flag": "assets/images/flags/to.svg",
    "flag_250px": "assets/images/png250px/to.png",
    "iso": true,
    "name": "Tonga"
  },
  {
    "capital": "Port of Spain",
    "code": "tt",
    "continent": "South America",
    "flag": "assets/images/flags/tt.svg",
    "flag_250px": "assets/images/png250px/tt.png",
    "iso": true,
    "name": "Trinidad and Tobago"
  },
  {
    "code": "ta",
    "flag": "assets/images/flags/ta.svg",
    "flag_250px": "assets/images/png250px/ta.png",
    "iso": false,
    "name": "Tristan da Cunha"
  },
  {
    "capital": "Tunis",
    "code": "tn",
    "continent": "Africa",
    "flag": "assets/images/flags/tn.svg",
    "flag_250px": "assets/images/png250px/tn.png",
    "iso": true,
    "name": "Tunisia"
  },
  {
    "capital": "Ankara",
    "code": "tr",
    "continent": "Asia",
    "flag": "assets/images/flags/tr.svg",
    "flag_250px": "assets/images/png250px/tr.png",
    "iso": true,
    "name": "Turkey"
  },
  {
    "capital": "Ashgabat",
    "code": "tm",
    "continent": "Asia",
    "flag": "assets/images/flags/tm.svg",
    "flag_250px": "assets/images/png250px/tm.png",
    "iso": true,
    "name": "Turkmenistan"
  },
  {
    "capital": "Cockburn Town",
    "code": "tc",
    "continent": "North America",
    "flag": "assets/images/flags/tc.svg",
    "flag_250px": "assets/images/png250px/tc.png",
    "iso": true,
    "name": "Turks and Caicos Islands"
  },
  {
    "capital": "Funafuti",
    "code": "tv",
    "continent": "Oceania",
    "flag": "assets/images/flags/tv.svg",
    "flag_250px": "assets/images/png250px/tv.png",
    "iso": true,
    "name": "Tuvalu"
  },
  {
    "capital": "Kampala",
    "code": "ug",
    "continent": "Africa",
    "flag": "assets/images/flags/ug.svg",
    "flag_250px": "assets/images/png250px/ug.png",
    "iso": true,
    "name": "Uganda"
  },
  {
    "capital": "Kiev",
    "code": "ua",
    "continent": "Europe",
    "flag": "assets/images/flags/ua.svg",
    "flag_250px": "assets/images/png250px/ua.png",
    "iso": true,
    "name": "Ukraine"
  },
  {
    "capital": "Abu Dhabi",
    "code": "ae",
    "continent": "Asia",
    "flag": "assets/images/flags/ae.svg",
    "flag_250px": "assets/images/png250px/ae.png",
    "iso": true,
    "name": "United Arab Emirates"
  },
  {
    "capital": "London",
    "code": "gb",
    "continent": "Europe",
    "flag": "assets/images/flags/gb.svg",
    "flag_250px": "assets/images/png250px/gb.png",
    "iso": true,
    "name": "United Kingdom"
  },
  {
    "code": "un",
    "flag": "assets/images/flags/un.svg",
    "flag_250px": "assets/images/png250px/un.png",
    "iso": false,
    "name": "United Nations"
  },
  {
    "capital": "Washington, D.C.",
    "code": "um",
    "continent": "North America",
    "flag": "assets/images/flags/um.svg",
    "flag_250px": "assets/images/png250px/um.png",
    "iso": true,
    "name": "United States Minor Outlying Islands"
  },
  {
    "capital": "Washington, D.C.",
    "code": "us",
    "continent": "North America",
    "flag": "assets/images/flags/us.svg",
    "flag_250px": "assets/images/png250px/us.png",
    "iso": true,
    "name": "United States of America"
  },
  {
    "capital": "Montevideo",
    "code": "uy",
    "continent": "South America",
    "flag": "assets/images/flags/uy.svg",
    "flag_250px": "assets/images/png250px/uy.png",
    "iso": true,
    "name": "Uruguay"
  },
  {
    "capital": "Tashkent",
    "code": "uz",
    "continent": "Asia",
    "flag": "assets/images/flags/uz.svg",
    "flag_250px": "assets/images/png250px/uz.png",
    "iso": true,
    "name": "Uzbekistan"
  },
  {
    "capital": "Port Vila",
    "code": "vu",
    "continent": "Oceania",
    "flag": "assets/images/flags/vu.svg",
    "flag_250px": "assets/images/png250px/vu.png",
    "iso": true,
    "name": "Vanuatu"
  },
  {
    "capital": "Caracas",
    "code": "ve",
    "continent": "South America",
    "flag": "assets/images/flags/ve.svg",
    "flag_250px": "assets/images/png250px/ve.png",
    "iso": true,
    "name": "Venezuela"
  },
  {
    "capital": "Hanoi",
    "code": "vn",
    "continent": "Asia",
    "flag": "assets/images/flags/vn.svg",
    "flag_250px": "assets/images/png250px/vn.png",
    "iso": true,
    "name": "Vietnam"
  },
  {
    "capital": "Road Town",
    "code": "vg",
    "continent": "North America",
    "flag": "assets/images/flags/vg.svg",
    "flag_250px": "assets/images/png250px/vg.png",
    "iso": true,
    "name": "Virgin Islands (British)"
  },
  {
    "capital": "Charlotte Amalie",
    "code": "vi",
    "continent": "North America",
    "flag": "assets/images/flags/vi.svg",
    "flag_250px": "assets/images/png250px/vi.png",
    "iso": true,
    "name": "Virgin Islands (U.S.)"
  },
  {
    "capital": "Cardiff",
    "code": "gb-wls",
    "continent": "Europe",
    "flag": "assets/images/flags/gb-wls.svg",
    "flag_250px": "assets/images/png250px/gb-wls.png",
    "iso": false,
    "name": "Wales"
  },
  {
    "capital": "Mata-Utu",
    "code": "wf",
    "continent": "Oceania",
    "flag": "assets/images/flags/wf.svg",
    "flag_250px": "assets/images/png250px/wf.png",
    "iso": true,
    "name": "Wallis and Futuna"
  },
  {
    "capital": "Laayoune",
    "code": "eh",
    "continent": "Africa",
    "flag": "assets/images/flags/eh.svg",
    "flag_250px": "assets/images/png250px/eh.png",
    "iso": true,
    "name": "Western Sahara"
  },
  {
    "capital": "Sana'a",
    "code": "ye",
    "continent": "Asia",
    "flag": "assets/images/flags/ye.svg",
    "flag_250px": "assets/images/png250px/ye.png",
    "iso": true,
    "name": "Yemen"
  },
  {
    "capital": "Lusaka",
    "code": "zm",
    "continent": "Africa",
    "flag": "assets/images/flags/zm.svg",
    "flag_250px": "assets/images/png250px/zm.png",
    "iso": true,
    "name": "Zambia"
  },
  {
    "capital": "Harare",
    "code": "zw",
    "continent": "Africa",
    "flag": "assets/images/flags/zw.svg",
    "flag_250px": "assets/images/png250px/zw.png",
    "iso": true,
    "name": "Zimbabwe"
  }
];

const countriesISO = countries.filter(item => item.iso === true);
const countriesEurope = countries.filter(item => item.continent === "Europe");
const countriesNorthAmerica = countries.filter(item => item.continent === "North America");
const countriesSouthAmerica = countries.filter(item => item.continent === "South America");
const countriesAfrica = countries.filter(item => item.continent === "Africa");
const countriesAsia = countries.filter(item => item.continent === "Asia");
const countriesOceania = countries.filter(item => item.continent === "Oceania");

console.log(countriesAfrica)

function MAX10(){
  MAX_QUESTIONS = 10;
  return MAX_QUESTIONS;
}

function MAX25(){
  MAX_QUESTIONS = 25;
  return MAX_QUESTIONS;
}

function MAX50(){
  MAX_QUESTIONS = 50;
  return MAX_QUESTIONS;
}

function MAX_ALL(){
  MAX_QUESTIONS = 249;
  return MAX_QUESTIONS;
}