onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);

    // Obter os elementos
var popup = document.getElementById("popup");
var btn = document.getElementById("openPopup");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o pop-up
btn.onclick = function() {
    popup.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o pop-up
span.onclick = function() {
    popup.style.display = "none";
}

// Quando o usuário clicar fora do pop-up, fecha o pop-up
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

  };

  