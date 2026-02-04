document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("botaoEnviar");
  if (!btn) return; // botão não existe na página
  btn.addEventListener("click", validaFormulario);
});

function validaFormulario(event) {
  if (event) event.preventDefault();
  const nome = document.getElementById("nome")?.value?.trim() || "";
  const email = document.getElementById("email")?.value?.trim() || "";
  // telefone é opcional; só validamos nome e email
  if (nome !== "" && email !== "") {
    alert("Prontinho! Você receberá as novidades por email.");
  } else {
    alert("Por favor, preencha os campos nome e email!");
  }
}
