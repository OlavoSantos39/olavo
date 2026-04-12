  const texto = "Olavo Santos - Desenvolvedor";
    const h1 = document.getElementById("typing");
    let i = 0;

    function digitar() {
      if (i < texto.length) {
        h1.textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 150); // velocidade da digitação (ms)
      }
    }

    digitar();