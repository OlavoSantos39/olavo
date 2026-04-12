document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // evita envio automático

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      // Validação simples
      if (nome === "") {
        alert("Por favor, insira seu nome.");
        return;
      }

      if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      if (mensagem === "") {
        alert("Por favor, escreva sua mensagem.");
        return;
      }

      // Se tudo estiver ok
      alert("Mensagem enviada com sucesso!");
      form.reset(); // limpa os campos
    });
  });