const btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  getPerson(getData);
});

// Callback for getPerson 
function getPerson(callback) {
  const url = `https://randomuser.me/api/`;
  const ajax = new XMLHttpRequest();
  ajax.open("GET", url, true);

  ajax.onload = function() {
    if (this.status === 200) {
      callback(this.responseText, showData);
    } else {
      console.log(this.statusText);
    }
};

ajax.onerror = function() {
  console.log("An error happened.");
};
ajax.send();
}

function getData(response, callback) {
  const data = JSON.parse(response);

// Get data from response
const {
  name: { first },
  name: { last },
  picture: { large },
  location: { city },
  phone,
  email
} = data.results[0];

callback(first, last, large, city, phone, email);
}

// Show data once pulled
function showData(first, last, large, city, phone, email) {
  document.getElementById("first").textContent = first;
  document.getElementById("last").textContent = last;
  document.getElementById("photo").src = large;
  document.getElementById("city").textContent = city;
  document.getElementById("phone").textContent = phone;
  document.getElementById("email").textContent = email;
}