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

const getMultipleUsers = () => {
  fetch("https://randomuser.me/api/?results=4")
    .then((response) => response.json())
    .then((data) => apiArray.push(data));
  console.log(apiArray);
  return apiArray;
};

const logUsers = () => {
  console.log(getMultipleUsers());
};

const displayUsers = () => {
  const addressBook = document.getElementById("addressBook");
  for (let i = 0; i < 5; i++) {
    let p = document.createElement("p");
    let li = document.createElement("li");
    let article = document.createElement("article");
    let articleText = document.createTextNode(
      `Email: ${apiArray[0].results[i].email} Gender: ${apiArray[0].results[i].gender}`
    );
    article.appendChild(articleText);
    li.id = `li${i}`;
    let contacts = document.createTextNode(
      `Name: ${apiArray[0].results[i].name.first}`
    );
    let img = document.createElement("img");
    img.src = apiArray[0].results[i].picture.large;
    let br = document.createElement("br");
    const button = document.createElement("button");
    button.innerHTML = "Show more";

    p.appendChild(contacts);
    p.appendChild(br);
    p.appendChild(img);
    li.append(p);
    li.append(article);
    // article.style.visibility = "hidden";
    li.append(button);

    addressBook.append(li);

    addressBook.style.listStyle = "none";
    button.onclick = function () {
      if ((article.style.display = "none")) {
        article.style.display = "inline";
      } else {
        article.style.display = "none";
      }
    };
  }
};

//8.Fetch multiple users on window load

//9.Add a button to each user that when clicked displays the rest of their information like DOB,
// address and so forth
//10.Once you have the functionality working, feel free to style and structure your address
//book with CSS and HTML

window.onload(getMultipleUsers());
window.onload(displayUsers());