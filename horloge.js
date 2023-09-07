//fonction pôur afficher l'heure
clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  //transformation heure, minute et seconde en degré
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  //afficher
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;
}
//interval pour faire fonctionner les secondes
setInterval(clock, 1000);