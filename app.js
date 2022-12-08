'use strict';

// ***** GLOBALS *****
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allStores = [];
let tableSelector = document.getElementById('stores');

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
  this.cookiesBought = [];
  this.total = 0;
}

// ***** HELPER FUNCTIONS / UTILITES *****
function renderAll(){
  header();
  for(let i = 0; i < allStores.length; i++){

    allStores[i].custPerHr();
    allStores[i].cookieSales();
    allStores[i].render();
  }
  footer();
}

// ***** PROTOTYPE METHODS *****
Store.prototype.custPerHr = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
};
Store.prototype.cookieSales = function(){
  for(let i = 0; i < hours.length; i++){
    let cookiesNeeded = Math.round(this.custPerHr() * this.avgCookieBought);
    this.cookiesBought.push(cookiesNeeded);
    this.total += cookiesNeeded;
    // console.log(this.total);
    // console.log(this.cookiesBought);
  }
  console.log(this.total);
  console.log(this.cookiesBought);
};

Store.prototype.render = function(){
  let trElem = document.createElement('tr');
  let tdElem = document.createElement('td');
  tdElem.textContent = this.name;
  trElem.appendChild(tdElem);

  for( let i = 0; i < hours.length; i++){
    tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesBought[i];
    trElem.appendChild(tdElem);
  }
  tdElem = document.createElement('td');
  tdElem.textContent = this.total;
  trElem.appendChild(tdElem);
  tableSelector.appendChild(trElem);
};



// ***** EXECUTABLE CODE *****
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo   = new Store('Tokyo', 3, 24, 1.2);
let dubai   = new Store('Dubai', 11, 38, 3.7);
let paris   = new Store('Paris', 20, 38, 2.3);
let lima    = new Store('Lima', 2, 16, 4.6);
allStores.push(seattle, tokyo, dubai, paris, lima);
renderAll();


Store.prototype.footer;
function header(){
  let trElem = document.createElement('tr');
  tableSelector.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = 'Stores';
  trElem.appendChild(thElem);

  for(let i = 0; i < hours.length; i++){
    thElem = document.createElement('th');
    thElem.textContent = hours[i];
    trElem.appendChild(thElem);
  }
  thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trElem.appendChild(thElem);
}
// ***** Footer array calc *****
function footer(){
  let trElem = document.createElement('tr');
  tableSelector.appendChild(trElem);

  let thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trElem.appendChild(thElem);

  let storesArr = [seattle, tokyo, dubai, paris, lima];

  for(let i = 0; i < storesArr.length; i++){
    let total = 0;
    for(let j = 0; j < cookiesBought.length; j++){
      total += cookiesBought[j];
      thElem = document.createElement('th');
      thElem.textContent = hours[i];
      trElem.appendChild(thElem);
    }
  }
  thElem = document.createElement('th');
  thElem.textContent = 'Total';
  trElem.appendChild(thElem);
}

{/* <table>
  <tr>
    <td>Seattle</td>
    <td>Cookie Value</td>
    <td>Cookie Value</td>
    <td>Cookie Value</td>
    <td>Total</td>
  </tr>
</table> */}

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
//   }

//   function cookieSales(){
//     for(let i = 0; i < hours.length; i++){
//       let cookiesNeeded = this.custPerHr() * this.avgCookieBought;
//       this.cookiesBought.push(cookiesNeeded);
//       this.total += cookiesNeeded;
//     }
//   }

// function render(){
//   let trElem = document.createElement('tr');
//   let tdElem = document.createElement('td');
//   tdElem.textContent = this.name;
//   trElem.appendChild(tdElem);

//   for( let i = 0; i < hours.length; i++){
//     tdElem = document.createElement('td');
//     tdElem.textContent = this.cookiesBought[i];
//     trElem.appendChild(tdElem);
//   }

//   tdElem = document.createElement('td');
//   tdElem.textContent = this.total;
//   trElem.appendChild(tdElem);
//   tableSelector.appendChild(trElem);
// }

// function custPerHr(){
//   return Math.floor(Math.random() * (this.maxCust - this.minCust +1) + this.minCust);
// }

// function cookieSales(){
//   for(let i = 0; i < hours.length; i++){
//     let cookiesNeeded = Math.round(this.custPerHr() * this.avgCookieBought);
//     this.cookiesBought.push(cookiesNeeded);
//     this.total += cookiesNeeded;
//     // console.log(this.total);
//     // console.log(this.cookiesBought);
//   }
//   console.log(this.total);
//   console.log(this.cookiesBought);
// }

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
// seattle.custPerHr();
// seattle.cookieSales();
// seattle.render();
