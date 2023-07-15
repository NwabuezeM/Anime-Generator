// JavaScript code
const animeBtn = document.getElementById("anime-btn");
const animeContainer = document.getElementById("anime-container");
const animeImage = document.getElementById("anime-image");
const animeName = document.getElementById("anime-name");
const errorMessage = document.getElementById("error-message");
const downloadLink = document.getElementById("download-link");

animeBtn.addEventListener("click", async function() {
  try {
    errorMessage.style.display = "none";
    animeContainer.style.display = "block";
    animeImage.src = "spinner.svg";
    animeName.innerText = "Anime Name";
    animeBtn.innerText = "Loading...";
    animeBtn.classList.replace("anime-btn", "active-btn");
    animeBtn.disabled = true;
    const response = await fetch("https://api.catboys.com/img")
    const data = await response.json();
    console.log(data);
    animeContainer.style.display = "block";
    animeImage.src = data.url;
    animeName.innerText = data.artist;
    animeBtn.innerText = "Get Anime";
    animeBtn.disabled = false;
    animeBtn.classList.replace("active-btn", "anime-btn");
  } 
  catch (error) {
    animeContainer.style.display = "none";
    animeBtn.disabled = false;
    errorMessage.style.display = "block";
    errorMessage.innerText = "An error occurred, please try again"
    animeBtn.classList.replace("active-btn", "anime-btn");
    animeBtn.innerText = "Get Anime";
  }
});
