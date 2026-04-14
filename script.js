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
