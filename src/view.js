export const renderItems = (data) => {
  
  //creación ul
  const contenedorUl= document.createElement("ul");

  //For of 
  for(const datos of data){

    //creación li
    const contenedorLi=document.createElement("li");
    contenedorUl.appendChild(contenedorLi); 

    //creación dl
    const grupodl=document.createElement("dl");
    contenedorLi.appendChild(grupodl);
    grupodl.setAttribute("itemscope", "");
    grupodl.setAttribute("itemtype", "videojuegos");
    //elementos dentro de dl
    const portada=document.createElement("img");
    grupodl.appendChild(portada);
    portada.src=datos.imageUrl;
    //nombre
    const dt1=document.createElement("dt");
    grupodl.appendChild(dt1);
    dt1.textContent="Nombre:"
    //dd
    const dd1=document.createElement("dd");
    grupodl.appendChild(dd1);
    dd1.setAttribute("itemprop", "name");
    dd1.textContent=datos.name;
    //descripción corta 
    const dt2=document.createElement("dt");
    grupodl.appendChild(dt2);
    dt2.textContent="Descripción corta:"
    const dd2=document.createElement("dd");
    grupodl.appendChild(dd2);
    dd2.setAttribute("itemprop", "shortDescription");
    dd2.textContent=datos.shortDescription;
    //descripción 
    const dt3=document.createElement("dt");
    grupodl.appendChild(dt3);
    dt3.textContent="Descripción:"
    const dd3=document.createElement("dd");
    grupodl.appendChild(dd3);
    dd3.setAttribute("itempro", "description");
    dd3.textContent=datos.description;
    //año de lanzamiento
    const dt4=document.createElement("dt");
    grupodl.appendChild(dt4);
    dt4.textContent="Año de lanzamiento:"
    const dd4=document.createElement("dd");
    grupodl.appendChild(dd4);
    dd4.setAttribute("itempro", "yearReleased");
    dd4.textContent=datos.facts.yearReleased;
    //genero
    const dt5=document.createElement("dt");
    grupodl.appendChild(dt5);
    dt5.textContent="Genero:"
    const dd5=document.createElement("dd");
    grupodl.appendChild(dd5);
    dd5.setAttribute("itempro", "gender");
    dd5.textContent=datos.facts.gender;
    //estilo de juego 
    const dt6=document.createElement("dt");
    grupodl.appendChild(dt6);
    dt6.textContent="Estilo de juego:"
    const dd6=document.createElement("dd");
    grupodl.appendChild(dd6);
    dd6.setAttribute("itempro", "playingStyles");
    dd6.textContent=datos.facts.playingStyles;
    //perspectiva
    const dt7=document.createElement("dt");
    grupodl.appendChild(dt7);
    dt7.textContent="Perspectiva:"
    const dd7=document.createElement("dd");
    grupodl.appendChild(dd7);
    dd7.setAttribute("itempro", "pointsOfView");
    dd7.textContent=datos.facts.pointsOfView;
    //multiplayer
    const dt8=document.createElement("dt");
    grupodl.appendChild(dt8);
    dt8.textContent="Multiplayer:"
    const dd8=document.createElement("dd");
    grupodl.appendChild(dd8);
    dd8.setAttribute("itempro", "multiplayer");
    dd8.textContent=datos.facts.multiplayer;
 

  }
  return contenedorUl;
};

