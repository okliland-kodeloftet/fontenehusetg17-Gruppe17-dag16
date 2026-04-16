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