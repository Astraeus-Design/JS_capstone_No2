/***************************************************************************/
/*                                                                         */
/*                 js capstone v2                                          */
/*                                                                         */
/***************************************************************************/

/* large constants array of nationality objects to cross reference data    */

//Nationality, Countries List for javscript but I may relocate to local storage */

const nationalities =  [{ NationalityID: 1, CountryCode: 'GB', Nationality: 'British' },
            { NationalityID: 34, CountryCode: 'AF', Nationality: 'Afghan' },
            { NationalityID: 35, CountryCode: 'AL', Nationality: 'Albanian' },
            { NationalityID: 36, CountryCode: 'DZ', Nationality: 'Algerian' },
            { NationalityID: 158, CountryCode: 'US', Nationality: 'American' },
            { NationalityID: 38, CountryCode: 'AD', Nationality: 'Andorran' },
            { NationalityID: 39, CountryCode: 'AO', Nationality: 'Angolan' },
            { NationalityID: 40, CountryCode: 'AM', Nationality: 'Armenian' },
            { NationalityID: 41, CountryCode: 'AT', Nationality: 'Austrian' },
            { NationalityID: 42, CountryCode: 'AZ', Nationality: 'Azerbaijani' },
            { NationalityID: 2, CountryCode: 'AR', Nationality: 'Argentinian' },
            { NationalityID: 2, CountryCode: 'AR', Nationality: 'Argentine' },            
            { NationalityID: 3, CountryCode: 'AU', Nationality: 'Australian' },
            { NationalityID: 43, CountryCode: 'BH', Nationality: 'Bahraini' },
            { NationalityID: 44, CountryCode: 'BD', Nationality: 'Bangladeshi' },
            { NationalityID: 45, CountryCode: 'BB', Nationality: 'Barbadian' },
            { NationalityID: 46, CountryCode: 'BY', Nationality: 'Belarusian' },
            { NationalityID: 47, CountryCode: 'BZ', Nationality: 'Belizean' },
            { NationalityID: 48, CountryCode: 'BJ', Nationality: 'Beninese' },
            { NationalityID: 49, CountryCode: 'BM', Nationality: 'Bermudian' },
            { NationalityID: 50, CountryCode: 'BT', Nationality: 'Bhutanese' },
            { NationalityID: 51, CountryCode: 'BO', Nationality: 'Bolivian' },
            { NationalityID: 52, CountryCode: 'BA', Nationality: 'Bosnian' },
            { NationalityID: 53, CountryCode: 'BW', Nationality: 'Botswanan' },
            { NationalityID: 54, CountryCode: 'BG', Nationality: 'Bulgarian' },
            { NationalityID: 55, CountryCode: 'BF', Nationality: 'Burkinese' },
            { NationalityID: 56, CountryCode: 'BI', Nationality: 'Burundian' },
            { NationalityID: 7, CountryCode: 'CA', Nationality: 'Canadian' },
            { NationalityID: 8, CountryCode: 'CN', Nationality: 'Chinese' },
            { NationalityID: 9, CountryCode: 'CO', Nationality: 'Colombian' },
            { NationalityID: 10, CountryCode: 'CU', Nationality: 'Cuban' },
            { NationalityID: 57, CountryCode: 'KH', Nationality: 'Cambodian' },
            { NationalityID: 58, CountryCode: 'CM', Nationality: 'Cameroonian' },
            { NationalityID: 59, CountryCode: 'CV', Nationality: 'Cape Verdean' },
            { NationalityID: 60, CountryCode: 'TD', Nationality: 'Chadian' },
            { NationalityID: 61, CountryCode: 'CL', Nationality: 'Chilean' },
            { NationalityID: 62, CountryCode: 'CG', Nationality: 'Congolese' },
            { NationalityID: 63, CountryCode: 'CR', Nationality: 'Costa Rican' },
            { NationalityID: 64, CountryCode: 'HR', Nationality: 'Croat' },
            { NationalityID: 65, CountryCode: 'CY', Nationality: 'Cypriot' },
            { NationalityID: 66, CountryCode: 'CZ', Nationality: 'Czech' },
            { NationalityID: 67, CountryCode: 'DK', Nationality: 'Danish' },
            { NationalityID: 11, CountryCode: 'DO', Nationality: 'Dominican' },
            { NationalityID: 68, CountryCode: 'DJ', Nationality: 'Djiboutian' },
            { NationalityID: 69, CountryCode: 'DM', Nationality: 'Dominican' },
            { NationalityID: 26, CountryCode: 'NL', Nationality: 'Dutch' },
            { NationalityID: 12, CountryCode: 'EC', Nationality: 'Ecuadorean' },
            { NationalityID: 70, CountryCode: 'EG', Nationality: 'Egyptian' },
            { NationalityID: 71, CountryCode: 'ER', Nationality: 'Eritrean' },
            { NationalityID: 72, CountryCode: 'EE', Nationality: 'Estonian' },
            { NationalityID: 73, CountryCode: 'ET', Nationality: 'Ethiopian' },
            { NationalityID: 74, CountryCode: 'FJ', Nationality: 'Fijian' },
            { NationalityID: 75, CountryCode: 'FI', Nationality: 'Finnish' },
            { NationalityID: 76, CountryCode: 'PF', Nationality: 'French Polynesian' },
            { NationalityID: 14, CountryCode: 'FR', Nationality: 'French' },
            { NationalityID: 77, CountryCode: 'GA', Nationality: 'Gabonese' },
            { NationalityID: 78, CountryCode: 'GM', Nationality: 'Gambian' },
            { NationalityID: 79, CountryCode: 'GE', Nationality: 'Georgian' },
            { NationalityID: 15, CountryCode: 'DE', Nationality: 'German' },
            { NationalityID: 16, CountryCode: 'GT', Nationality: 'Guatemalan' },
            { NationalityID: 80, CountryCode: 'GH', Nationality: 'Ghanaian' },
            { NationalityID: 81, CountryCode: 'GR', Nationality: 'Greek' },
            { NationalityID: 82, CountryCode: 'GD', Nationality: 'Grenadian' },
            { NationalityID: 83, CountryCode: 'GN', Nationality: 'Guinean' },
            { NationalityID: 84, CountryCode: 'GY', Nationality: 'Guyanese' },
            { NationalityID: 17, CountryCode: 'HT', Nationality: 'Haitian' },
            { NationalityID: 18, CountryCode: 'HN', Nationality: 'Honduran' },
            { NationalityID: 85, CountryCode: 'HU', Nationality: 'Hungarian' },
            { NationalityID: 19, CountryCode: 'IN', Nationality: 'Indian' },
            { NationalityID: 20, CountryCode: 'IE', Nationality: 'Ireland' },
            { NationalityID: 21, CountryCode: 'IL', Nationality: 'Israeli' },
            { NationalityID: 22, CountryCode: 'IT', Nationality: 'Italian' },
            { NationalityID: 86, CountryCode: 'IS', Nationality: 'Icelandic' },
            { NationalityID: 87, CountryCode: 'ID', Nationality: 'Indonesian' },
            { NationalityID: 88, CountryCode: 'IR', Nationality: 'Iranian' },
            { NationalityID: 89, CountryCode: 'IQ', Nationality: 'Iraqi' },
            { NationalityID: 23, CountryCode: 'JP', Nationality: 'Japanese' },
            { NationalityID: 90, CountryCode: 'JM', Nationality: 'Jamaican' },
            { NationalityID: 91, CountryCode: 'JO', Nationality: 'Jordanian' },
            { NationalityID: 92, CountryCode: 'KZ', Nationality: 'Kazakh' },
            { NationalityID: 93, CountryCode: 'KE', Nationality: 'Kenyan' },
            { NationalityID: 94, CountryCode: 'KP', Nationality: 'North Korean' },
            { NationalityID: 95, CountryCode: 'KW', Nationality: 'Kuwaiti' },
            { NationalityID: 96, CountryCode: 'LV', Nationality: 'Latvian' },
            { NationalityID: 97, CountryCode: 'LB', Nationality: 'Lebanese' },
            { NationalityID: 98, CountryCode: 'LR', Nationality: 'Liberian' },
            { NationalityID: 99, CountryCode: 'LY', Nationality: 'Libyan' },
            { NationalityID: 100, CountryCode: 'LT', Nationality: 'Lithuanian' },
            { NationalityID: 101, CountryCode: 'LU', Nationality: 'LUXEMBOURG' },
            { NationalityID: 102, CountryCode: 'MG', Nationality: 'Madagascan' },
            { NationalityID: 103, CountryCode: 'MW', Nationality: 'Malawian' },
            { NationalityID: 104, CountryCode: 'MY', Nationality: 'Malaysian' },
            { NationalityID: 105, CountryCode: 'MV', Nationality: 'Maldivian' },
            { NationalityID: 106, CountryCode: 'ML', Nationality: 'Malian' },
            { NationalityID: 107, CountryCode: 'MT', Nationality: 'Maltese' },
            { NationalityID: 108, CountryCode: 'MR', Nationality: 'Mauritanian' },
            { NationalityID: 109, CountryCode: 'MU', Nationality: 'Mauritian' },
            { NationalityID: 110, CountryCode: 'MC', Nationality: 'Monacan' },
            { NationalityID: 111, CountryCode: 'MN', Nationality: 'Mongolian' },
            { NationalityID: 112, CountryCode: 'ME', Nationality: 'Montenegrin' },
            { NationalityID: 113, CountryCode: 'MA', Nationality: 'Moroccan' },
            { NationalityID: 114, CountryCode: 'MZ', Nationality: 'Mozambican' },
            { NationalityID: 25, CountryCode: 'MX', Nationality: 'Mexican' },
            { NationalityID: 115, CountryCode: 'NA', Nationality: 'Namibian' },
            { NationalityID: 116, CountryCode: 'NP', Nationality: 'Nepalese' },
            { NationalityID: 117, CountryCode: 'NZ', Nationality: 'New Zealand' },
            { NationalityID: 118, CountryCode: 'NI', Nationality: 'Nicaraguan' },
            { NationalityID: 119, CountryCode: 'NE', Nationality: 'Nigerien' },
            { NationalityID: 120, CountryCode: 'NG', Nationality: 'Nigerian' },
            { NationalityID: 121, CountryCode: 'NO', Nationality: 'Norwegian' },
            { NationalityID: 122, CountryCode: 'OM', Nationality: 'Omani' },
            { NationalityID: 123, CountryCode: 'PK', Nationality: 'Pakistani' },
            { NationalityID: 124, CountryCode: 'PA', Nationality: 'Panamanian' },
            { NationalityID: 125, CountryCode: 'PG', Nationality: 'Guinean' },
            { NationalityID: 126, CountryCode: 'PY', Nationality: 'Paraguayan' },
            { NationalityID: 127, CountryCode: 'PE', Nationality: 'Peruvian' },
            { NationalityID: 27, CountryCode: 'PH', Nationality: 'Philippine' },
            { NationalityID: 128, CountryCode: 'PL', Nationality: 'Polish' },
            { NationalityID: 129, CountryCode: 'PT', Nationality: 'Portuguese' },
            { NationalityID: 130, CountryCode: 'QA', Nationality: 'Qatari' },
            { NationalityID: 131, CountryCode: 'RO', Nationality: 'Romanian' },
            { NationalityID: 132, CountryCode: 'RW', Nationality: 'Rwandan' },
            { NationalityID: 13, CountryCode: 'SV', Nationality: 'Salvadorean' },
            { NationalityID: 37, CountryCode: 'AS', Nationality: 'Samoan' },
            { NationalityID: 133, CountryCode: 'SA', Nationality: 'Saudi Arabian' },
            { NationalityID: 134, CountryCode: 'SN', Nationality: 'Senegalese' },
            { NationalityID: 135, CountryCode: 'RS', Nationality: 'Serbian' },
            { NationalityID: 136, CountryCode: 'SL', Nationality: 'Sierra Leonian' },
            { NationalityID: 137, CountryCode: 'SG', Nationality: 'Singaporean' },
            { NationalityID: 138, CountryCode: 'SK', Nationality: 'Slovak' },
            { NationalityID: 139, CountryCode: 'SI', Nationality: 'Slovenian' },
            { NationalityID: 140, CountryCode: 'SB', Nationality: 'Slomoni' },
            { NationalityID: 141, CountryCode: 'SO', Nationality: 'Somali' },
            { NationalityID: 142, CountryCode: 'ZA', Nationality: 'South African' },
            { NationalityID: 24, CountryCode: 'KR', Nationality: 'South Korean' },
            { NationalityID: 28, CountryCode: 'ES', Nationality: 'Spanish' },
            { NationalityID: 29, CountryCode: 'SE', Nationality: 'Swedish' },
            { NationalityID: 30, CountryCode: 'CH', Nationality: 'Swiss' },
            { NationalityID: 143, CountryCode: 'LK', Nationality: 'Sri Lankan' },
            { NationalityID: 144, CountryCode: 'SD', Nationality: 'Sudanese' },
            { NationalityID: 145, CountryCode: 'SR', Nationality: 'Surinamese' },
            { NationalityID: 146, CountryCode: 'SZ', Nationality: 'Swazi' },
            { NationalityID: 31, CountryCode: 'TW', Nationality: 'Taiwanese' },
            { NationalityID: 147, CountryCode: 'TJ', Nationality: 'Tajik' },
            { NationalityID: 148, CountryCode: 'TH', Nationality: 'Thai' },
            { NationalityID: 149, CountryCode: 'TG', Nationality: 'Togolese' },
            { NationalityID: 150, CountryCode: 'TT', Nationality: 'Trinidadian' },
            { NationalityID: 151, CountryCode: 'TN', Nationality: 'Tunisian' },
            { NationalityID: 152, CountryCode: 'TR', Nationality: 'Turkish' },
            { NationalityID: 153, CountryCode: 'TM', Nationality: 'Turkoman' },
            { NationalityID: 154, CountryCode: 'TV', Nationality: 'Tuvaluan' },
            { NationalityID: 155, CountryCode: 'UG', Nationality: 'Ugandan' },
            { NationalityID: 156, CountryCode: 'UA', Nationality: 'Ukrainian' },
            { NationalityID: 157, CountryCode: 'AE', Nationality: 'Emirati' },
            { NationalityID: 32, CountryCode: 'VE', Nationality: 'Venezuelan' },
            { NationalityID: 33, CountryCode: 'VN', Nationality: 'Vietnamese' },
            { NationalityID: 159, CountryCode: 'UY', Nationality: 'Uruguayan' },
            { NationalityID: 160, CountryCode: 'UZ', Nationality: 'Uzbek' },
            { NationalityID: 161, CountryCode: 'VU', Nationality: 'Vanuatuan' },
            { NationalityID: 162, CountryCode: 'YE', Nationality: 'Yemeni' },
            { NationalityID: 163, CountryCode: 'ZM', Nationality: 'Zambian' }
];


// All countries
// length 252

const countriesArray = [
  {name: "Afghanistan",code: "AF"},
  {name: "Åland Islands",code: "AX"},
  {name: "Albania",code: "AL"},
  {name: "Algeria",code: "DZ"},
  {name: "American Samoa",code: "AS"},
  {name: "Andorra",code: "AD"},
  {name: "Angola",code: "AO"},
  {name: "Anguilla",code: "AI"},
  {name: "Antarctica",code: "AQ"},
  {name: "Antigua & Barbuda",code: "AG"},
  {name: "Argentina",code: "AR"},
  {name: "Armenia",code: "AM"},
  {name: "Aruba",code: "AW"},
  {name: "Australia",code: "AU"},
  {name: "Austria",code: "AT"},
  {name: "Azerbaijan",code: "AZ"},
  {name: "Bahamas",code: "BS"},
  {name: "Bahrain",code: "BH"},
  {name: "Bangladesh",code: "BD"},
  {name: "Barbados",code: "BB"},
  {name: "Belarus",code: "BY"},
  {name: "Belgium",code: "BE"},
  {name: "Belize",code: "BZ"},
  {name: "Benin",code: "BJ"},
  {name: "Bermuda",code: "BM"},
  {name: "Bhutan",code: "BT"},
  {name: "Bolivia",code: "BO"},
  {name: "Caribbean Netherlands",code: "BQ"},
  {name: "Bosnia & Herzegovina",code: "BA"},
  {name: "Botswana",code: "BW"},
  {name: "Bouvet Island",code: "BV"},
  {name: "Brazil",code: "BR"},
  {name: "British Indian Ocean Territory",code: "IO"},
  {name: "Brunei",code: "BN"},
  {name: "Bulgaria",code: "BG"},
  {name: "Burkina Faso",code: "BF"},
  {name: "Burundi",code: "BI"},
  {name: "Cambodia",code: "KH"},
  {name: "Cameroon",code: "CM"},
  {name: "Canada",code: "CA"},
  {name: "Cape Verde",code: "CV"},
  {name: "Cayman Islands",code: "KY"},
  {name: "Central African Republic",code: "CF"},
  {name: "Chad",code: "TD"},
  {name: "Chile",code: "CL"},
  {name: "China",code: "CN"},
  {name: "Christmas Island",code: "CX"},
  {name: "Cocos (Keeling) Islands",code: "CC"},
  {name: "Colombia",code: "CO"},
  {name: "Comoros",code: "KM"},
  {name: "Congo - Brazzaville",code: "CG"},
  {name: "Congo - Kinshasa",code: "CD"},
  {name: "Cook Islands",code: "CK"},
  {name: "Costa Rica",code: "CR"},
  {name: "Côte d’Ivoire",code: "CI"},
  {name: "Croatia",code: "HR"},
  {name: "Cuba",code: "CU"},
  {name: "Curaçao",code: "CW"},
  {name: "Cyprus",code: "CY"},
  {name: "Czechia",code: "CZ"},
  {name: "Denmark",code: "DK"},
  {name: "Djibouti",code: "DJ"},
  {name: "Dominica",code: "DM"},
  {name: "Dominican Republic",code: "DO"},
  {name: "Ecuador",code: "EC"},
  {name: "Egypt",code: "EG"},
  {name: "El Salvador",code: "SV"},
  {name: "Equatorial Guinea",code: "GQ"},
  {name: "Eritrea",code: "ER"},
  {name: "Estonia",code: "EE"},
  {name: "Ethiopia",code: "ET"},
  {name: "Falkland Islands (Islas Malvinas)",code: "FK"},
  {name: "Faroe Islands",code: "FO"},
  {name: "Fiji",code: "FJ"},
  {name: "Finland",code: "FI"},
  {name: "France",code: "FR"},
  {name: "French Guiana",code: "GF"},
  {name: "French Polynesia",code: "PF"},
  {name: "French Southern Territories",code: "TF"},
  {name: "Gabon",code: "GA"},
  {name: "Gambia",code: "GM"},
  {name: "Georgia",code: "GE"},
  {name: "Germany",code: "DE"},
  {name: "Ghana",code: "GH"},
  {name: "Gibraltar",code: "GI"},
  {name: "Greece",code: "GR"},
  {name: "Greenland",code: "GL"},
  {name: "Grenada",code: "GD"},
  {name: "Guadeloupe",code: "GP"},
  {name: "Guam",code: "GU"},
  {name: "Guatemala",code: "GT"},
  {name: "Guernsey",code: "GG"},
  {name: "Guinea",code: "GN"},
  {name: "Guinea-Bissau",code: "GW"},
  {name: "Guyana",code: "GY"},
  {name: "Haiti",code: "HT"},
  {name: "Heard & McDonald Islands",code: "HM"},
  {name: "Vatican City",code: "VA"},
  {name: "Honduras",code: "HN"},
  {name: "Hong Kong",code: "HK"},
  {name: "Hungary",code: "HU"},
  {name: "Iceland",code: "IS"},
  {name: "India",code: "IN"},
  {name: "Indonesia",code: "ID"},
  {name: "Iran",code: "IR"},
  {name: "Iraq",code: "IQ"},
  {name: "Ireland",code: "IE"},
  {name: "Isle of Man",code: "IM"},
  {name: "Israel",code: "IL"},
  {name: "Italy",code: "IT"},
  {name: "Jamaica",code: "JM"},
  {name: "Japan",code: "JP"},
  {name: "Jersey",code: "JE"},
  {name: "Jordan",code: "JO"},
  {name: "Kazakhstan",code: "KZ"},
  {name: "Kenya",code: "KE"},
  {name: "Kiribati",code: "KI"},
  {name: "North Korea",code: "KP"},
  {name: "South Korea",code: "KR"},
  {name: "Kosovo",code: "XK"},
  {name: "Kuwait",code: "KW"},
  {name: "Kyrgyzstan",code: "KG"},
  {name: "Laos",code: "LA"},
  {name: "Latvia",code: "LV"},
  {name: "Lebanon",code: "LB"},
  {name: "Lesotho",code: "LS"},
  {name: "Liberia",code: "LR"},
  {name: "Libya",code: "LY"},
  {name: "Liechtenstein",code: "LI"},
  {name: "Lithuania",code: "LT"},
  {name: "Luxembourg",code: "LU"},
  {name: "Macao",code: "MO"},
  {name: "North Macedonia",code: "MK"},
  {name: "Madagascar",code: "MG"},
  {name: "Malawi",code: "MW"},
  {name: "Malaysia",code: "MY"},
  {name: "Maldives",code: "MV"},
  {name: "Mali",code: "ML"},
  {name: "Malta",code: "MT"},
  {name: "Marshall Islands",code: "MH"},
  {name: "Martinique",code: "MQ"},
  {name: "Mauritania",code: "MR"},
  {name: "Mauritius",code: "MU"},
  {name: "Mayotte",code: "YT"},
  {name: "Mexico",code: "MX"},
  {name: "Micronesia",code: "FM"},
  {name: "Moldova",code: "MD"},
  {name: "Monaco",code: "MC"},
  {name: "Mongolia",code: "MN"},
  {name: "Montenegro",code: "ME"},
  {name: "Montserrat",code: "MS"},
  {name: "Morocco",code: "MA"},
  {name: "Mozambique",code: "MZ"},
  {name: "Myanmar (Burma)",code: "MM"},
  {name: "Namibia",code: "NA"},
  {name: "Nauru",code: "NR"},
  {name: "Nepal",code: "NP"},
  {name: "Netherlands",code: "NL"},
  {name: "Curaçao",code: "AN"},
  {name: "New Caledonia",code: "NC"},
  {name: "New Zealand",code: "NZ"},
  {name: "Nicaragua",code: "NI"},
  {name: "Niger",code: "NE"},
  {name: "Nigeria",code: "NG"},
  {name: "Niue",code: "NU"},
  {name: "Norfolk Island",code: "NF"},
  {name: "Northern Mariana Islands",code: "MP"},
  {name: "Norway",code: "NO"},
  {name: "Oman",code: "OM"},
  {name: "Pakistan",code: "PK"},
  {name: "Palau",code: "PW"},
  {name: "Palestine",code: "PS"},
  {name: "Panama",code: "PA"},
  {name: "Papua New Guinea",code: "PG"},
  {name: "Paraguay",code: "PY"},
  {name: "Peru",code: "PE"},
  {name: "Philippines",code: "PH"},
  {name: "Pitcairn Islands",code: "PN"},
  {name: "Poland",code: "PL"},
  {name: "Portugal",code: "PT"},
  {name: "Puerto Rico",code: "PR"},
  {name: "Qatar",code: "QA"},
  {name: "Réunion",code: "RE"},
  {name: "Romania",code: "RO"},
  {name: "Russia",code: "RU"},
  {name: "Rwanda",code: "RW"},
  {name: "St. Barthélemy",code: "BL"},
  {name: "St. Helena",code: "SH"},
  {name: "St. Kitts & Nevis",code: "KN"},
  {name: "St. Lucia",code: "LC"},
  {name: "St. Martin",code: "MF"},
  {name: "St. Pierre & Miquelon",code: "PM"},
  {name: "St. Vincent & Grenadines",code: "VC"},
  {name: "Samoa",code: "WS"},
  {name: "San Marino",code: "SM"},
  {name: "São Tomé & Príncipe",code: "ST"},
  {name: "Saudi Arabia",code: "SA"},
  {name: "Senegal",code: "SN"},
  {name: "Serbia",code: "RS"},
  {name: "Serbia",code: "CS"},
  {name: "Seychelles",code: "SC"},
  {name: "Sierra Leone",code: "SL"},
  {name: "Singapore",code: "SG"},
  {name: "Sint Maarten",code: "SX"},
  {name: "Slovakia",code: "SK"},
  {name: "Slovenia",code: "SI"},
  {name: "Solomon Islands",code: "SB"},
  {name: "Somalia",code: "SO"},
  {name: "South Africa",code: "ZA"},
  {name: "South Georgia & South Sandwich Islands",code: "GS"},
  {name: "South Sudan",code: "SS"},
  {name: "Spain",code: "ES"},
  {name: "Sri Lanka",code: "LK"},
  {name: "Sudan",code: "SD"},
  {name: "Suriname",code: "SR"},
  {name: "Svalbard & Jan Mayen",code: "SJ"},
  {name: "Eswatini",code: "SZ"},
  {name: "Sweden",code: "SE"},
  {name: "Switzerland",code: "CH"},
  {name: "Syria",code: "SY"},
  {name: "Taiwan",code: "TW"},
  {name: "Tajikistan",code: "TJ"},
  {name: "Tanzania",code: "TZ"},
  {name: "Thailand",code: "TH"},
  {name: "Timor-Leste",code: "TL"},
  {name: "Togo",code: "TG"},
  {name: "Tokelau",code: "TK"},
  {name: "Tonga",code: "TO"},
  {name: "Trinidad & Tobago",code: "TT"},
  {name: "Tunisia",code: "TN"},
  {name: "Turkey",code: "TR"},
  {name: "Turkmenistan",code: "TM"},
  {name: "Turks & Caicos Islands",code: "TC"},
  {name: "Tuvalu",code: "TV"},
  {name: "Uganda",code: "UG"},
  {name: "Ukraine",code: "UA"},
  {name: "United Arab Emirates",code: "AE"},
  {name: "United Kingdom",code: "GB"},
  {name: "United States",code: "US"},
  {name: "U.S. Outlying Islands",code: "UM"},
  {name: "Uruguay",code: "UY"},
  {name: "Uzbekistan",code: "UZ"},
  {name: "Vanuatu",code: "VU"},
  {name: "Venezuela",code: "VE"},
  {name: "Vietnam",code: "VN"},
  {name: "British Virgin Islands",code: "VG"},
  {name: "U.S. Virgin Islands",code: "VI"},
  {name: "Wallis & Futuna",code: "WF"},
  {name: "Western Sahara",code: "EH"},
  {name: "Yemen",code: "YE"},
  {name: "Zambia",code: "ZM"},
  {name: "Zimbabwe",code: "ZW"}
];



/* use zen api to acquire events of the day when a birthday is submitted */


const zenURL=`https://today.zenquotes.io/api/`;

const buttonRef=document.querySelector("#bt1");
const buttonDivRef=document.querySelector("#fbtn1");
const formRef=document.querySelector("#newContact");
const seasonRef=document.querySelector("#season");
const roundRef=document.querySelector("#round");
const displayDiv=document.querySelector("#contact_divs_container");

let day;
let month;
let year;
let date;
let htmlSelect=``
let htmlHeader=``;
lethtmlResult=``;
let htmlFirst=``;
let htmlSecond=``;
let htmlThird=``
let filename='';
let filename2='';
let inTimeOut=false;
let raceArray;
let resultsArray;
let resultsObj;
let seasonsObj;
let linksArray=[];
let htmlArray=[];
let noofDivs;


/* function to return country code via lookup for nationality/country  */
/* used for generation of flag icons                           */

function getIconRef(searchStr,ctryflag){
  console.log(searchStr,ctryflag);
    if(searchStr==='UK') searchStr='United Kingdom';
    if(searchStr==='USA') searchStr='United States';
    countryObj='';
    if (!ctryflag){
        countryObj = nationalities.find((element)=>(element.Nationality).toLowerCase()===(searchStr.toLowerCase()));
        if (countryObj!==undefined) ccode=countryObj.CountryCode;
    }
    else
    {
      console.log(countriesArray[147].code);
      countryObj = countriesArray.find((element)=>(element.name).toLowerCase()===((searchStr).toLowerCase()));
      console.log(countryObj);
      if (countryObj!==undefined) ccode=countryObj.code;
    }
    console.log(countryObj);
    if (countryObj!==undefined) return(ccode+'.png');
    else return('---');


};

/* function to populate options of round select input */

function populateRounds(dataObj){

  
  raceArray=dataObj.MRData.RaceTable.Races;
  console.log(raceArray);
  htmlSelect=`<option class="option" value="0">All</option>`;
  raceArray.forEach((raceRound,index)=>
              {console.log(raceRound.raceName,raceRound.Circuit.circuitName);
               htmlSelect+=`<option class="option" value="${index+1}">${raceRound.raceName},${raceRound.Circuit.circuitName}</option>`; });
  roundRef.innerHTML=htmlSelect;


}

/* function to set a div visible or not dependent on round select input */

function toggleDivs(){

/* noofDivs will represent number of divs displayable */
/* if set to zero drop straight out of routine */

if (noofDivs>0){

   for( z=0; z<noofDivs; z++){  /* clear all divs to not displaying */
       divId='#A'+z;
       docref=document.querySelector(divId);
       if (docref.classList.contains('display')){
           docref.classList.remove('display'); 
       };
   };

   /* if select set to All then set all divs visible */ 
   if (roundRef.value==0){
   for( z=0; z<noofDivs; z++){
    divId='#A'+z;
    docref=document.querySelector(divId);
    if (!(docref.classList.contains('display'))){
        docref.classList.add('display'); 
     }
    }
   }
   else
   {
     for( z=0; z<noofDivs; z++){
      divId='#A'+z;
      docref=document.querySelector(divId);
      if (docref.classList.contains('display')){
          docref.classList.remove('display'); 
      }
    }
    document.querySelector('#A'+roundRef.value).classList.add('display');
  }



 }


};

/*  function to store F1 season data object arrays in local storage */

function cacheSeasonData(){

console.log('in the change listener, season select');

 /* make a call to API requesting data to create initial fields for round select input and also cache recieved data, also cache results data */
 
  filename=`S`+formRef.elements['season'].value;
  filename2='R'+formRef.elements['season'].value;

  /* check for existence of data for chosen season */

  if (localStorage.getItem(filename)&&(localStorage.getItem(filename2)))
    {
      console.log(filename,' data is present and saved');

      /* data exists so load into memory and populate round select input */

      seasonsObj=JSON.parse(localStorage.getItem(filename));

      populateRounds(seasonsObj);

      /* load race results data ready for presentation */

      resultsObj=JSON.parse(localStorage.getItem(filename2));

    }
  else
   {
     console.log(`https://ergast.com/api/f1/${formRef.elements['season'].value}.json?limit=50`);

     fetch(`https://ergast.com/api/f1/${formRef.elements['season'].value}.json?limit=50`)
    .then((res) => res.json())
    .then((seasonData) => {
      console.log(seasonData);
     if (!localStorage.getItem(filename))
       {
       /* create new data in local storage as a cached item */

       localStorage.setItem(filename, JSON.stringify(seasonData));

      };

      populateRounds(seasonData);

      seasonsObj=seasonData;

     /*raceArray=seasonData.MRData.RaceTable.Races;*/
     console.log(raceArray);
     console.log(raceArray[3].Circuit.circuitName);
     /*raceArray.forEach((raceRound)=>console.log(raceRound,raceRound.Circuit.circuitName));*/

 
     }

   ).catch((err)=>{alert("failed season data request");
                  console.log(err)});

    /*now fetch results data for selected season in similar way */
    
    
    fetch(`https://ergast.com/api/f1/${formRef.elements['season'].value}/results.json?limit=550`)
    .then((res) => res.json())
    .then((resultsData) => {
      console.log(resultsData);
     if (!localStorage.getItem(filename2))
       {
       /* create new data in local storage as a cached item */

       localStorage.setItem(filename2, JSON.stringify(resultsData));

      };

        resultsObj=resultsData;
 
     }

   ).catch((err)=>{alert("failed race results data request");
                  console.log(err)});

  };




  };




/* function to display F1 driver and race data using dynamic html  */
/* Rather than re-render individual div's, all divs will be generated */
/* and allowed to be toggled visible dependent on select option  */ 

function displayEvents(){

  console.log("button clicked");

  /* structure shall consist of header style div with three */
  /* divs sitting beneath in parallel, all will be children of */
  /* a combination of flex-flex or grid-flex to provide options */
  /* for responsive operation */

  /* our resultsObj contains results data, seasonsObj rounds data */ 

  /* create header div html we can concatenate smaller sections  */
  /* for ease of modification */

  raceArray=seasonsObj.MRData.RaceTable.Races;

  htmlMaindiv=``;
  noofDivs=0;

  raceArray.forEach((element,index)=>{

         ctry=element.Circuit.Location.country;
         cName=element.Circuit.circuitName;
         cUrl=element.Circuit.url
         fname=getIconRef(ctry,true);
         path=`../images/png_files/w40/`;

         /* maintain array of urls for div elements */
         
         idObj={id:cName,url:cUrl};
         linksArray.push(idObj);

         /* create main header div block */
         
        d1=`<div class="hdr"><div class="hdrtitle"><h3 class="hdrh3">`+
          `Round ${index+1}:  ${ctry} - ${element.date}</h3></div>`;

        d2=`<div class="hdrIcon"><img class="hdrimg" alt='---' src="${(fname!=='---')?(path+fname):''}"/>`+
           `</div>`;

/*        d3=`<div class="hdrPlace"><a class="hdrlink" target="_blank" href="${cUrl}">${cName}</a></div></div>`;*/

        d3=`<div class="hdrPlace">${cName}</div></div>`;



        /* now define 3 divs containing results and driver data */
        /* forEach not practical for this task so simple loop */



        for( j=0; j<3;j++){
            
            resultsArray=resultsObj.MRData.RaceTable.Races[index].Results[j];
            driverData=resultsArray.Driver;
            driverUrl=driverData.url;
            driverName=driverData.givenName+' '+driverData.familyName;
            driverCtry=driverData.nationality;
            teamData=resultsArray.Constructor;
            driverTeam=teamData.constructorId;
            teamCtry=teamData.nationality;
            teamUrl=teamData.url;

            console.log(driverName,driverTeam);

            idObj={id:driverName,url:driverUrl};
            linksArray.push(idObj);
            idObj={id:driverTeam,url:teamUrl};
            linksArray.push(idObj);

            /*create icons for driver and team */

            flag1=getIconRef(driverCtry,false);
            flag2=getIconRef(teamCtry,false);

            /* build html structure for each div */

            firstdiv=`<div class="resultBody">`;
            seconddiv=`<div class="divtitle" id="A${j}">${(j==0)?'1st':(j==1)?'2nd':'3rd'}</div>`;
            thirddiv=`<div class="flagdiv1"><img class="flag" alt='---' src="${(flag1!=='---')?(path+flag1):''}"/></div>`;
            fourthdiv=`<div class="driverdiv">${driverName}</div>`;            
/*            fourthdiv=`<div class="driverdiv"><a href="${driverUrl} target="_blank">${driverName}</a></div>`;*/
            fifthdiv=`<div class="flagdiv2"><img class="flag" alt='---' src="${(flag2!=='---')?(path+flag2):''}"/></div>`;
            sixthdiv=`<div class="teamdiv">${driverTeam}</div></div>`;
/*            sixthdiv=`<div class="teamdiv"><a href="${teamUrl} target="_blank">${driverTeam}</a></div></div>`;*/

            htmlArray[j]=firstdiv+seconddiv+thirddiv+fourthdiv+fifthdiv+sixthdiv;
            
        };

        /* consolidate all html sections into main container*/


     /*   headerhtml=`<div class="hdr_container">`+d1+d2+d3+`</div>`;  */      
        bodyhtml=`<div class="results_container">`+htmlArray[0]+htmlArray[1]+htmlArray[2]+'</div>';
        /*htmlMaindiv=`<div id="A${index}">`+(headerhtml+bodyhtml)+`</div>`;*/
        htmlMaindiv+=`<div class="hdr_container" id="A${index}">`+d1+d2+d3+(/*headerhtml+*/bodyhtml)+`</div>`;
     /*   htmlMaindiv+=(`<div class="roundDiv" id="A${index}">`+(headerhtml+bodyhtml)+`</div>`);*/
        noofDivs=index+1;

 /*        htmlHeader=`<div id="hdr"><div id="hdrtitle"><h3 id="hdrh3">`+
                `Round ${index+1}:  ${element.Circuit.Location.country}`+
                ` - ${element.date}</h3></div><div id="hdrIcon"><img src="`+
                `${(fname!=='---')?fname:'---'}"/></div><div id="hdrPlace">`+
                `<a href="${element.Circuit.url}">`+
                `${element.Circuit.circuitName}</a></div></div>`;*/

                    console.log(element.Circuit.Location.country);
  });

   /* set divs in appropriate state prior to rendering */

   /*toggleDivs();*/
   displayDiv.innerHTML=htmlMaindiv;

  



};





/******************************************************************/
/*                                                                */
/*              main code for initialisation and housekeeping     */
/*                                                                */
/******************************************************************/

/*  populate the select input html for years 1950-2022  */

for( let i=1950; i<2023; i++){

  htmlSelect+=`<option class="option" value="${i}">${i}</option>`; 
 
 };
 
 document.querySelector("#season").innerHTML=htmlSelect;
 
 

/* cache data for long term use, required due to fair usage */
/* policy of API provider( no more than 4 calls per second or 200 per hour) */
/* As it is data would only require recaching for the active season every */
/* 1,2,4 weeks and for current year only depending on race schedule */ 
/* initialised at start for first select value, currently 1950 */

cacheSeasonData();

/* assign an event listener for season select input change */

seasonRef.addEventListener('change',cacheSeasonData);

/* add a change listener for round select to make divs visible */

/* roundRef.addEventListener('change',toggleDivs);*/

/* assign listener to button for submission this will also */
/* be listener that creates dynamic html and determines data */
/* visibility by virtue of select options                   */

buttonDivRef.addEventListener('click',displayEvents);

/* add event listener to catch click events for linked data  */

displayDiv.addEventListener('click',(e)=>{
      let refObj;
      let textStr=e.target.innerText;
      console.log('in div click ',textStr);
      found=false;

      /* code rewritten after issues with array.find, manual */
      /* tests showed all values valid and correct so code */
      /* now written as a loop */

      for( p=0 ; ((p<linksArray.length)&&!found); p++){
        if((linksArray[p].id)===textStr){ refObj=linksArray[p];found=true;};
      }


   /*   refObj=linksArray.find((element)=>{((element.id)===(textStr));
       console.log(refObj,textStr);});*/
    /*  console.log(refObj.id,textStr);*/
   /* refObj=linksArray[0];
    if (refObj.id===textStr) console.log("it is correct");*/

    /* if a match for link found open in new window */

      if(refObj!==undefined){
        window.open(refObj.url,refObj.id);
        
      }
      else(console.log('no matches',linksArray));
});








