// let Airplane = {};

  let availableAirplanes = [
    {name:'AeroJet', fuelCapacity:800, availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance','sensorOperators']},
    {name:'SkyJet', fuelCapacity:500, availableStaff: ['pilots', 'flightAttendants']}
  ];
  let flightRequirements= {
    requiredStaff: 4
  };
  function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length>=requiredStaff){
      return true;
    }
  }


export {availableAirplanes, flightRequirements, meetsStaffRequirements};
console.log(meetsStaffRequirements(availableAirplanes[0].availableStaff, flightRequirements.requiredStaff));




// let Airplane = {};
// Airplane.myAirplane = "StarJet";
// module.exports = Airplane;
//========
// let Airplane = {};

// module.exports = {
//   myAirplane: "CloudJet",
//   displayAirplane: function() {
//     return this.myAirplane;
//   }
// };
//=============

