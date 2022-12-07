'use strict';

// ***** GLOBALS *****

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let allStores = [];

// ***** DOM WINDOWS *****

// STEP 1: WINDOW INTO THE DOM
// STEP 2: CREAT AN ELEMENT
// STEP 3: GIVE CONTEXT
// STEP4: ADD IT TO THE DOM parent.appendChild(child)
let storeSection = document.getElementById('stores');

// ***** CONSTRUCTOR FUNCTIONS *****
function Store(name, minCust, maxCust, avgCookieBought){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieBought = avgCookieBought;
  this.cookiesBought = [0];
  this.total = 0;
}
// ***** HELPER FUNCTIONS / UTILITES *****

// ***** PROTOTYPE METHODS *****
Store.prototype.custPerHr = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
};
Store.prototype.cookieSales = function(){
  for(let i = 0; i < hours.length; i++){
    let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
    this.cookiesBought.push(cookiesNeeded);
    this.total += cookiesNeeded;
  }
};
Store.prototype.render = function(){
  let ulElem = document.createElement('ul');
  storeSection.appendChild(ulElem);
  for(let i = 0; i < this.cookiesBought.length; i++){
    ulElem.textContent = this.cookieSales[i];
    let liElem = document.createElement('li');
    liElem.textContent = this.cookiesBought[i];
    ulElem.appendChild(liElem);
  }

  let pElem = document.createElement('p');
  pElem.textContent = '${hours[i]: ${this.cookiesBought[i]} cookies';

};

// ***** EXECUTABLE CODE *****
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

allStores.push(seattle, tokyo, dubai, paris, lima);

function renderAll(){
  for(let i = 0; i < allStores.length; i++){
    allStores[i].custPerHr();
    allStores[i].cookieSales();
    allStores[i].render();
  }
}
renderAll();


// // ***** OBJECT LIERALS *****
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieBought: 6.3,
//   cookiesBought: [],
//   total: 0,
//   custPerHr: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
//   },
//   cookieSales: function(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total += cookiesNeeded;
//     }
//   },
//   render: function(){
//     let ulElem = document.createElement('ul');
//     storeSection.appendChild(ulElem);
//     for(let i = 0; i < this.cookiesBought.length; i++){
//       ulElem.textContent = this.cookieSales[i];
//       let liElem = document.createElement('li');
//       liElem.textContent = this.cookiesBought[i];
//       ulElem.appendChild(liElem);
//     }

//     let pElem = document.createElement('p');
//     pElem.textContent = '${hours[i]: ${this.cookiesBought[i]} cookies'
//   }
// };


// let tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieBought: 1.2,
//   cookiesBought: [],
// };

// let dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieBought: 3.7,
//   cookiesBought: [],
// };

// let paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieBought: 2.3,
//   cookiesBought: [],
// };

// let lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieBought: 4.6,
//   cookiesBought: [],
// }
