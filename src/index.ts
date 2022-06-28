let btnEnviar = document.getElementById("btnEnviar");
let rotulo = document.getElementById("rotulo");
let dato = document.getElementById("dato");

rotulo.innerHTML = "Ingrese numero: ";

btnEnviar.addEventListener("click", () => {
  let ingreso: number = Number(dato.value);

  if (ingreso > Number(0)) {
    console.log("Es numero par");
  } else {
    if (ingreso < Number(0)) {
      console.log("Es numero impar");
    } else {
      console.log("Es numero 0");
    }
  }
});
