// nav menu Javascript here to save space and resources for user
console.log("work");
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav_active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();


/*|| Form || 
create empty array and object to hold customer data*/
let formInput = [];

const form = document.querySelector('.quotes');

// AddEventListener for submit

form.addEventListener('submit', event => {
    

// select elements for input value collection

let fname = document.querySelector('#fname').value;

let email = document.querySelector('#email').value;

let postcode = document.querySelector('#postcode').value;

let phone = document.querySelector('#phone').value;

const mailingList = document.querySelector('#mailing').value;

// validate email with Regular Expression that matches email addresses
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_ {|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

// check if name & email entered

if (fname === '' || email === '') {
    alert('Please enter your name and email');
} else if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');

} else {
    formInput.push({
        fname, email, postcode, phone, mailingList
    
    });

    // check with console log
    console.log(formInput);
    console.log(formInput.length);

    form.reset();

    alert('Form submitted successfully!');
}
});
