//Create parent Class
class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents (value) {
    if(typeof value === 'String'){
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    } else {
      this._numberOfStudents = value;
    }
  }

  quickFacts(){
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[randInt];
  }
}

//Create Primary`School Class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//Create Medium School Class
class MediumSchool extends School{
  constructor(name,numberOfStudents){
    super(name,'medium',numberOfStudents);
  }
}

//Create High School Class
class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams,averageTestScores, schoolOverview){
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._averageTestScores = averageTestScores;
    this._schoolOverview = schoolOverview;
  }
  get sportsTeams() { console.log(this._sportsTeams);}
  get averageTestScores() { console.log(this._averageTestScores);}
  get schoolOverview() { console.log(this._schoolOverview);}
  set averageTestScores(avgTestScore) {
    if (typeof avgTestScore === 'number' && avgTestScore > 0){
    this._averageTestScores = avgTestScore;}
    else console.log(`The Average Test score should be a numeric and greater than zero!`); }
  set sportsTeams(inputSportsTeams) {
    this._sportsTeams.push(inputSportsTeams);
  }
}

//Create instances of Primary School and High School
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

// Calling the parent method quickFacts()
lorraineHansbury.quickFacts();

//Using static method of the parent class and logging to console
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//Create a high school instance 
const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 300,'Established in 1838, have been one of the prestigous schools in the country');
// Calling getter of HighSchool for sportsTeams
alSmith.sportsTeams;
// Calling parent class method
alSmith.quickFacts();
// Calling High School method
alSmith.schoolOverview;
// Setting up Average Test Score of High School
alSmith.averageTestScores = 750;
alSmith.averageTestScores;

// Creating instance of Medium School
const johnsonMedium = new MediumSchool('Johnson Medium School', 254);
johnsonMedium.name;
johnsonMedium.quickFacts();

//Creating a School Catalog which holds collection of schools
class SchoolCatalog {
  constructor(name){
    this._name = name;
    this._school = [];
  }
  get school(){return this._school;}
  set school(school){
    this._school.push(school);
  }
}

// Instantiating SchoolCatalog class
const addSchool = new SchoolCatalog('Add School');
// console.log(newMediumSchool.school);
addSchool.school = 'Al E. Smith';
addSchool.school = 'All Saints School';
addSchool.school = 'Lorraine Hansbury';

// Print out all school names
console.log(addSchool.school);
