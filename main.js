//1. Open the directory and create an index.html and main.js file to fetch a user and display 
//them one at at time
//2.Use the API: https://randomuser.me/api/ to fetch a user now
//3.Fetch a new user multiple times and store them in an array (for loop)
//4.Then list out all the users in your address book array by name and picture
//5.Fetch a new user multiple times and store them in an array
//6.Then list out all the users in your address book array by name and picture
//7.Figure out how to fetch multiple users in one fetch request
//8.Fetch multiple users on window load
//9.Add a button to each user that when clicked displays the rest of their information like DOB,
// address and so forth
//10.Once you have the functionality working, feel free to style and structure your address 
//book with CSS and HTML
let apiArray = [];
// fetch('https://randomuser.me/api/')
//   .then((response) => response.json())
//   .then((data) => apiArray.push(data));

//   let apiArray = [];
  
  for(let i = 1; i < 6; i++){
    let response = fetch('https://randomuser.me/api/');
    console.log(response)
  }
  console.log(apiArray)
//   fetch('https://randomuser.me/api/')
//   .then((response) => response.json())
//   .then((data) => apiArray.push(data));