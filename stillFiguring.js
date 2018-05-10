import Airplane from './figuringItOut';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(element => {
    console.log("Fuel Capacity of "+ element['name']+ " : "+element['fuelCapacity']);
  })
}
displayFuelCapacity();

// import Airplane from './airplane';
// function displayFuelCapacity(){
//   Airplane.availableAirplanes.forEach(function(element){
//     console.log('Fuel Capacity of ' + element.name +':'+ element.fuelCapacity);
//   });
// }
// displayFuelCapacity();

// const Airplane = require('./figuringItOut.js');

// function displayAirplane() {
//   console.log('My airplane is called: ' + Airplane.myAirplane);
// }

// displayAirplane();
//==================

// const Airplane = require('./figuringItOut.js');
// console.log(Airplane.displayAirplane());
//=================
