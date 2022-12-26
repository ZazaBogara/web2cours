let site = "http://localhost:8080";
let idToEdit = window.localStorage.getItem("idToEdit");
let form = document.querySelector(".container").children[0];
form.addEventListener('submit', () => {toSubmit();} );


fetch(site + '/students/'+ idToEdit)
	.then(response => response.json())
	.then(val => {
	   	let name = val.firstName.slice();
	   	let surname = val.lastName;
	   	writePlaceHolders(name, surname);
	});

function writePlaceHolders(name, surname){
	names = document.querySelectorAll(".name");
	names[0].children[0].placeholder = name;
	names[1].children[0].placeholder = surname;
}

function toSubmit(){
	let texts = document.querySelectorAll(".name");
	let name = texts[0].children[0].value;
	let surname = texts[1].children[0].value;
	
	fetch(site + '/students/' + idToEdit, {
		    headers: {
		    	'Content-Type': 'application/json'
		    },
		    method: "PUT",
		    body: JSON.stringify({ 
		    	"firstName":name,
		    	"lastName":surname,
		    	"course":"2"
			})
		})
		.then(function(res){  return res.json(); })
		.catch(function(res){ alert(res); });

	sleep(20);
	
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

