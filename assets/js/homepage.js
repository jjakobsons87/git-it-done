var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function(user) {
    // format the github api url 
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    // make a reqeust to the URL 
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

function formSubmitHandler(event) {
    event.preventDefault();
    // get value from input element 
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
    } else {
        alert("Please Enter a GitHub username")
    }
};

userFormEl.addEventListener("submit", formSubmitHandler);