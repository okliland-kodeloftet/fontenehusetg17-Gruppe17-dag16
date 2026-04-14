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