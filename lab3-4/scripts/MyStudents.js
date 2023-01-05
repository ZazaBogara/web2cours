"use strict";

let site = "http://localhost:8080";
let groupContainer = document.querySelector(".right_section");
let groups = document.querySelectorAll(".group");
let deafaultWindows = groups;

const checkbox = document.querySelector(".checkbox");
checkbox.addEventListener('click', () => { if(checkbox.checked == true) sortWindows(); else setDeafaultWindows();}) ;

const countButton = document.querySelector(".count");
countButton.addEventListener('click', () => { document.querySelector(".total").innerText = "Total amount: " + groups.length; });

const searchByNameButton = document.querySelector(".search");
searchByNameButton.addEventListener('click', () => {searchByName();})

const clearWindowsButton = document.querySelector(".clear");
clearWindowsButton.addEventListener('click', () => {clearWindows();})

let deleteButtons = document.querySelectorAll(".remove");

function deleteElement(id){	
	sleep(10);
	fetch(site + '/students/'+ id, {
		method: "DELETE"
	});
	sleep(10);
	clearWindows();
}
function deleteAllGroups(){
	groups.forEach((val)=>{
		val.remove();
		groups = document.querySelectorAll(".group");
		deafaultWindows = groups;
	});
}
function addGroup(name){
	insertAfter(groupContainer.lastChild, createGroupElement(name));
	groups = document.querySelectorAll(".group");
	deafaultWindows = groups;
}
function createGroupElement(name){
	let out = document.createElement("div");
	out.classList.add("group");
	out.insertBefore(document.createElement("img"), out.nextSibling);
	out.children[0].src = "avatars/ava1.jpg";


	out.insertBefore(document.createElement("div"), out.nextSibling);
	out.children[1].classList.add("text_in_group");
	out.children[1].innerText = name;


	out.insertBefore(document.createElement("a"), out.nextSibling);
	out.children[2].href = "EditStudent.html";
	out.children[2].insertBefore(document.createElement("button"), out.children[2].firstChild);
	out.children[2].children[0].classList.add("edit");
	out.children[2].children[0].innerText = "Edit";
	out.children[2].children[0].addEventListener('click', () =>{
		let val = out.children[3];
		let idToEdit = +val.parentNode.children[1].innerText.split(' - ')[1];
		window.localStorage.setItem("idToEdit",idToEdit);
	})
	

	out.insertBefore(document.createElement("button"), out.nextSibling);
	out.children[3].classList.add("remove");
	out.children[3].innerText = "Remove";
	out.children[3].addEventListener('click', () =>{
		let val = out.children[3];
		let idToDelete = +val.parentNode.children[1].innerText.split(' - ')[1];
		deleteElement(idToDelete);
	})
	return out;
}
function insertAfter(referenceNode, newNode) {
	referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


function searchByName(){
	let id = document.querySelector("header").children[1].children[0].value;
	fetch(site + '/students/'+ id)
		.then(response => response.json())
	    .then(val => {
	    	console.log(val);
	    	let name = val["firstName"] + ' ' + val["lastName"] + ' - ' + val["id"] ; 
	    	if(+id != 0){
				deleteAllGroups();
				addGroup(name);
			}
	    });
	
}

function clearWindows(){
	deleteAllGroups();
	let out;
	fetch(site + '/students')
		.then(response => response.json())
	    .then(text => {text.forEach(val => {addGroup(val["firstName"] + ' ' + val["lastName"] + ' - ' + val["id"])})} );
	sleep(20);
}


function sortWindows(){
	function compareFunc(a, b){
		if(a.children[1].innerText > b.children[1].innerText) return 1;
		else return -1;
	}
	function appendFunc(val){
		groupContainer.appendChild(val);
	}
	[].slice.call(groups).sort(compareFunc).forEach(appendFunc);//slice - to make ArrayList fron NodeList (in this way u can use sort function) 
}
function setDeafaultWindows(){
	deafaultWindows.forEach((val) => {
		groupContainer.appendChild(val);
	});
}


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
