const form = document.getElementById('formNumeros');
const numeroMenor = document.getElementById('numeroMenor');
const numeroMaior = document.getElementById('numeroMaior');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valor1 = Number(numeroMenor.value);
    const valor2 = Number(numeroMaior.value);

    if (valor1 >= valor2) {
        alert("O segundo numero deve ser maior");
    
    } else {
        alert("O segundo número de fato é maior que o primeiro")
    }
});