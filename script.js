console.log("Hello World!");

/* Hamburger meny logikken */
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", function () {
  console.log("Noe er klikket på");

  const navList = document.querySelector("#navList");
  console.log(navList);

  navList.classList.toggle("navHamburgerList");
});

//
//

/* Undervisning 16: JavaScript Conditions & Operators */


let alder = 18;

if(alder >=65) {
  console.log("Du er for gammel")
}

else if(alder >= 18) {
  console.log("Du er gammel nok.")
}

else{
  console.log("Du er ikke gammel nok")
}


let rolle = "admin";

if(rolle = "admin"){
  console.log("Admin bruker. Full rettigheter over systemet")
}

else if (rolle == "bruker"){
  console.log("Normal konto type, ikke alle rettigheter")
}

  else if(rolle == "gjest"){
    console.log("gjestebruker Begrensede rettigheter")
  }

  else {
    console.log("Ugyldig bruker. Blokker gateway")
  }



// ARRAYS
const matvareButikker = ["Rema", "Kiwi", "Extra", "Obs", "Bunnpris", "Meny"]
const valgtButikk = matvareButikker[0]
// [med tall inni, viser hvilken av de valgene den henter, 0=Rema, 1=Kiwi 2=Extra osv]

if(valgtButikk == "Rema"){
  console.log("Denne Butikken er 730m unna")
}

else if(valgtButikk == "Kiwi") {
  console.log("Denne Butikken er 1.3km unna")
}

else if(ValgtButikk == "Extra"){
console.log("Denne butikken er 15km unna")
}

else if(ValgtButikk == "Obs"){
console.log("Denne butikken er 4km unna")
}


else if(ValgtButikk == "Bunnpris"){
console.log("Denne butikken er 19km unna")
}

let poeng = "88";

if (poeng > 100 || poeng <0){
  console.log("ugyldig poengsum")
}

else if (poeng == 100){
  console.log("TOPPSCORE! Du får karakteren A+.")
}

else if (poeng >=90){
  console.log("Fantastisk! Du får karakteren A.")
}

else if (poeng >=80){
  console.log("Veldig bra! Du får karakteren B.")
}

else if (poeng >=70){
  console.log("Godkjent. Du får karakteren C")
}

else if (poeng >=60){
  console.log("Akkurat bestått. Du får karakteren D")
}

else if (poeng < 60){
  console.log("Beklager, du strøk. Du får karakteren F")
}

// undervisning 17 Javascript Arrays

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0])

cars[0] = "Subaru";

console.log(cars[0])

cars[3] = "Ferrari"
cars[4] = "Toyota"

console.log(cars)
console.log(cars.length)


// Objects

const pet = {
  name: "klypa", species: "Dog", isVacinated: true, breed: "Malamu", isFixed: false,
}

pet.isFixed = true; 

console.log(pet);
console.log(pet.name);

const person = {
  name: "Ola",
  age: 30,
  isStudent: false
}

console.log(person.name);
console.log(person);

const org = {
  name: "Fritidsklubben",
  totalMembers: 318,
  activities: ["Fotball", "Volleyball", "Cricket", "Frisbee", "Golf", "Svømming", "Gaming"],
 
  members: [
  {
    name: "Kristine",
    age: 19,
    paidFee: true,
    activities: ["Gaming"],
  },

  {
  name: "Ole",
  age:23,
  paidFee: true,
  activities:["Frisbee", "Golf"],
  },

  {
  name:"Nils",
  age: 22,
  paidFee: true,
  activities:["Fotball", "volleyball"],
  }

]}



console.log(org)

// basic array
const fruits = ["eple", "pære", "appelsin", "dragefrukt", "mango"];

console.log(fruits)
console.log(fruits.length)

fruits.pop();
console.log(fruits);

fruits.push("banan", "grapefrukt")

console.log(fruits)

// Array med Objects
const brukere = [
  { name: "Sam", age: 38,},

{name: "jon", age: 42},

{name: "jessica", age: 22},
]

console.log(brukere)

console.log(brukere[0])


// Object med array

const newPerson = {
  name: "Dina",
  hobbies: ["Strikking", "Lesing", "Matlaging", "Sykling"]
}

console.log(newPerson);
console.log(newPerson.hobbies);
console.log(newPerson.hobbies[3]);



// Oppgave 

const matretter = ["Pizza", "Hamburger", "Pasta", "Hummer",  "Kanari" ]
matretter.pop()
matretter.push("Salat")

console.log(matretter)

const bok = {
  tittel: "Det er boka mi", forfatter: "Nils Nilsen", sider: 123, sjangre: ["SciFi", "Fantasy", "Drama", "Horror", "Komedie"],
}

console.log(bok)

const pets = [
  {
    name: "Snowball",
    age: 4,
    species: "Katt",
    isFixed: false,
  },
  {
    name: "Snowball 2",
    age: 3,
    species: "Katt",
    isFixed: true,
  },
  {
    name: "Santas little Helper",
    age: 3,
    species: "Hund",
    isFixed: true,
  }

]

console.log(pets)

const student = {
  navn: "Harry Potter",
  klasse: "Gryffindor",
  classes: ["Trolldom", "Wizzarding", "Sånn greie der de kjører kosteskaft og henter en ting", "Matte", "Spells"]
};

console.log(student)

const skoler = [ {
  name:"Gryffindor",
  antallStudenter: 22,
  harSvømmebasseng: false,} ,

{
  name:"Hufflepuff",
  antallStudenter: 33,
  harSvømmebasseng: false,
  Lærere: [
  {Name: "Severus Snape", classes:"Potions and stuff"},
  {Name: "Pomona Sprout", classes: "Herbology"},
  {Name: "Filius Flitwick", classes: "Charms"},
],},

{
  name:"Ravenclaw",
  antallStudenter: 44,
  harSvømmebasseng: false},

]

console.log(skoler)

// OBject = {} Array =[]




// Undervisning 18: Javascript LOOPS


// FOR loop (for()3 Expressions(1.let i(iterasjon som blir oppdatert) 2.condition)) deretter { hva som skal skje}
// Standard loop
for (let i = 0; i < 5; i++) {
  console.log(i)
}




console.log("neste eksempel Break loop")

// Break-loop eksempel

for(let i = 0; i < 10; i++) {
  if(i === 5) {
    break
  }
  else{
    console.log(i);
  }

}

// Continue loop

console.log("Continue loop")

for(let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  // else {"(} erlenger nede"
    console.log(i)
}

// While loop eksempel

console.log("Neste eksempel: While loop")

let i = 0;

while(i < 5) {
  console.log(i);
  i++;
}

// continue in while loop

console.log("Continue in while loop")

let y = 0; 

while(y < 5){
  y++
  if (y === 3) {
    continue
  }
  console.log(y)
  
}

// do WHILe(kjører minst en gang, men kan gå flere ganger)

console.log("Do while loop")

let x = 10;

do{
  console.log(x);
}
while ( x < 5);


// loop gjennom array

console.log("ForEach eksempel");

const frukter = ["eple", "banan", "pære", "appelsin"];

frukter.forEach(function(frukt){
  console.log("FRUKTER: " + frukt);
})

// 
console.log("Return eksempel med forEach:")

frukter.forEach(function(frukt){
  if(frukt === "banan"){
    return;
  }
  console.log(frukt);
});



// Mini Oppgave Continue hopper over denne iterasjonen, mens BREAK avslutter hele loopen(inkludert det tallet som den står på)

for(let i = 1; i <= 10; i++) {
  if(i === 5){
    continue;
  }
  else if (i === 8){
    break;
  }
  console.log(i);
}




// Oppgaver

// Oppgave 1: Oppgave 1: Lag en For-loop som teller fra 1 til 5 (MERK: Ikke 0)

console.log("OPPGAVER:")

console.log("Oppgave1:")

for (let o = 1; o < 6; o++) {
  console.log(o)
}

// Oppgave 2: Oppgave 2: Lag en For-loop som teller baklengs fra 5 til 1

console.log("Oppgave 2:")

for(let o = 5; o > 0 ; o--) {
  console.log(o)
}

// Oppgave 3: Lag en While-loop som har condition å telle fra 2 til 8, men hopper over 3 og 6. (Continue)

console.log("Oppgave 3:")



for(let o = 2; o <= 8; o++) {
  if( o===3){
    continue;
  }
  if(o===6){
    continue;
  }
  console.log(o);
}

// Oppgave 4: Lag en Do-While Loop som har condition å telle fra 0 til 10, men avsluttes på 4. (Break)

console.log("Oppgave 4:")

for(let o = 0; o < 10; o++) {
  if(o === 5){
    break;
  }
  console.log(o);
}

// Oppgave 5: Lag en liste med 5 navn. Ved bruk av forEach, log ut hvert navn i konsollen, men med teksten "Navn: " foran. Så det skal for eksempel se slikt ut i konsollen: "Navn: Jonas".

console.log("Oppgave 5")

const navner = ["Jonas", "Nils" ,"Narve","Nomrik","Nasse"];

navner.forEach (function(navn){
  console.log("NAVN: " + navn)
})

// Bonusoppgaver

// Oppgave 6: Bruk en For-loop til å skrive ut alle partall fra 0 til 20.
// +=2 gjør at den hopper to tall for hver gang, noe som gjør at den kun kjører partall, men strengt tatt ikke vet selv at det faktisk kun er partall den kjører

for (let i = 0; i <= 20; i += 2) {
	console.log(i);
}




// Oppgave 7: Lag en loop som regner summen av tallene fra 1 til 8
// Startsummen er 0, deretter blir variabelen(o)

console.log("Oppgave: 7")

let sum = 0;
for (let o = 1; o <= 8; o++) {
	sum += o;
}

console.log(sum);


// Oppgave 8: Bruk en loop inni en annen loop til å skrive ut dette i konsollen: 1-1 1-2 2-1 2-2 3-1 3-2


// Vise Arrays på nettsiden

const biler = ["BMW", "volvo", "bughatti"];

console.log(biler[0])

const paragraph = document.createElement("p")

paragraph.textContent = biler[0];

const body2 = document.querySelector("#biler")

body2.appendChild(paragraph)


const alleBiler = ["BMW", "volvo", "bughatti"];
const body3 = document.querySelector("#biler");

alleBiler.forEach(function(biler){
  const p = document.createElement("p");
  p.textContent = biler;
  body3.appendChild(paragraph);
});



// Oppgave 1 Ved bruk av denne arrayen: const numbers = [1, 2, 3, 4, 5, 6]; Skriv ut kun partall i fra den

// console.log("oppgave 1 Undervisning 19")

const numbers = [1, 2, 3, 4, 5, 6];

// for (let q = 0; q < numbers.length; q++) {
//   if(numbers[q] % 2 === 0){
//     console.log(numbers[q])
//   }
// }

console.log("Oppgave 2")

let largest = numbers[0]

for(let q = 1; q < numbers.length; q++)
{
  if (numbers[q] > largest){
    largest = numbers[q];
  }
}

console.log(largest);


const names2 = ["Ola", "Kari", "Ola", "Per"];

let count = 0;

for(let q = 0; q < names2.length; q++){
  if (names2[q] === "Ola"){
    count++;
  }
}

console.log("Antall ganger Ola forekommer: " + count)

console.log("demonstrasjon av MAP")

// Array MAP

const doubled = numbers.map(function(num)
{
  return num *2
}

);
console.log(numbers)
console.log(doubled);


// Oppgave 4
// Ved bruk av dette arrayet:
// const priser = [100, 200, 300]
// Bruk .map() til å opprette et nytt array der alle prisene har inkluderer 25% moms

const priser = [100, 200, 300];

const nyePriser = priser.map(function(moms2)
{
  return moms2 * 1.25
});

console.log(nyePriser)


//Oppgave 5
// Du har følgende array:
const navn = ["Ole", "Per", "Thomas", "Jens"];
// Ved bruk av .includes() metoden, print ut i konsollen om navnet "Jens" forekommer, og i tilleg om "Henriette" forekommer i arrayet.

console.log(navn.includes("Jens"))
console.log(navn.includes("Henriette"))

console.log("Oppgave 6");

/* Bonus oppgave
Opprett en liste "users" med tre objekter. Dem skal hver ha et navn og alder. Ved bruk av .map, returner en ny array som inkluderer kun navnene dems. */

console.assert.og("bonus oppgave")

const users = [
  {names: "nils", ages: 22},
  {names: "olaf", ages: 33},
  {names: "gaute", ages: 23},
];



const justNames = users.map(functions(user)
{
  return users.justNames;
}
)
console.log(justNames)
;


