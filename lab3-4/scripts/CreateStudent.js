"use strict";
		
let site = "http://localhost:8080";
let form = document.querySelector(".container").children[0];
form.addEventListener('submit', () => {toSubmit();} );

function toSubmit(){
	let texts = document.querySelectorAll(".name");
	let name = texts[0].children[0].value;
	let surname = texts[1].children[0].value;
	
	console.log(JSON.stringify( {
		"firstName":name,
		"lastName":surname,
		"course":"2"
	} ));

	fetch(site + '/students/', {
		    headers: {
		    	'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({ 
		    	"firstName":name,
		    	"lastName":surname,
		    	"course":"2"
			})
		})
		.then(function(res){  return res.json(); })
		.catch(function(res){ alert(res); });

	sleep(100);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

