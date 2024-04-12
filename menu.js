
// Variabel definition
let sidebarWidth = 250; // Definerer bredden af sidebaren

// Funktion for at åbne sidebaren
function openNav() {
  document.getElementById("mySidebar").style.width = sidebarWidth + "px";
  document.getElementById("main").style.marginRight = sidebarWidth + "px";
}

// Funktion for at lukke sidebaren
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

// Kontrolstruktur til at bestemme, om sidebaren er åben eller lukket
let sidebarOpen = false; // Boolean-data der indikerer om sidebaren er åben eller lukket

function toggleNav() {
  if (sidebarOpen) {
    closeNav(); // Lukker sidebaren hvis den er åben
    sidebarOpen = false;
  } else {
    openNav(); // Åbner sidebaren hvis den er lukket
    sidebarOpen = true;
  }
}

// Loop for at ændre bredden af sidebaren ved gentagen klik
for (let i = 0; i < 5; i++) {
  // Simulerer fem klik på en knap og vekselvis åbner og lukker sidebaren
  toggleNav();
}

// Arrays: Eksempel på brug af array til at gemme flere DOM-elementer
let buttons = document.querySelectorAll('.sidebar-button'); // Gemmer referencer til knapper i et array

// Event: Tilføj eventlisteners til knapperne for at åbne/lukke sidebaren
buttons.forEach(button => {
  button.addEventListener('click', toggleNav);
});

// Scope: Eksempel på variabeldefinering i et lokalt scope
function updateSidebarWidth(newWidth) {
  let sidebarWidth = newWidth; // Variabel defineret i det lokale scope af funktionen
  document.getElementById("mySidebar").style.width = sidebarWidth + "px";
  document.getElementById("main").style.marginRight = sidebarWidth + "px";
}

// === == (matematisk operator): Eksempel på brug af sammenligningsoperator
let a = 5;
let b = '5';

if (a === b) {
  console.log('Variablerne er ens');
} else {
  console.log('Variablerne er ikke ens');
}

// Data typer (Numbers string/tekst): Eksempel på manipulering af tekstdata
let message = 'Velkommen til vores hjemmeside!';
console.log(message);

// DOM: Eksempel på ændring af tekstindholdet i et element
document.getElementById('welcome-message').textContent = message;
