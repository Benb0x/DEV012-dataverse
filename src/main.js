import { filtrosT} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const juegosContenedor=document.getElementById("root");
juegosContenedor.appendChild(renderItems(data));

const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]')

filtrarGenero.addEventListener("change", filtros);
filtrarPOV.addEventListener("change", filtros);

function filtros(){
  const indice = filtrarGenero.selectedIndex;
  const optionSelect = filtrarGenero.options[indice];
  const indicePov = filtrarPOV.selectedIndex;
  const optionSelectPOV = filtrarPOV.options[indicePov];
  juegosContenedor.innerHTML = "";


const dataFiltrada = filtrosT(
  data, 
  optionSelect.value,
  optionSelectPOV.value
);
juegosContenedor.appendChild(renderItems(dataFiltrada));
}

const boton = document.querySelector('[data-testid="restablecerFiltros"]');
boton.addEventListener("click", limpiar);

function limpiar() {
  filtrarGenero.value = "nada";
  filtrarPOV.value = "nada";
  juegosContenedor.innerHTML = "";
  juegosContenedor.appendChild(renderItems(data));
}





  


