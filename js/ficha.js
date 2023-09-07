import { renderChart } from "../charts.js";
import {
  chartColors,
  engagementChartColors,
  paisChartColors,
} from "../colors.js";
import {
  audiencia,
  audienciaAlcance,
  audienciaDesempeno,
  audienciaReal,
  downloadInflucard,
  empresas,
  engagement_formated,
  er_alcance,
  er_audiencia,
  goHomeButton,
  impresiones,
  impresionesAlcance,
  impresionesAudiencia,
  userDetailData,
  userDetailIg,
  userDetailUsername,
  vplays_formated,
  vr_alcance,
  vr_audiencia,
} from "../consts.js";
import { goHome, mostrarHora, screenShot } from "../utils.js";

const userData = localStorage.getItem("userData");
const parsedUserData = JSON.parse(userData);

console.log(parsedUserData);

audiencia.innerHTML += parsedUserData.followers_formated;

seguidoresFake.innerHTML += parsedUserData.fake_followers_formated;

audienciaReal.innerHTML += parsedUserData.real_followers_formated;

renderChart({
  id: "modelschart",
  type: "doughnut",
  labels: ["13-17", "18-24", "25-34", "35-44", "45-64", "65+"],
  infoData: [
    parsedUserData.insight_perc_13,
    parsedUserData.insight_perc_18,
    parsedUserData.insight_perc_25,
    parsedUserData.insight_perc_35,
    parsedUserData.insight_perc_45,
    parsedUserData.insight_perc_65,
  ],
  backgroundColor: chartColors,
  titleText: "Distribución por Edad",
});

renderChart({
  id: "generoChart",
  type: "pie",
  labels: [`hombre`, `mujer `],
  infoData: [parsedUserData.insight_perc_m, parsedUserData.insight_perc_f],
  backgroundColor: ["blue", "pink"],
  titleText: "Distribución por género",
});

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
    labels: [...topcountries],
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
        padding: 1,
      },
      title: {
        display: true,
        text: "Distribución por Pais",
        font: {
          size: 16,
          family: "vazir",
        },
      },
    },
  };
  new Chart("paisChart", { type: "doughnut", data, options: options });
};

const transformData = () => {
  let topcountries = [];
  const topCountriesArray = parsedUserData.insightsCountry;
  for (let i = 0; i < topCountriesArray.length; i++) {
    topcountries.push(topCountriesArray[i].country);
  }

  return topcountries;
};

renderChart({
  id: "paisChart",
  type: "doughnut",
  other: transformData,
  infoData: [
    parsedUserData.insight_perc_p1,
    parsedUserData.insight_perc_p2,
    parsedUserData.insight_perc_p3,
    parsedUserData.insight_perc_p4,
    parsedUserData.insight_perc_p5,
  ],
  backgroundColor: paisChartColors,
  titleText: "Distribución por Pais",
});

//TODO
// const publicacionesChart = () => {
//   const { post_territory_formated } = parsedUserData;
//   console.log(post_territory_formated);

//   const x = post_territory_formated.split("},");

//   console.log(x);

//   // const arr = post_territory_formated.split("},");
//   // console.log(arr);
//   // const data = {
//   //   labels: ["13-17", "18-24", "25-34", "35-44", "45-64", "65+"],
//   //   datasets: [
//   //     {
//   //       data: [
//   //         insight_perc_13,
//   //         insight_perc_18,
//   //         insight_perc_25,
//   //         insight_perc_35,
//   //         insight_perc_45,
//   //         insight_perc_65,
//   //       ],
//   //       backgroundColor: chartColors,
//   //     },
//   //   ],
//   // };

//   // const options = {
//   //   plugins: {
//   //     legend: {
//   //       position: "left",
//   //     },
//   //   },
//   // };
//   // new Chart("modelschart", { type: "doughnut", data, options: options });
// };
// publicacionesChart();

const publicacionesMomentChart = () => {
  const { account_post_moment } = parsedUserData;

  let moments = [];
  for (let i = 0; i < account_post_moment.length; i++) {
    moments.push(account_post_moment[i].total);
  }

  const data = {
    labels: ["Mañana", "Tarde", "Noche"],
    datasets: [
      {
        data: [...moments],
        backgroundColor: ["blue", "yellow", "black"],
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
  new Chart("publicacionesMomentChart", {
    type: "doughnut",
    data,
    options: options,
  });
};

publicacionesMomentChart();

audienciaDesempeno.innerHTML += parsedUserData.followers_formated;

audienciaAlcance.innerHTML += parsedUserData.reach_formated;

impresiones.innerHTML += parsedUserData.avg_impressions_formated;

impresionesAlcance.innerHTML +=
  parsedUserData.ir_alcance + "%" + "<br/>" + "Alcance";

impresionesAudiencia.innerHTML +=
  parsedUserData.ir_audiencia + "%" + "<br/>" + "Audiencia";

vplays_formated.innerHTML += parsedUserData.vplays_formated + "%";

vr_alcance.innerHTML += parsedUserData.vr_alcance + "%" + "<br/>" + "Alcance";

vr_audiencia.innerHTML +=
  parsedUserData.vr_audiencia + "%" + "<br/>" + "Audiencia";

engagement_formated.innerHTML += parsedUserData.engagement_formated + "%";

er_alcance.innerHTML += parsedUserData.er_alcance + "%";

er_audiencia.innerHTML += parsedUserData.er_audiencia + "%";

const dailyRateFunc = () => {
  const { post_week_day } = parsedUserData;
  let dailyRate = [];
  for (let i = 0; i < post_week_day.length; i++) {
    dailyRate.push(post_week_day[i].engrate);
  }
  return dailyRate;
};

renderChart({
  id: "engRateDaily",
  type: "bar",
  backgroundColor: [...engagementChartColors],
  labels: ["L", "M", "M", "J", "V", "S", "D"],
  titleText: "Engagement rate segun su publicación",
  displayLegend: false,
  otherData: dailyRateFunc,
});

// NAVBAR

const { username, account_picture, age, country, account_url, gender } =
  parsedUserData;

userPic.src = account_picture;

userDetailUsername.innerHTML += username;

userDetailIg.innerHTML += `<a href='${account_url}' target="_blank">
 <i class="fa-brands fa-instagram" style="color: #ee11dc;"></i> ${username}
 <a/>`;
userDetailData.innerHTML += `${country},
 <i class="fa-solid fa-venus" style="color: #fa01fe;"></i>
 ${gender === "1" ? "mujer" : "hombre"} ${age} años`;

const reachchart = () => {
  const { reach_formated_graph } = parsedUserData;

  const data = {
    // labels: ["hombre", "mujer"],
    datasets: [
      {
        labels: ["reach"],
        data: [reach_formated_graph],
        backgroundColor: ["blue", "white"],
      },
    ],
  };

  const options = {
    elements: {
      center: {
        text: "tu madre",
      },
    },
    plugins: {
      legend: {
        position: "left ",
      },
    },
  };
  new Chart("reachchart", { type: "doughnut", data, options: options });
};
reachchart();

// renderChart({
//   id: "reachchart",
//   type: "doughnut",
//   infoData: [parsedUserData.reach_formated_graph],
//   backgroundColor: ["blue", "white"],
//   titleText: "Reach",
// });

const relevanceChart = () => {
  const { relevance_formated_graph } = parsedUserData;

  const data = {
    datasets: [
      {
        data: [relevance_formated_graph],
        backgroundColor: ["blue", "white"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left ",
      },
    },
  };
  new Chart("relevanceChart", { type: "doughnut", data, options: options });
};

relevanceChart();

const resonanceChart = () => {
  const { resonance_formated_graph } = parsedUserData;
  const data = {
    datasets: [
      {
        data: [resonance_formated_graph],
        backgroundColor: ["blue", "white"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left ",
      },
    },
  };
  new Chart("resonanceChart", { type: "doughnut", data, options: options });
};

resonanceChart();

mostrarHora();

goHomeButton.addEventListener("click", goHome);

downloadInflucard.addEventListener("click", screenShot);

const printCompanies = () => {
  const brands_images = parsedUserData.brands_images;
  const topEight = brands_images.slice(0, 8);
  console.log(topEight);
  topEight.map((brand) => {
    empresas.innerHTML += `
    <div class="marcasCards">
      <img src="${brand.image}" style="height: 3em; width: 4em;" alt="${brand.name}">
      <span style="font-size: .8em;">
        ${brand.name}
      </span>
    </div>
  `;
  });
};

printCompanies();
