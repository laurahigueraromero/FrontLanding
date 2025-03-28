window.onload = function () {
  setTimeout(function () {
    const div = document.getElementById("miDiv");

    // Inserta texto en el div usando innerText
    div.style.color = "white";
    div.style.textAlign = "center";
    div.style.fontSize = "300%";
    div.style.padding = "2%";
    div.innerText =
      "La sinergia se refiere a la acción conjunta de dos o más causas, fuerzas, influencias o sistemas que produce un efecto superior a la suma de los efectos individuales.";
  }, 1000); // 2

  setTimeout(function () {
    let texto = document.getElementById("propuesta");

    texto.style.color = "deeppink";
    texto.style.textAlign = "center";
    texto.style.fontSize = "300%";
    texto.style.padding = "2%";
    texto.innerText = "Tu diseño\nMi código";
  }, 2100);

  setTimeout(function () {
    const divDos = document.getElementById("boton");
    const button = document.createElement("button");

    button.textContent = "saber más";
    button.style.marginLeft = "45%";
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.width = "10%";
    button.style.padding = "0.8%";
    button.style.borderRadius = "2%";
    divDos.appendChild(button);
    button.addEventListener("click", function () {
      // Redirige a otra página (puedes cambiar la URL según lo necesites)
      window.location.href = "http://127.0.0.1:5501/index/formulario.html"; // Reemplaza con la URL que deseas
    });
  }, 3100); // 2
};
