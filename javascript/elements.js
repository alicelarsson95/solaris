/* Exporterar DOM-elementen för planetsidan och startsidan. */

export const planetElements = document.querySelectorAll(".planet-sun, .planet-1, .planet-2, .planet-3, .planet-4, .planet-5, .planet-6, .planet-7, .planet-8");

export const elements = {
    startSite: document.querySelector('.site-wrapper'),
    planetSite : document.querySelector('.site-wrapper2'),
    planetHeader : document.querySelector('.header2'),
    subHeader : document.querySelector('.sub-header2'),
    mainText : document.querySelector('.main-text'),
    infoCircum : document.querySelector('.info-circumference'),
    maxTemp : document.querySelector('.max-temp'),
    infoDistance : document.querySelector('.distance-sun'),
    minTemp : document.querySelector('.min-temp'),
    infoMoon : document.querySelector('.info-moon'),
    planetBlue : document.querySelector('.planet-blue2')
}
