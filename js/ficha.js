import {
  chartColors,
  engagementChartColors,
  paisChartColors,
} from "../utils.js";

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

// DESEMPEÑO

const audienciaDesempeno = document.getElementById("audienciaDesempeno");
audienciaDesempeno.innerHTML += parsedUserData.followers_formated;

const audienciaAlcance = document.getElementById("audienciaAlcance");
audienciaAlcance.innerHTML += parsedUserData.reach_formated;

const impresiones = document.getElementById("desempenoImpresiones");
impresiones.innerHTML += parsedUserData.avg_impressions_formated;

const impresionesAlcance = document.getElementById("impresionesAlcance");
impresionesAlcance.innerHTML += parsedUserData.ir_alcance;

const impresionesAudiencia = document.getElementById("impresionesAudiencia");
impresionesAudiencia.innerHTML += parsedUserData.ir_audiencia + "%";

const vplays_formated = document.getElementById("vplays_formated");
vplays_formated.innerHTML += parsedUserData.vplays_formated + "%";

const vr_alcance = document.getElementById("vr_alcance");
vr_alcance.innerHTML += parsedUserData.vr_alcance + "%";

const vr_audiencia = document.getElementById("vr_audiencia");
vr_audiencia.innerHTML += parsedUserData.vr_audiencia + "%";

const engagement_formated = document.getElementById("engagement_formated");
engagement_formated.innerHTML += parsedUserData.engagement_formated + "%";

const er_alcance = document.getElementById("er_alcance");
er_alcance.innerHTML += parsedUserData.er_alcance + "%";

const er_audiencia = document.getElementById("er_audiencia");
er_audiencia.innerHTML += parsedUserData.er_audiencia + "%";

const engRateDaily = () => {
  const { post_week_day } = parsedUserData;
  let dailyRate = [];
  for (let i = 0; i < post_week_day.length; i++) {
    dailyRate.push(post_week_day[i].engrate);
    // console.log(post_week_day[i].engrate, "dentro del for");
  }

  console.log(dailyRate);
  const data = {
    labels: ["L", "M", "M", "J", "V", "S", "D"],
    datasets: [
      {
        // labels: "engagement rate",
        data: [...dailyRate],
        backgroundColor: [...engagementChartColors],
        borderColor: [...engagementChartColors],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: "left",
      },
    },
  };
  new Chart("engRateDaily", { type: "bar", data, options: options });
};

engRateDaily();

// NAVBAR

const {
  username,
  account_picture,
  followers_formated,
  fakes,
  avg_engagement_formated,
  engagement_rate,
  age,
  country,
  interests,
  account_url,
  gender,
} = parsedUserData;

// if(gender ===)

const userPic = document.getElementById("userPic");
userPic.src = account_picture;

const userDetail = document.getElementById("userDetail");
userDetail.innerHTML += username + "<br/>";
userDetail.innerHTML +=
  `<a href='${account_url}'>
<i class="fa-brands fa-instagram" style="color: #ee11dc;"></i> ${username}
 <a/>` + "<br/>";
userDetail.innerHTML += `${country},
<i class="fa-solid fa-venus" style="color: #fa01fe;"></i>
${gender === "1" ? "mujer" : "hombre"} ${age} años`;
