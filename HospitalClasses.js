class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    get name(){
      return this._name;
    }
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;
    }
  
    static generatePassword() {
      const randomNumber = Math.floor(Math.random()*10000);
      return randomNumber;
    }
  
  }
  
  class Doctor extends HospitalEmployee {
    constructor(name, insurance) {
      super(name);
      this._insurance = insurance;
    }
  }
  
  class Nurse extends HospitalEmployee {
    constructor(name, certifications){
      super(name);
      this._certifications = certifications;
    }
    get certifications(){
      return this._certifications;
    }
    addCertification(cert){
      this._certifications.push(cert);
    }
  }
  
  class Surgeon {
    constructor(name, department) {
      this._name =  name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
  
    get name(){
      return this._name;
    }
  
    get department() {
      return this._department;
    }
  
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
  
    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;
    }
  
  }
  
  
  
  console.log("trial");
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
  console.log(surgeonCurry.name);
  console.log(surgeonCurry.remainingVacationDays);
  surgeonCurry.takeVacationDays(3);
  console.log(surgeonCurry.remainingVacationDays);
  
  const nurseOlynyk = new Nurse("Olynyk", ['Trauma', 'Pediatrics']);
  console.log("Before vacation: "+nurseOlynyk.remainingVacationDays);
  nurseOlynyk.takeVacationDays(5);
  console.log("After vacation: "+nurseOlynyk.remainingVacationDays);
  console.log("Certs: "+nurseOlynyk.certifications);
  nurseOlynyk.addCertification('Genetics');
  
  console.log("Certs: "+nurseOlynyk.certifications);
  console.log(HospitalEmployee.generatePassword());