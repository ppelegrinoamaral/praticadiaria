function valida() {
    var numero = document.getElementById('numero');

    if (numero.value % 2 == 0) {
        alert("Número par")
    } else { 
        alert("Número ímpar")
    }
}