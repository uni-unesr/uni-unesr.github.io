// Clases constructoras
// :

class Inventario {
  constructor() {
    //Propiedades
    this.productos = [];
  }
  //Métodos:

  //Añadir Productos
  add(producto) {
    this.productos.push(producto);
    console.log("Producto añadido correctamente");
  }
  //Eliminar Productos
  rm(producto) {
    const indice_rm = this.productos.findIndex((item) => item == producto);
    if (indice_rm !== -1) {
      this.productos.splice(indice_rm, 1);
      console.log("Eliminado correctamente");
    } else {
      console.error("No se ha podido eliminar el producto");
    }
  }
  //Ver Todos los Productos
  show() {
    console.log("-".repeat(40));
    console.log(this.productos);
  }
}

class Producto {
  // Propiedades
  constructor(modelo, precio, descripcion, inventario) {
    this.modelo = modelo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.inventario = inventario;
    //Métodos
    if (inventario instanceof Inventario) {
      inventario.add(this);
      console.log("añadido al inventario");
    } else {
      console.error("El inventario no existe");
    }
  }
}

class Franela extends Producto {
  constructor(modelo, precio, descripcion, color, inventario) {
    //Propiedades
    super(modelo, precio, descripcion, inventario);
    this.color = color;
    //Métodos
  }
}

//Instanciando el Inventario:

const mi_inventario = new Inventario();

//Instanciando Objetos

const sudadera = new Franela(
  "Sudadera",
  5.99,
  "Sudadera excelente calidad, hecha de tela alicrada",
  "./images/sudadera1.png",
  mi_inventario,
);

const algodon = new Franela(
  "Franela Básica",
  3.99,
  "Franela de excelente calidad hecha con algodon",
  "./images/franela1.png",
  mi_inventario,
);

const camisa = new Franela(
  "Manga Larga",
  10.99,
  "Camisa de vestir de color azul",
  "./images/camisa1.png",
  mi_inventario,
);

const chemise = new Franela(
  "Chemise",
  10.99,
  "Chemise azul de algodón",
  "./images/camisa2.png",
  mi_inventario,
);

const bolso = new Franela(
  "Bolso",
  2.99,
  "Bolso grande y acolchado resistente al agua",
  "./images/bolso.png",
  mi_inventario,
);

const termo = new Franela(
  "Termo Acero UNESR",
  5.99,
  "Mantiene bebidas a la temperatura ideal",
  "./images/termo1.png",
  mi_inventario,
);

const software = new Franela(
  "Licencia de Microsoft Office",
  15.99,
  "Acceso anual a suite professional",
  "./images/office.png",
  mi_inventario,
);

const gorra = new Franela(
  "Gorra Básica",
  15.99,
  "Gorra personalizada para protección solar",
  "./images/gorra1.png",
  mi_inventario,
);

console.log(mi_inventario.productos.length);

//--------------------------------------------
//----------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
//------------------------------------------
//-----------------------------------------------
// Inyección del DOM;

const main = document.querySelector("main");

const button = `<svg class="icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg>
`

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="none" viewBox="0 0 360 432"> <path fill="#E74C37" stroke="none" id="path2"
	d="
M93.002632,161.002838 
	C84.850296,163.105469 77.029030,160.891052 69.487061,158.449326 
	C58.577053,154.917191 47.948875,150.518265 37.178741,146.548080 
	C33.993416,145.373856 33.185268,143.320053 34.418877,140.276581 
	C36.105602,136.115219 38.134357,132.054062 39.403442,127.768410 
	C45.257538,107.999336 50.834801,88.148346 56.672325,68.374260 
	C57.796326,64.566803 59.634293,60.969250 61.155891,57.280228 
	C65.431099,46.915268 74.650932,42.484501 84.092003,38.529716 
	C104.196693,30.108034 124.391533,21.901543 144.556122,13.623168 
	C144.832306,13.509780 145.195786,13.609020 145.985504,13.609020 
	C146.045090,14.806912 146.217331,16.048750 146.150665,17.277624 
	C145.579025,27.812849 150.190598,35.407974 159.652908,39.669930 
	C175.711182,46.902809 192.117493,46.460880 208.239029,40.064056 
	C216.172897,36.915997 220.962204,30.174044 222.319763,21.859901 
	C222.897934,18.319120 221.039841,14.380533 220.170975,10.032763 
	C223.260956,11.904087 226.010010,13.937619 229.048996,15.345098 
	C241.730545,21.218428 254.634827,26.625212 267.195007,32.741924 
	C278.100800,38.052948 289.040344,43.484837 299.231476,50.009037 
	C306.520935,54.675602 310.743652,62.607384 312.776123,71.019516 
	C318.338745,94.042229 324.664307,116.800903 333.882507,138.666000 
	C335.343262,142.130875 334.454071,144.519455 331.141205,145.999771 
	C316.798126,152.408783 301.981934,157.332611 286.417053,159.731110 
	C284.343719,160.050613 282.059326,159.762558 280.000275,159.246628 
	C276.278748,158.314148 274.961700,159.991226 275.077911,163.311920 
	C275.304810,169.795349 275.916168,176.272461 275.948242,182.754272 
	C276.059387,205.244980 276.066956,227.736969 275.944580,250.227570 
	C275.906586,257.209778 275.332397,264.189178 274.999695,271.169647 
	C273.980286,292.560181 276.263153,313.696564 279.339111,334.831512 
	C280.892181,345.502716 281.109253,356.366058 282.001251,367.136658 
	C282.580841,374.134430 279.455811,378.849518 272.944977,380.875427 
	C263.271240,383.885468 253.541656,386.812073 243.679474,389.100128 
	C224.285385,393.599609 204.404831,395.361359 184.660385,394.695435 
	C161.252716,393.905914 137.905838,390.996948 114.570412,388.633453 
	C109.513863,388.121307 104.490898,386.364288 99.678024,384.574188 
	C92.494621,381.902405 90.320778,378.337280 90.562805,370.837372 
	C91.700096,335.595032 91.498543,300.234741 94.534821,265.155426 
	C96.471169,242.784073 92.414551,221.004379 92.946701,198.919083 
	C93.243584,186.597855 92.999840,174.263596 93.015877,161.455902 
	C93.032036,160.976608 93.002632,161.002838 93.002632,161.002838 
z"/>
</svg>`;

const get_elements = () => {
  let html = "";
  for (let i = 0; i < mi_inventario.productos.length; i++) {
    let código = `<div class = "card"><div id="img_container"><img src=${mi_inventario.productos[i].color}></div><p id="texto"><span id="titulo">${mi_inventario.productos[i].modelo}</span></p><p id="descripcion">${mi_inventario.productos[i].descripcion}</p><p id="precios"><span id="dolar">$</span><span id="precio">${mi_inventario.productos[i].precio}</span></p><button class="btn">${button}</button><p id="carrito">🛒</p></div>`;
    html += código;
  }
  console.log(html);
  return html;
};

main.insertAdjacentHTML("afterbegin", get_elements());


const heart = document.querySelectorAll(".icon");


heart.forEach(heart =>{
  heart.addEventListener("click",()=>{
    heart.classList.toggle("btn_red");
    console.log("Botón clickeado");
  });
});
