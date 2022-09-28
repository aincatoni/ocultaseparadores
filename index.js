const arraySegundoHijo = [];
const arraySections = [];

function guardarSections() {
  const productos = document.querySelector("#productos");
  const titulosSeparadores = productos.querySelectorAll("section");
  const productosSeparadores = productos.querySelectorAll(
    "section > div:nth-child(2)"
  );
  for (let i = 0; i < productosSeparadores.length; i++) {
    /* separadores[i]; */
    /* console.log("iteracion" + i); */
    /* console.log(separadores[i]); */
    arraySegundoHijo.push(productosSeparadores[i]);
    arraySections.push(titulosSeparadores[i]);
  }
}

console.log(arraySections);
console.log(arraySegundoHijo);

guardarSections();
/* console.log(arrayNodos); */

/* const probando = () => {
  if (arrayNodos[1].hasChildNodes() === false) {
    console.log("Soy el primero div y no tengo hijos");
  } else if (arrayNodos[1].hasChildNodes() === false) {
    console.log("Soy el segundo div y no tengo hijos");
  } else if (arrayNodos[2].hasChildNodes() === false) {
    console.log("Soy el tercer div y no tengo hijos");
  }
}; */

/* probando(); */

const ocutarSection = () => {
  for (let j = 0; j < arraySegundoHijo.length; j++) {
    if (arraySegundoHijo[j].hasChildNodes() === false) {
      /* console.log("No tengo hijos"); */
      arraySections[j].style.display = "none";
    }
  }
};

ocutarSection();
