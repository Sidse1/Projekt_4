

let sidebarWidth = 250; 


function openNav() {
  document.getElementById("mySidebar").style.width = sidebarWidth + "px";
  document.getElementById("main").style.marginRight = sidebarWidth + "px";
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}


let sidebarOpen = false; 

function toggleNav() {
  if (sidebarOpen) {
    closeNav(); 
    sidebarOpen = false;
  } else {
    openNav(); 
    sidebarOpen = true;
  }
}


for (let i = 0; i < 5; i++) {
  
  toggleNav();
}


let buttons = document.querySelectorAll('.sidebar-button'); 


buttons.forEach(button => {
  button.addEventListener('click', toggleNav);
});


function updateSidebarWidth(newWidth) {
  let sidebarWidth = newWidth; 
  document.getElementById("mySidebar").style.width = sidebarWidth + "px";
  document.getElementById("main").style.marginRight = sidebarWidth + "px";
}


let a = 5;
let b = '5';

if (a === b) {
  console.log('Variablerne er ens');
} else {
  console.log('Variablerne er ikke ens');
}


let message = 'Velkommen til vores hjemmeside!';
console.log(message);


document.getElementById('welcome-message').textContent = message;
