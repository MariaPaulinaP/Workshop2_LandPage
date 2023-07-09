import "../styles/index.scss"
const feature = document.querySelector(".header__lista--features");
const company = document.querySelector(".header__lista--company");
const oculto = document.querySelector(".oculto");
const oculto2 = document.querySelector(".oculto2");
const hambuerguesa = document.querySelector(".hamburguesa");
const barra = document.querySelector(".ocultar__barra");
const salir = document.querySelector(".salir");


const activeFeature = () => {
    feature.addEventListener("click", () => {
      oculto.classList.toggle("mostrar");
      console.log("¡Hola, sí funciona!");
    });
};
const activeCompany = () => {
    company.addEventListener("click", () => {
      oculto2.classList.toggle("mostrar2");
      console.log("¡Hola, sí funciona!");
    });
};

const activeHambueguesa = () => {
  hambuerguesa.addEventListener("click", () => {
    barra.classList.toggle("barra");
    console.log("¡Hola, sí funciona!");
  });
  salir.addEventListener("click", () => {
    barra.classList.remove("barra")
  })
}

activeHambueguesa();
activeFeature();
activeCompany();

