// "use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");
// console.log(countriesContainer);

// // const html = `<article class="country abc">
// // <img class="country__img" src="" />
// // <div class="country__data">
// // <h3 class="country__name">COUNTRY1</h3>
// // <h4 class="country__region">REGION</h4>
// // <p class="country__row"><span>👫</span>POP people</p>
// // <p class="country__row"><span>🗣️</span>LANG</p>
// // <p class="country__row"><span>💰</span>CUR</p>
// // </div>
// // </article>`;
// // ///////////////////////////////////////
// // countriesContainer.insertAdjacentHTML('beforeend', html);
// // let a = document.querySelector('.abc');
// // let a1 = document.querySelector('.qwe');
// // console.log(a);
// // console.log(a1);
// // // countriesContainer.removeChild(a);
// // countriesContainer.removeChild(a1);
// // countriesContainer.removeChild(a);
// // console.log(countriesContainer);

// let imgc = document.querySelector(".country__img");
// imgc.src = "https://flagcdn.com/w320/us.png";

// // imgc.addEventListener('load', function () {
// //   setTimeout(function()
// //   {}, 3000);
// //   console.log('img loaded');
// // });
// console.log("world");

// setTimeout(function () {
//   console.log("for 2 sec");
// }, 0);
// console.log("helo");


'use strict';

let countriesContainer = document.querySelector('.countries');

function renderCountry(jsonObj){
let htmlString = `<article class="country ">
            <img class="country__img" src="${jsonObj.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${jsonObj.name.common}</h3>
              <h4 class="country__region">${jsonObj.region}</h4>
              <p class="country__row"><span>👫</span>${
                jsonObj.population / 1000000
              } M</p>
              <p class="country__row"><span>🗣️</span>${
                jsonObj.languages.eng
              }</p>eng
              <p class="country__row"><span>💰</span>${jsonObj.altSpellings}</p>
            </div>
          </article>`;
              
    countriesContainer.insertAdjacentHTML("beforeend", htmlString);
}

let request = fetch('https://restcountries.com/v3.1/name/canada')
  .then(function (fullfilled) {
    // console.log(fullfilled);
    return fullfilled.json(); // promise
  })
  .then(function (data) {
    let jsonObj = data[0];
    // console.log(jsonObj);
    renderCountry(jsonObj);
    console.log(jsonObj.borders);

    let neighbour = jsonObj.borders;
    if(neighbour == undefined){
        throw new error(`${jsonObj.name.common} Neighbour not available`)
    }
    neighbour = jsonObj.borders[0];
    return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
  })
  .then(function (fullfilled){
    // console.log(fullfilled);
    return fullfilled.json();
  })

  .then(function (jsonObj1){
    let jsonObj = jsonObj1[0];
    // console.log(jsonObj);
    renderCountry(jsonObj);
  }).
  catch(function (error) {
    console.log(error.message);
    });



/* function countryCard(countryName) {
  // create a req object
  let request = new XMLHttpRequest();

  // open a connection
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);

  // HTTP CRUD
  // GET PUT POST DELETE

  // send
  request.send(); // no answer

  // log
  console.log(request.responseText);

  request.addEventListener('load', function () {
    // console.log(request.responseText);

    let jsonObj = JSON.parse(request.responseText)[0];
    console.log(jsonObj);

    let htmlString = `<article class="country ">
            <img class="country__img" src="${jsonObj.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${jsonObj.name.common}</h3>
              <h4 class="country__region">${jsonObj.region}</h4>
              <p class="country__row"><span>👫</span>${
                jsonObj.population / 1000000
              } M</p>
              <p class="country__row"><span>🗣️</span>${
                jsonObj.languages.eng
              }</p>eng
              <p class="country__row"><span>💰</span>${jsonObj.altSpellings}</p>
            </div>
          </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', htmlString);
  });
}

countryCard('canada');
countryCard('USA');
countryCard('Germany');
countryCard('INdia'); */