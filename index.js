const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "02XnwooSihs9MKZWEtbr7g==9NUXFXx8PJ1KMbxk";

const options = {
  method: "GET",
  headers: { "X-Api-Key": "02XnwooSihs9MKZWEtbr7g==9NUXFXx8PJ1KMbxk" },
};

const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getjoke() {
    
    try {
        jokeEl.innerHTML = "Updating..."; 
  btnEl.disable = true;
  btnEl.innerHTML= "Loading .."
  const response = await fetch(apiurl, options);
  const data = await response.json();
  jokeEl.innerHTML = data[0].joke;
  btnEl.disable = false;
  btnEl.innerHTML= " Tell me a Joke .."
    }
    catch (err) {
        console.log("ERROR")
    }
}
btnEl.addEventListener("click", getjoke);
