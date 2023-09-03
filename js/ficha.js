import { chartColors } from "../utils.js";

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

// chart.canvas.parentNode.style.height = "128px";
// chart.canvas.parentNode.style.width = "128px";
const renderCart = () => {
  const {
    insight_perc_13,
    insight_perc_18,
    insight_perc_25,
    insight_perc_35,
    insight_perc_45,
    insight_perc_65,
  } = parsedUserData;

  const data = {
    labels: ["13-17", "18-24", "25-34", "35-44", "45-64", "65+"],
    datasets: [
      {
        data: [
          insight_perc_13,
          insight_perc_18,
          insight_perc_25,
          insight_perc_35,
          insight_perc_45,
          insight_perc_65,
        ],
        backgroundColor: chartColors,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left",
      },
    },
  };
  new Chart("modelschart", { type: "doughnut", data, options: options });
};

renderCart();

// aqui se ve el grafico
// const labels = ["Enero", "Febrero", "Marzo", "Abril"];

// const graph = document.querySelector("#grafica");

// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "Ejemplo 1",
//       data: [1, 2, 3, 4],
//       backgroundColor: "rgba(9, 129, 176, 0.2)",
//     },
//   ],
// };

// const config = {
//   type: "bar",
//   data: data,
// };
// new Chart(graph, config);
