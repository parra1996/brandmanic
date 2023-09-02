const x = document.getElementById("izq");
const userData = localStorage.getItem("userData");
const parsedUserData = JSON.parse(userData);

console.log(parsedUserData);
const audiencia = document.getElementById("audiencia2");
audiencia.innerHTML += parsedUserData.followers_formated;

const seguidoresFake = document.getElementById("seguidoresFake");
seguidoresFake.innerHTML += parsedUserData.fake_followers_formated;

const audienciaReal = document.getElementById("audienciaReal");
audienciaReal.innerHTML += parsedUserData.real_followers_formated;

// aqui se ve el grafico
const labels = ["Enero", "Febrero", "Marzo", "Abril"];

const graph = document.querySelector("#grafica");

const data = {
  labels: labels,
  datasets: [
    {
      label: "Ejemplo 1",
      data: [1, 2, 3, 4],
      backgroundColor: "rgba(9, 129, 176, 0.2)",
    },
  ],
};

const config = {
  type: "bar",
  data: data,
};
new Chart(graph, config);
