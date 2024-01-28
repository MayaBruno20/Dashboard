document.addEventListener('DOMContentLoaded', function () {
    // Selecione todos os spans dentro da div com a classe "settings-content"
    var settingsSpans = document.querySelectorAll('.settings-content span');

    // Adicione um evento de clique a cada span
    settingsSpans.forEach(function (span) {
        span.addEventListener('click', function () {
            // Obtenha o ID do span clicado
            var spanId = span.id;

            // Selecione a caixa correspondente com base no ID do span
            var additionalBox = document.querySelector('#' + spanId + '-box');

            // Exiba a caixa selecionada
            additionalBox.style.display = 'block';
        });
    });

    // Adicione um evento de clique ao botão fechar em cada caixa
    var closeBoxButtons = document.querySelectorAll('.close-box');
    closeBoxButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Oculte a caixa correspondente quando o botão fechar for clicado
            var additionalBox = button.closest('.additional-box');
            additionalBox.style.display = 'none';
        });
    });
});
