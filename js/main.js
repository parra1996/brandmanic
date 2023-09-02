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
  } = data;

  const newInterest = interests.split(",");

  const card = `
     <div class="card d-flex flex-row " data="${data}" style="width: 18rem;">
     <div>
     <img src='${account_picture}' id="profilePic" class="rounded-circle" style="height: 100px;" alt="...">
     <p><i class="fa-brands fa-instagram"></i> ${username}</p>
     <p> ${age}</p>
     <p> ${country}</p>
     <p> ${newInterest[0]},${newInterest[1]}...</p>
     </div>
     <div class="card-body" >
            <h5 class="card-title">${username}</h5>
            <p class="card-text"><i class="fa-solid fa-users"></i>Audiencia: ${followers_formated}</p>
            <p class="card-text">Fakes: ${fakes}</p>
            <p class="card-text">Media Eng: ${avg_engagement_formated}</p>
            <p class="card-text">Eng Rate: ${followers_formated}</p>
            <p class="card-text">Impresiones: ${engagement_rate}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`;

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML += card;

  const profilePic = document.getElementById("profilePic");
  profilePic.addEventListener("click", function (e) {
    e.preventDefault();
    saveData({ data });
    irFicha();
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
  console.log(userData, "ESTO ES ENMAIN");

  localStorage.setItem("userData", JSON.stringify(userData));
};

agregarCards();
