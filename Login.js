// Seleciona o elemento HTML com o id 'container' e os botões de registro e login
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Adiciona um ouvinte de evento para o botão de registro
registerBtn.addEventListener('click', () => {
    // Adiciona a classe 'active' ao elemento 'container' para exibir o formulário de registro
    container.classList.add("active");
});

// Adiciona um ouvinte de evento para o botão de login
loginBtn.addEventListener('click', () => {
    // Remove a classe 'active' do elemento 'container' para exibir o formulário de login
    container.classList.remove("active");
});