document.getElementById('form').addEventListener('submit', function(event) { 
    event.preventDefault();
    event.preventDefault();
    const numberA = parseFloat(document.getElementById('numberA').value);
    const numberB = parseFloat(document.getElementById('numberB').value);
    const mensagem = document.getElementById('mensagem');

    if (numberB > numberA) {
        mensagem.textContent = "Formulário válido! Número B é maior que o número A."; 
        mensagem.style.color = "green";
        mensagem.style.display = 'block';
    } else {
        mensagem.textContent = "Formulário inválido! Número B deve ser maior que o número A."; 
        mensagem.style.color = "red"; 
        mensagem.style.display = 'block';
    }
});