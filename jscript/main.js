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





/* use zen api to acquire events of the day when a birthday is submitted */


const zenURL=`https://today.zenquotes.io/api/`;

const buttonRef=document.querySelector("#bt1");
const formRef=document.querySelector("#newContact");
const seasonRef=document.querySelector("#season");
const roundRef=document.querySelector("#round");

let day;
let month;
let year;
let date;
let htmlSelect=``
let filename='';
let inTimeOut=false;
let raceArray;



/* function to populate options of round select input */

function populateRounds(dataObj){

  
  raceArray=dataObj.MRData.RaceTable.Races;
  console.log(raceArray);
  htmlSelect=``;
  raceArray.forEach((raceRound,index)=>
              {console.log(raceRound.raceName,raceRound.Circuit.circuitName);
               htmlSelect+=`<option class="option" value="${index}">${raceRound.raceName},${raceRound.Circuit.circuitName}</option>`; });
  roundRef.innerHTML=htmlSelect;


}


/*  function to store F1 season data object arrays in local storage */

function cacheSeasonData(){

console.log('in the change listener, season select');

 /* make a call to API requesting data to create initial fields for round select input and also cache recieved data */
 
  filename=`S`+formRef.elements['season'].value;

  /* check for existence of data for chosen season */

  if (localStorage.getItem(filename))
    {
      console.log(filename,' data is present and saved');

      /* data exists so load into memory and populate round select input */

      tempObj=JSON.parse(localStorage.getItem(filename));

      populateRounds(tempObj);

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
     /*raceArray=seasonData.MRData.RaceTable.Races;*/
     console.log(raceArray);
     console.log(raceArray[3].Circuit.circuitName);
     /*raceArray.forEach((raceRound)=>console.log(raceRound,raceRound.Circuit.circuitName));*/

 
     }

   ).catch((err)=>{alert("failed season data request");
                  console.log(err)});
  };




  };




/* function to display F1 driver and race data */

function displayEvents(){

  console.log("button clicked");

  /* if birthday valid parse and submit to web api */

  date=formRef.elements['season'].value;
  console.log(date);

  if (date!=''){

    date=formRef.elements['season'].value;
    console.log(date);

    /* do a call to get events data */
/*
  fetch(zenURL+`04/02`)
  .then((res) => res.json())
  .then((data) => {
     console.log(data);
  }

  );
*/
fetch(`http://ergast.com/api/f1/2008/5/results.json`)
.then((res) => res.json())
.then((data) => {
   console.log(data);
   let f1obj=data;
}

).catch((err)=>alert("error in results fetch"));

 };




};


/*  populate the select input for years 1950-2022  */

for( let i=1950; i<2023; i++){

 htmlSelect+=`<option class="option" value="${i}">${i}</option>`; 

};

document.querySelector("#season").innerHTML=htmlSelect;



/* cache data for long term use */

/*cacheSeasonData();*/

/* assign an event listener for season select input change */

seasonRef.addEventListener('change',cacheSeasonData);

/* assign listener to button for submission */

buttonRef.addEventListener('click',displayEvents);






/*
fetch(`https://imdb-api.com/en/API/Top250Movies/${apiKey}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);

    if (!localStorage.getItem("Events")) {
      funcLocalData(data.items);
    }
    funcCreateCards();
  });*/

// Local copy of the data
funcLocalData = (events) => {
  let eventsData = [];

  events.map((ev) => {
    eventsData.push({
      /*id: m.id,
      image: m.image,
      title: m.title,
      year: m.year,
      imDbRating: m.imDbRating,
      likes: 0,
      comments: "",*/
    });
  });

  // console.log(movieData);
  localStorage.setItem("Events", JSON.stringify(eventsData));
};
// prettier-ignore
funcCreateCards = () => {
  let tempEventsData = JSON.parse(localStorage.getItem('Events'))
  let tempCardData = '';
  tempEventsData.map((eventObj) => {
    tempCardData += `<div class="dateDiv">
    <img
      src="${eventObj.image}"
      alt="${eventObj.title}"
    />
    <div class="dateEvent">
      <h2>${eventObj.title}</h2>
      <p>${eventObj.year}</p>
      <p>IMDB Rating: <span>${eventObj.imDbRating}</span></p>
      ${eventObj.comments ? `<p><span style="font-weight: bold">Comment: </span>${eventObj.comments}</p>` : ''}
      <div class="movieCardSocial">
        <a href="#" onClick="funcLike('${eventObj.id}')"><i class="fas fa-heart ${eventObj.likes ? 'likeHeart' : ''}"></i></a>
        <a href="https://www.imdb.com/title/${eventObj.id}/" target="_blank"><i class="fas fa-share-alt"></i></a>
        <a href="#" onClick="funcComment('${eventObj.id}')"><i class="fas fa-comment ${eventObj.comments ? 'commented' : ''}"></i></a>
      </div>
    </div>
  </div>`;
  });

  // console.log(tempCardData);
  /*document.querySelector('#contact_divs_container').innerHTML = tempCardData;*/
};

// Likes Clicked
funcLike = (i) => {
  // console.log(i);

  let movieData = JSON.parse(localStorage.getItem("MovieDataStored"));

  movieData = movieData.map((m) => {
    if (m.id === i) {
      m.likes += 1;
    }
    return m;
  });

  // console.log(movieData);

  movieData.sort(function (a, b) {
    return b.likes - a.likes;
  });

  localStorage.setItem("MovieDataStored", JSON.stringify(movieData));

  funcCreateCards();
};

// Submit A Comment
funcComment = (i) => {
  // console.log('comment', i);

  let movieData = JSON.parse(localStorage.getItem("MovieDataStored"));

  let tempComment = prompt("Please submit your comment");

  // console.log(tempComment);

  movieData = movieData.map((m) => {
    if (m.id === i) {
      m.comments = tempComment;
    }
    return m;
  });

  // console.log(movieData);

  localStorage.setItem("MovieDataStored", JSON.stringify(movieData));

  funcCreateCards();
};
