// Função para registrar o ponto
function registerAttendance() {
    const employeeName = document.getElementById('employeeName').value;
    const currentTime = new Date();
    const timestamp = currentTime.toLocaleString();
  
    // Criar um objeto de registro
    const attendanceRecord = {
      name: employeeName,
      time: timestamp,
    };
  
    // Obter registros existentes ou inicializar uma lista vazia
    const existingRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
  
    // Adicionar o novo registro à lista
    existingRecords.push(attendanceRecord);
  
    // Salvar a lista atualizada no armazenamento local
    localStorage.setItem('attendanceRecords', JSON.stringify(existingRecords));
  
    // Atualizar a exibição do registro de ponto
    displayAttendanceLog();
  }
  
  // Função para exibir o registro de ponto
  function displayAttendanceLog() {
    const logList = document.getElementById('logList');
    logList.innerHTML = '';
  
    // Obter registros do armazenamento local
    const existingRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
  
    // Criar elementos de lista para cada registro
    existingRecords.forEach((record) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${record.name} - ${record.time}`;
      logList.appendChild(listItem);
    });
  }
  // Chamar a função de exibição ao carregar a página
  window.onload = displayAttendanceLog;
