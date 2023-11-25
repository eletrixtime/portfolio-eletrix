// Code Konami
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiCodePosition = 0;

// Écouteur d'événements pour la touche
document.addEventListener('keydown', function (e) {
  // Vérifie si la touche correspond au code Konami
  if (e.key === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
    
    // Si le code Konami a été entièrement saisi
    if (konamiCodePosition === konamiCode.length) {
      // Redirige vers le site spécifié
      window.location.href = 'https://eletrixtimeyt.repl.co/scripts/cmd';
      
      // Réinitialise la position du code Konami pour permettre les utilisations ultérieures
      konamiCodePosition = 0;
    }
  } else {
    // Réinitialise la position si la touche ne correspond pas au code Konami
    konamiCodePosition = 0;
  }
});

//You can re-use the code with credit

//Koonami Code Example
//Created by eletrixtime 
//Website : https://eletrixtimeyt.repl.co