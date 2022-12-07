'use strict';

// ***** GLOBALS *****

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// ***** DOM WINDOWS *****

// STEP 1: WINDOW INTO THE DOM
// STEP 2: CREAT AN ELEMENT
// STEP 3: GIVE CONTEXT
// STEP4: ADD IT TO THE DOM parent.appendChild(child)
let storeSection = document.getElementById('stores');


// ***** HELPER FUNCTIONS / UTILITES *****
function salesTraffic(minCust, maxCust, avgCookiesBought){
  for(let i = 0; i < hours.length; i++){
    let custCount = Math.floor(Math.random() * (maxCust - minCust +1) + minCust);
    avgCookiesBought = [custCount * avgCookiesBought];
  }
  return [avgCookiesBought];
}

// ***** EXECUTABLE CODE *****

// ***** OBJECT LIERALS *****
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieBought: 6.3,
  cookiesBought: [],
  total: 0,
  custPerHr: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
  },
  cookieSales: function(){
    for(let i = 0; i < hours.length; i++){
      let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
      this.cookiesBought.push(cookiesNeeded);
      this.total += cookiesNeeded;
    }
  },
  render: function(){
    let ulElem = document.createElement('ul');
    storeSection.appendChild(ulElem);
    for(let i = 0; i < this.cookiesBought.length; i++){
      ulElem.textContent = this.cookieSales[i];
      let liElem = document.createElement('li');
      liElem.textContent = this.cookiesBought[i];
      ulElem.appendChild(liElem);
    }
  }
};

seattle.render();

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieBought: 1.2,
  cookiesBought: [],
};

let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieBought: 3.7,
  cookiesBought: [],
};

let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieBought: 2.3,
  cookiesBought: [],
};

let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieBought: 4.6,
  cookiesBought: [],
};
