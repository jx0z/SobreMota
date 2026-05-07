console.log("site carregado");

const text = "Miguel";

let i = 0;

function escrever() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);

    i++;

    setTimeout(escrever, 120);
  }
}

escrever();
