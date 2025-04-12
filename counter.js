const d = document.querySelector(".days");
const h = document.querySelector(".hours");
const m = document.querySelector(".minutes");
const s = document.querySelector(".seconds");

// Define la fecha objetivo. Ejemplo: 1 de enero de 2026 a las 00:00:00
const targetDate = new Date("July 17, 2025 00:00:00").getTime();

// Función que actualiza el contador cada segundo
const updateCountdown = () => {
  // Fecha actual en milisegundos
  const now = new Date().getTime();
  
  // Calcula la diferencia entre la fecha objetivo y el momento actual
  const difference = targetDate - now;

  // Si la diferencia es menor o igual a 0, ya pasó o llegamos a la fecha
  if (difference <= 0) {
    clearInterval(countdownInterval);
    d.textContent = "0";
    h.textContent = "0";
    m.textContent = "0";
    s.textContent = "0";
    return;
  }

  // Calcula días, horas, minutos y segundos restantes
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Actualiza los elementos con los valores calculados
  d.textContent = days;
  h.textContent = hours;
  m.textContent = minutes;
  s.textContent = seconds;
};

// Ejecuta la función inmediatamente para que no se espere 1 segundo
updateCountdown();

// Actualiza cada segundo (1000 ms)
const countdownInterval = setInterval(updateCountdown, 1000);
