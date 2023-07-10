import "../styles/index.scss"
const feature = document.querySelector(".header__lista--features");
const company = document.querySelector(".header__lista--company");
const oculto = document.querySelector(".oculto");
const oculto2 = document.querySelector(".oculto2");
const hambuerguesa = document.querySelector(".hamburguesa");
const barra = document.querySelector(".ocultar__barra");
const salir = document.querySelector(".salir");
const botones = document.querySelector(".header__lista");
const parrafo = document.querySelector(".principal__parrafo");
const footer = document.querySelector(".principal__footer");
const resFeature = document.querySelector(".items__feature");
const resCompany = document.querySelector(".items__company");


const activeFeature = () => {
    feature.addEventListener("click", () => {
      oculto.classList.toggle("mostrar");
    });
};
const activeCompany = () => {
    company.addEventListener("click", () => {
      oculto2.classList.toggle("mostrar2");
     
    });
};

const activeHambueguesa = () => {
  hambuerguesa.addEventListener("click", () => {
    barra.classList.toggle("barra");
    botones.style.display = "block"
    parrafo.style.display = "none"
    footer.style.display = "none"
  });
  salir.addEventListener("click", () => {
    barra.classList.remove("barra")
    botones.style.display = "none"
    parrafo.style.display = "block"
    footer.style.display = "flex"
  })
}

const responsiveActiveF = () => {
  let isOcultoVisible = false; oculto

  resFeature.addEventListener("click", () => {
    if (isOcultoVisible) {
      oculto.style.display = "none"; 
    } else {
      oculto.style.display = "block";
    }

    isOcultoVisible = !isOcultoVisible; 
  });
}
const responsiveActiveC = () => {
  let isOcultoVisible2 = false; oculto
  resCompany.addEventListener("click", () => {
    if (isOcultoVisible2) {
      oculto2.style.display = "none"; 
    } else {
      oculto2.style.display = "block";
    }

    isOcultoVisible2 = !isOcultoVisible2; 
  });
}

activeHambueguesa();
activeFeature();
activeCompany();
responsiveActiveF()
responsiveActiveC()
