let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}


// todo-list
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Ouch! Looks like you forgot to add your work.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("listData", listContainer.innerHTML);
}

function loadData(){
    let data = localStorage.getItem("listData");
    if(data){
        listContainer.innerHTML = data;
    }
}

loadData();

// timetable

if (localStorage.getItem('timetableData')) {
    document.getElementById('time-table').innerHTML += localStorage.getItem('timetableData');
}

function addSchedule() {
    var time = document.getElementById('time').value;
    var subject = document.getElementById('subject').value;

    var newRow = '<tr><td>' + time + '</td><td>' + subject + '</td><td><button onclick="removeSchedule(this)">Delete</button></td></tr>';

    document.getElementById('time-table').innerHTML += newRow;

    localStorage.setItem('timetableData', document.getElementById('time-table').innerHTML);

    document.getElementById('time').value = '';
    document.getElementById('subject').value = '';
}

function removeSchedule(button) {
    var row = button.parentNode.parentNode;

    row.parentNode.removeChild(row);

    localStorage.setItem('timetableData', document.getElementById('time-table').innerHTML);
}



// update profile

function saveChanges() {
    var newName = document.getElementById("newName").value;
    var newAddress = document.getElementById("newAddress").value;
    var newEmail = document.getElementById("newEmail").value;
    var newNumber = document.getElementById("newNumber").value;


    localStorage.setItem("newName", newName);
    localStorage.setItem("newAddress", newAddress);
    localStorage.setItem("newEmail", newEmail);
    localStorage.setItem("newNumber", newNumber);

    
    window.location.href = "profile.html";
}
var newName = localStorage.getItem("newName");
   var newAddress = localStorage.getItem("newAddress");
   var newEmail = localStorage.getItem("newEmail");
   var newNumber = localStorage.getItem("newNumber");


   var dataDiv = document.querySelector('.data');
   dataDiv.innerHTML = `
       <h3>My Profile</h3>
       <p>Name: ${newName}</p>
       <p>Address: ${newAddress}</p>
       <p>Email: ${newEmail}</p>
       <p>Phone Number: ${newNumber}</p>
    
   `;



// chat room
function sendMessage() {
    var messageInput = document.getElementById('message-input');
    var message = messageInput.value;
  
    if (message.trim() !== '') {
      var chatMessages = document.getElementById('chat-messages');
      var newMessage = document.createElement('div');
      newMessage.textContent = message;
      chatMessages.appendChild(newMessage);
  

      messageInput.value = '';
  

    }
  }
  function clearChat() {
    var chatMessages = document.getElementById('chat-messages');
  

    while (chatMessages.firstChild) {
      chatMessages.removeChild(chatMessages.firstChild);
    }
  }  