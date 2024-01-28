// Código JavaScript para a Seção de Caixa de E-mails

document.addEventListener("DOMContentLoaded", function () {
    // Simulação de dados de e-mails (pode ser substituído por dados reais ou dinâmicos)
    const emails = [
        { subject: "E-mail Teste 1", sender: "Bruno.Maia@prseg.com.br", content: "Conteúdo do e-mail 1..." },
        { subject: "E-mail Teste 2", sender: "Suporte@prseg.com.br", content: "Conteúdo do e-mail 2..." },
        // Adicione mais e-mails conforme necessário
    ];

    // Função para exibir e-mails na caixa de e-mails
    function renderEmails() {
        const emailList = document.querySelector(".email-list");

        emails.forEach((email) => {
            const emailDiv = document.createElement("div");
            emailDiv.classList.add("email");

            emailDiv.innerHTML = `
                <h3>${email.subject}</h3>
                <p>Remetente: <strong>${email.sender}</strong></p>
                <p>${email.content}</p>
            `;

            emailList.appendChild(emailDiv);
        });
    }

    // Chame a função para exibir e-mails
    renderEmails();
});

// Adicione mais lógica JavaScript conforme necessário para tornar a seção de e-mails interativa.
