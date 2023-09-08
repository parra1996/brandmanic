import { renderBarChart, renderChart, renderChartTerritory } from "./charts.js";
import {
  chartColors,
  engagementChartColors,
  paisChartColors,
} from "./colors.js";
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
  reachPer,
  relPer,
  resPer,
  userDetailData,
  userDetailIg,
  userDetailUsername,
  vplays_formated,
  vr_alcance,
  vr_audiencia,
} from "./consts.js";
import { goHome, mostrarHora, screenShot } from "./utils.js";

const userData = localStorage.getItem("userData");
const parsedUserData = JSON.parse(userData);

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

const newData = () => {
  const { account_post_moment } = parsedUserData;

  let moments = [];
  for (let i = 0; i < account_post_moment.length; i++) {
    moments.push(account_post_moment[i].total);
  }
  return moments;
};

renderChart({
  id: "publicacionesMomentChart",
  type: "doughnut",
  backgroundColor: ["yellow", "lightgreen", "black"],
  otherData: newData,
  labels: ["Mañana", "Tarde", "Noche"],
  displayTitle: false,
  titleText: "Franja horaria de sus publicaciones",
});

const dailyRateFunc = () => {
  const { post_week_day } = parsedUserData;
  let dailyRate = [];
  for (let i = 0; i < post_week_day.length; i++) {
    dailyRate.push(post_week_day[i].engrate);
  }
  return dailyRate;
};

renderBarChart({
  id: "engRateDaily",
  type: "bar",
  backgroundColor: [...engagementChartColors],
  labels: ["L", "M", "M", "J", "V", "S", "D"],
  titleText: "Engagement rate segun su publicación",
  displayLegend: false,
  otherData: dailyRateFunc,
});

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

mostrarHora();

goHomeButton.addEventListener("click", goHome);

downloadInflucard.addEventListener("click", screenShot);

const printCompanies = () => {
  const brands_images = parsedUserData.brands_images;
  const topEight = brands_images.slice(0, 8);
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

reachPer.innerHTML += "&nbsp" + parsedUserData.reach_formated_graph + "%";
relPer.innerHTML += "&nbsp" + parsedUserData.relevance_formated_graph + "%";
resPer.innerHTML += "&nbsp" + parsedUserData.resonance_formated_graph + "%";

const dailyPostData = () => {
  const post_territory = parsedUserData.post_territory;

  const newData = {
    labels: [],
    dataValues: [],
    colors: [],
  };

  post_territory.map((data) => {
    newData.labels.push(data.category);
    newData.dataValues.push(data.value);
    newData.colors.push(data.color);
  });
  return newData;
};

dailyPostData();

renderChartTerritory({
  id: "publicacionesChart",
  type: "doughnut",
  otherData: dailyPostData,
  titleText: "Distribución de sus publicaciones por territorios",
});
