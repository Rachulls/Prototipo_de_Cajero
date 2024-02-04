let cuentas = [
  { nombre: "Mali", saldo: 200, password: "1234", dni: 44788834 },
  { nombre: "Gera", saldo: 150, password: "5678", dni: 10247439 },
  { nombre: "Sabi", saldo: 60, password: "9102", dni: 98005362 },
];

setTimeout(() => {
  document.getElementById("landing").style.display = "none";
  document.getElementById("ingresar").style.display = "flex";
}, 3000);

document.getElementById("ingresar").style.display = "none";
document.getElementById("retirar").style.display = "none";
document.getElementById("acciones").style.display = "none";
document.getElementById("depositar").style.display = "none";
document.getElementById("saldoActual").style.display = "none";
document.getElementById("loading").style.display = "none";
document.getElementById("final").style.display = "none";
document.getElementById("montoExcedido").style.display = "none";
document.getElementById("montoSuperado").style.display = "none";

let saldo, nombre;

document.getElementById("buscarPassword").addEventListener("click", () => {
  let password = document.getElementById("password").value;
  let buscarPassword = cuentas.find((cuenta) => cuenta.password === password);
  document.getElementById("loading").style.display = "flex";
  document.getElementById("ingresar").style.display = "none";
  if (buscarPassword) {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      document.getElementById("acciones").style.display = "flex";
      saldo = buscarPassword.saldo;
      nombre = buscarPassword.nombre;
      document.getElementById("dni").innerHTML = buscarPassword.dni;
      document.getElementById("nombre").innerHTML = nombre;
    }, 1500);
  } else {
    alert("El número de DNI no se encontró, intente otra vez.");
    document.location.reload();
  }
});

document.getElementById("consultarSaldo").addEventListener("click", () => {
  document.getElementById("acciones").style.display = "none";
  document.getElementById("saldoActual").style.display = "flex";
  document.getElementById("monto").innerHTML = saldo;
});

document.getElementById("back").addEventListener("click", () => {
  document.getElementById("acciones").style.display = "flex";
  document.getElementById("saldoActual").style.display = "none";
});

document.getElementById("ingresarDinero").addEventListener("click", () => {
  document.getElementById("acciones").style.display = "none";
  document.getElementById("depositar").style.display = "flex";
});

document.getElementById("enviarMonto").addEventListener("click", () => {
  let monto = document.getElementById("ingresarMonto").value;
  let saldoAniadido = +monto + saldo;
  document.getElementById("depositar").style.display = "none";
  document.getElementById("loading").style.display = "flex";
  if (saldoAniadido < 990) {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      saldo = +monto + saldo;
      document.getElementById("monto").innerHTML = saldo;
      document.getElementById("saldoActual").style.display = "flex";
      document.getElementById("formMonto").reset();
    }, 1500);
  } else {
    document.getElementById("montoExcedido").style.display = "flex";
    document.getElementById("loading").style.display = "none";
  }
});

document.getElementById("reintentarDeposito").addEventListener("click", () => {
  document.getElementById("formMonto").reset();
  document.getElementById("montoExcedido").style.display = "none";
  document.getElementById("depositar").style.display = "flex";
});

document.getElementById("retirarDinero").addEventListener("click", () => {
  document.getElementById("acciones").style.display = "none";
  document.getElementById("retirar").style.display = "flex";
});

document.getElementById("retirarMonto").addEventListener("click", () => {
  let monto = document.getElementById("montoRetiro").value;
  let montoRetirado = saldo - monto;
  document.getElementById("retirar").style.display = "none";
  document.getElementById("loading").style.display = "flex";
  if (montoRetirado >= 10) {
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      saldo = saldo - monto;
      document.getElementById("monto").innerHTML = saldo;
      document.getElementById("saldoActual").style.display = "flex";
      document.getElementById("formRetiro").reset();
    }, 1500);
  } else {
    document.getElementById("montoSuperado").style.display = "flex";
    document.getElementById("loading").style.display = "none";
  }
});

document.getElementById("reintentarRetiro").addEventListener("click", () => {
  document.getElementById("formRetiro").reset();
  document.getElementById("montoSuperado").style.display = "none";
  document.getElementById("retirar").style.display = "flex";
});

document.getElementById('logout').addEventListener("click", () => {
  document.location.reload();
});