const axios = require("axios");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data.results[0]);
}

callApi();
