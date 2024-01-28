document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o elemento HTML 'aside' e os botões de menu e fechar
    const sideMenu = document.querySelector('aside');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    // Seleciona o elemento HTML '.dark-mode'
    const darkMode = document.querySelector('.dark-mode');

    // Carrega a preferência do modo escuro do armazenamento local
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Define o tema com base na preferência carregada
    setTheme(isDarkMode);

    // Adiciona um ouvinte de evento para o botão de abrir o menu lateral
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
    });

    // Adiciona um ouvinte de evento para o botão de fechar o menu lateral
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
    });

    // Adiciona um ouvinte de evento para o botão de alternância de modo escuro
    darkMode.addEventListener('click', () => {
        // Inverte a preferência de modo escuro
        isDarkMode = !isDarkMode;
        // Atualiza a preferência no armazenamento local
        localStorage.setItem('darkMode', isDarkMode);
        // Define o tema com base na nova preferência
        setTheme(isDarkMode);
    });

    // Itera sobre a lista de pedidos e adiciona cada pedido à tabela
    Orders.forEach(order => {
        const tr = document.createElement('tr');
        const trContent = `
            <td>${order.productName}</td>
            <td>${order.productNumber}</td>
            <td>${order.paymentStatus}</td>
            <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
            <td class="primary">Details</td>
        `;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
    });

    // Função para definir o tema com base na preferência
    function setTheme(isDarkMode) {
        document.body.classList.toggle('dark-mode-variables', isDarkMode);
        // Remove a classe 'active' de ambos os spans
        darkMode.querySelector('span:nth-child(1)').classList.remove('active');
        darkMode.querySelector('span:nth-child(2)').classList.remove('active');
        // Adiciona a classe 'active' ao span correspondente
        darkMode.querySelector(isDarkMode ? 'span:nth-child(2)' : 'span:nth-child(1)').classList.add('active');
    }
});
