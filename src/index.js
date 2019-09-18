const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

// Question 1
// Given the following code list the order of console.logs:
//
// console.log("Hello")
//
// fetch('https://randomuser.me/api/')
//   .then( res => res.json() )
//   .then( data => {
//     console.log("Hi")
//   })
//
// console.log("Sup?")
// Question 2
// When fetchData is executed what will be console logged?
//
// function fetchData(){
//         let data = fetch('https://randomuser.me/api/')
//           .then( res => res.json() )
//           .then( res => res )
//         console.log(data)
// }
//
// fetchData()
// What will be console logged when the following code is run? Why?
//
// function fetchData(){
//         let data = fetch('https://randomuser.me/api/')
//           .then( res => res.json() )
//           .then( json => console.log(json) )
// }
//
// fetchData()
// What will be console logged when the following code is run? Why?
//
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( console.log )
}

fetchData()
// Question 3
// In your own words: what does asynchronous mean?
//
// Question 4
// Write out the request and response cycle. What is its purpose? How does it work?
//
// Question 5
// Check out the JSON you get from making a GET request to this url (https://randomuser.me/api/).
//
// Open up the Github repository for this reading and view the provided src/index.html file in the browser. In src/index.js, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.
