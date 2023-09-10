export async function cargarFichas() {
  let cards = {};
  await fetch("./data.json")
    .then((res) => res.json())
    .then((data) => (cards = data.influcard));
  return cards;
}

function crearCards({ data }) {
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
    gender,
  } = data;

  const newInterest = interests.split(",");

  const card = `
    <div class="card d-flex flex-row customCard " >
      <div class="ladoIzq">
        <div class="ladoIzqPic">
        <div class=""profilePic>
          <div class="image">
            <img src='${account_picture}' id="profilePic" class="rounded-circle"  alt='${username}'>
            <div class="content" id="content">
              <span class="verInflucard">ver influcard</span>
            </div>
          </div>
        </div>
        </div>
        <div class="ladoIzqData">
          <span><i class="fa-brands fa-square-instagram" style="color: #f709fb;"></i> ${username}</span>
          <span class="ladoIzqDataSpan"> ${
            gender === "1" ? "Mujer" : "Hombre"
          }, ${age}</span>
          <span class="ladoIzqDataSpan> ${country}</span>
          <span class="ladoIzqDataSpan> ${newInterest[0]},${
    newInterest[1]
  }...</span>
        </div>
      </div>
      <div class="card-body" >
              <h5 class="card-title">${username}</h5>
              <p ><i class="fa-solid fa-users"></i> Audiencia: ${followers_formated}</p>
              <p class="card-text"><i class="fa-solid fa-user-xmark"></i> Fakes: ${fakes}</p>
              <p class="card-text"><i class="fa-solid fa-heart"></i> Media Eng: ${avg_engagement_formated}</p>
              <p class="card-text"><i class="fa-solid fa-heart-pulse"></i> Eng Rate: ${followers_formated}</p>
              <p class="card-text"><i class="fa-solid fa-eye"></i> Impresiones: ${engagement_rate}</p>
      </div>
    </div>`;

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML += card;

  document.querySelectorAll("#content").forEach((e) => {
    e.addEventListener("click", () => {
      saveData({ data });
      irFicha();
    });
  });
}

async function agregarCards() {
  let data = await cargarFichas();

  for (let i = 0; i < 10; i++) {
    crearCards({ data });
  }
}

const irFicha = () => {
  window.location.href = "ficha.html";
};

const saveData = ({ data }) => {
  const userData = data;
  localStorage.setItem("userData", JSON.stringify(userData));
};

agregarCards();
