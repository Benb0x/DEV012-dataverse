// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funcione

export const filtrosT = (data, genero, pov) => {
 let dataFiltrada = data;
  
 if (genero !== "nada "){
  dataFiltrada = filtroGenero(dataFiltrada, genero);
 }
 if (pov !== "nada"){
  dataFiltrada = filtroPOV(dataFiltrada, pov);
 }
 
 return dataFiltrada; 

};

export const filtroGenero = (data, genero) => {
  const filtro1=data.filter((items) => items.facts.gender === genero);
  return filtro1;
}

export const filtroPOV = (data, POV) => {
  const filtro1=data.filter((items)=> items.facts.pointsOfView === POV);
  return filtro1;
}


