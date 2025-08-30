// Aguarda o carregamento completo do DOM antes de executar o script
// Executa apenas quando a página está pronta

// Adiciona funcionalidade ao formulário de contato
// Seleciona o formulário pelo ID
// Se existir, adiciona evento de envio
// Previne o envio padrão, pega os valores dos campos, mostra alerta e limpa o formulário

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona o formulário de contato pelo ID
  const contactForm = document.getElementById("contact-form");

  // Verifica se o formulário existe na página atual
  if (contactForm) {
    // Adiciona um ouvinte de evento para o envio (submit) do formulário
    contactForm.addEventListener("submit", function (event) {
      // Previne o comportamento padrão do formulário, que é recarregar a página
      event.preventDefault();

      // Pega os valores dos campos (opcional, mas bom para futuras validações)
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Exibe um alerta de sucesso (demonstração, pois não envia e-mail de verdade)
      alert(
        "Obrigado, " +
          name +
          "! Sua mensagem foi recebida. (Isso é uma demonstração)"
      );

      // Limpa os campos do formulário após o envio
      contactForm.reset();
    });
  }
});
