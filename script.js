const getApiKey = async () => {
  const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys";

  const options = {
    method: "POST",
  };

  try {
    const response = await fetch(url, options);
    const apiData = await response.json();

    console.log("This is your API-key:", apiData.key);

    return apiData.key
  } catch (error) {
    console.error("Error fetching the API-key:", error);
  }
};
const getPlanet = async (key) => {
  const url = "https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies";

  const options = {
    method: "GET",
    headers: {
      "x-zocom": key,
    },
  };

  try {
    const response = await fetch(url, options);
    const planetData = await response.json();

    console.log("Planets:", planetData);

    return planetData;
  } catch (error) {
    console.error("Error catching the planets:", error);
  }
};

const sun = document.querySelector(".planet-sun");
sun.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);



    displayInfo(apiData.bodies[0])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const mercury = document.querySelector(".planet-1")
mercury.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[1])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const venus = document.querySelector(".planet-2")
venus.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[2])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const earth = document.querySelector(".planet-3")
earth.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[3])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const mars = document.querySelector(".planet-4")
mars.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[4])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const jupiter = document.querySelector(".planet-5")
jupiter.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[5])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const saturn = document.querySelector(".planet-6")
saturn.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[6])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const uranus = document.querySelector(".planet-7")
uranus.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[7])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const neptunus = document.querySelector(".planet-8")
neptunus.addEventListener('click', async () => {
  try {
    const key = await getApiKey()
    const apiData = await getPlanet(key);

    console.log(apiData);

    displayInfo(apiData.bodies[8])
  
  } catch (error) {
    console.error('Error occuored:', error);
    
  }
  startSite.style.display = 'none'
  planetSite.style.display = 'flex'
})

const planetBlue = document.querySelector('.planet-blue2')
  planetBlue.addEventListener('click', () => {
  planetSite.style.display = 'none'
  startSite.style.display = 'block'
})


const startSite = document.querySelector('.site-wrapper')
const planetSite = document.querySelector('.site-wrapper2')
const planetHeader = document.querySelector('.header2')
const subHeader = document.querySelector('.sub-header2')
const mainText = document.querySelector('.main-text')
const infoCircum = document.querySelector('.info-circumference')
const maxTemp = document.querySelector('.max-temp')
const infoDistance = document.querySelector('.distance-sun')
const minTemp = document.querySelector('.min-temp')
const infoMoon = document.querySelector('.info-moon')

const displayInfo = (infoBodies) => {

planetHeader.innerText = infoBodies.name.toUpperCase()
subHeader.innerText = infoBodies.latinName.toUpperCase()
mainText.innerText = infoBodies.desc
infoCircum.innerText = infoBodies.circumference.toLocaleString() + " km"
maxTemp.innerText = infoBodies.temp.day + "C"
infoDistance.innerText = infoBodies.distance.toLocaleString() + " km"
minTemp.innerText = infoBodies.temp.night + "C"
infoMoon.innerText = infoBodies.moons


}
