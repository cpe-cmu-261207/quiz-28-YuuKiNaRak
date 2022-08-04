async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");

  loadcard.style.display = "none";

  if (resp.data.results[0].gender == "female") {
    gender.innerText = " 👩 ";
  } else {
    gender.innerText = " 👨 ";
  }
  pic.src = resp.data.results[0].picture.large;
  user.innerText =
    resp.data.results[0].name.title +
    " " +
    resp.data.results[0].name.first +
    " " +
    resp.data.results[0].name.last;
  email.innerText = resp.data.results[0].email;
  address.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode;
}

callApi();

const gender = document.getElementById("span-gender-icon");
const pic = document.getElementById("img-profile");
const user = document.getElementById("p-name");
const address = document.getElementById("p-address");
const email = document.getElementById("p-email");
const btnRandom = document.getElementById("btn-random");
const maincard = document.getElementById("div-user-card");
const loadcard = document.getElementById("div-loading-card");

btnRandom.onclick = () => {
  callApi();
  loadcard.style.display = "none";
};

btnRandom.onload = () => {
  maincard.style.display = "none";
};
