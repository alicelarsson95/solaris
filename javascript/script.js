import { planetElements, elements } from "./elements.js";
import { getApiKey, getPlanet } from "./api.js";

const handlePlanet = async (planetIndex) => {
  try {
    const key = await getApiKey();
    const apiData = await getPlanet(key);


    displayInfo(apiData.bodies[planetIndex]);
  } catch (error) {
    console.error("Error occurred:", error);
  }

  elements.startSite.style.display = "none";
  elements.planetSite.style.display = "flex";
};

planetElements.forEach((planet, index) => {
  planet.addEventListener("click", () => handlePlanet(index));
});

elements.planetBlue.addEventListener("click", () => {
  elements.planetSite.style.display = "none";
  elements.startSite.style.display = "block";
});

const displayInfo = (infoBodies) => {
  elements.planetHeader.innerText = infoBodies.name.toUpperCase();
  elements.subHeader.innerText = infoBodies.latinName.toUpperCase();
  elements.mainText.innerText = infoBodies.desc;
  elements.infoCircum.innerText = infoBodies.circumference.toLocaleString() + " km";
  elements.infoDistance.innerText = infoBodies.distance.toLocaleString() + " km";
  elements.maxTemp.innerText = infoBodies.temp.day + "C";
  elements.minTemp.innerText = infoBodies.temp.night + "C";
  elements.infoMoon.innerText = infoBodies.moons;
};
