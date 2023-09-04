import { chartColors, paisChartColors } from "../utils.js";

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

const genderChart = () => {
  const { insight_perc_m, insight_perc_f } = parsedUserData;

  const data = {
    labels: ["hombre", "mujer"],
    datasets: [
      {
        data: [insight_perc_m, insight_perc_f],
        backgroundColor: ["blue", "pink"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left",
      },
      // labels: {
      //   render: "value",
      // },
      showActualPercentages: true,
    },
  };
  new Chart("generoChart", { type: "doughnut", data, options: options });
};

genderChart();

const paisChart = () => {
  const {
    insight_perc_p1,
    insight_perc_p2,
    insight_perc_p3,
    insight_perc_p4,
    insight_perc_p5,
  } = parsedUserData;

  let topcountries = [];
  const topCountriesArray = parsedUserData.insightsCountry;
  for (let i = 0; i < topCountriesArray.length; i++) {
    topcountries.push(topCountriesArray[i].country);
  }

  const data = {
    labels: [topcountries],
    datasets: [
      {
        data: [
          insight_perc_p1,
          insight_perc_p2,
          insight_perc_p3,
          insight_perc_p4,
          insight_perc_p5,
        ],
        backgroundColor: paisChartColors,
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
  new Chart("paisChart", { type: "doughnut", data, options: options });
};

paisChart();
