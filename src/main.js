import { filtrosT, computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const juegosContenedor=document.getElementById("root");
juegosContenedor.appendChild(renderItems(data));
const dataManipulada = [...data];

const filtrarGenero = document.querySelector('[id="filtrar-por-género"]');
const filtrarPOV = document.querySelector('[id="filtrar-por-POV"]')
const ordenaAZ= document.querySelector('[id="ordenar-por"]')

filtrarGenero.addEventListener("change", filtros);
filtrarPOV.addEventListener("change", filtros);
ordenaAZ.addEventListener("change", filtros);

function filtros(){
  const indice = filtrarGenero.selectedIndex;
  const optionSelect = filtrarGenero.options[indice];
  const indicePov = filtrarPOV.selectedIndex;
  const optionSelectPOV = filtrarPOV.options[indicePov];
  const indiceOrdenar = ordenaAZ.selectedIndex;
  const ordenar = ordenaAZ.options[indiceOrdenar];
  juegosContenedor.innerHTML = "";


const dataFiltrada = filtrosT(
  data, 
  optionSelect.value,
  optionSelectPOV.value,
  ordenar.value
);
juegosContenedor.appendChild(renderItems(dataFiltrada));
}

const boton = document.querySelector('[data-testid="restablecerFiltros"]');
boton.addEventListener("click", limpiar);

function limpiar() {
  filtrarGenero.value = "nada";
  filtrarPOV.value = "nada";
  ordenaAZ.value = "nada";
  juegosContenedor.innerHTML = "";
  juegosContenedor.appendChild(renderItems(dataManipulada));
}
const estadisticas = computeStats(data);
const estadisticasElemento = document.getElementById('estadisticas'); // Asegúrate de tener un elemento con este ID en tu HTML
estadisticasElemento.textContent = `Juegos Multijugador: ${estadisticas.juegosMultijugador}, Juegos No Multijugador: ${estadisticas.juegosNoMultijugador}`;







  


