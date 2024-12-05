/* Importerar planetinformation från api.js och visar den på planetsidan vid klick.*/
  
import { planetElements, elements } from "./elements.js";
import { getApiKey, getPlanet } from "./api.js";

const handlePlanet = async (planetIndex) => {
  try {
    const key = await getApiKey();
    const apiData = await getPlanet(key);


    displayInfo(apiData.bodies[planetIndex]);
  } catch (error) {
    console.error("An unexpected error has occurred:", error);
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
  if (!infoBodies.moons || infoBodies.moons.length === 0) {
    elements.infoMoon.innerText = "Har inga månar";
} else {
    elements.infoMoon.innerText = infoBodies.moons
}

};
