const url ='https://randomuser.me/api/?results=3';

let avatar = document.getElementById('avatar');
let fullname = document.getElementById('fullname');
let email = document.getElementById('email');
let username = document.getElementById('username');
let btn = document.getElementById('btn');
let date = document.getElementById('date');
let cell = document.getElementById('cell');
let street = document.getElementById('street');
let city = document.getElementById('city');
let postcountry = document.getElementById('postcountry');

let avatar1 = document.getElementById('avatar1');
let fullname1 = document.getElementById('fullname1');
let email1 = document.getElementById('email1');
let username1 = document.getElementById('username1');
let date1 = document.getElementById('date1');
let cell1 = document.getElementById('cell1');
let street1 = document.getElementById('street1');
let city1 = document.getElementById('city1');
let postcountry1 = document.getElementById('postcountry1');

let avatar2 = document.getElementById('avatar2');
let fullname2 = document.getElementById('fullname2');
let email2 = document.getElementById('email2');
let username2 = document.getElementById('username2');
let date2 = document.getElementById('date2');
let cell2 = document.getElementById('cell2');
let street2 = document.getElementById('street2');
let city2 = document.getElementById('city2');
let postcountry2 = document.getElementById('postcountry2');


btn.addEventListener("click", function () {
        fetch(url)
            .then(parseJSON)
            .then(updateProfile)
});

function parseJSON (res){
    return res.json();
}

function updateProfile (profile){
    avatar.src = profile.results[0].picture.medium;
    fullname.innerHTML = profile.results[0].name.title +" "+profile.results[0].name.first +" "+profile.results[0].name.last;
    email.innerHTML = profile.results[0].email;
    username.innerHTML = profile.results[0].login.username;
    date.innerHTML = profile.results[0].dob.date;
    cell.innerHTML = profile.results[0].cell;
    street.innerHTML = profile.results[0].location.street.number +" "+profile.results[0].location.street.name;
    city.innerHTML = profile.results[0].location.city;
    postcountry.innerHTML = profile.results[0].location.postcode +" "+ profile.results[0].location.state;

    avatar1.src = profile.results[1].picture.medium;
    fullname1.innerHTML = profile.results[1].name.title +" "+profile.results[1].name.first +" "+profile.results[1].name.last;
    email1.innerHTML = profile.results[1].email;
    username1.innerHTML = profile.results[1].login.username;
    date1.innerHTML = profile.results[1].dob.date;
    cell1.innerHTML = profile.results[1].cell;
    street1.innerHTML = profile.results[1].location.street.number +" "+profile.results[1].location.street.name;
    city1.innerHTML = profile.results[1].location.city;
    postcountry1.innerHTML = profile.results[1].location.postcode +" "+ profile.results[1].location.state;

    avatar2.src = profile.results[2].picture.medium;
    fullname2.innerHTML = profile.results[2].name.title +" "+profile.results[2].name.first +" "+profile.results[2].name.last;
    email2.innerHTML = profile.results[2].email;
    username2.innerHTML = profile.results[2].login.username;
    date2.innerHTML = profile.results[2].dob.date;
    cell2.innerHTML = profile.results[2].cell;
    street2.innerHTML = profile.results[2].location.street.number +" "+profile.results[2].location.street.name;
    city2.innerHTML = profile.results[2].location.city;
    postcountry2.innerHTML = profile.results[2].location.postcode +" "+ profile.results[2].location.state;
    return 1;
}