$(function () {
    calcularIMC();
});

/* FUNÇÕES */


function calcularIMC() {

    $('button').bind('click', function () {

        var altura;
        var peso;
        var arrayDados;
        var imc;

        altura = $('#altura').val();
        peso = $('#peso').val();

        arrayDados = dadosTratados(altura, peso);

        altura = arrayDados['altura'];
        peso = arrayDados['peso'];
        imc = peso / (altura * altura);

        $('#resultado').html('Seu IMC é: ' + imc + ' Kg/m² e seu status é ' + statusIMC(imc));

    });

}

function dadosTratados(altura, peso) {
    var dadosTratados = [];
    dadosTratados['altura'] = altura.replace(',', '.');
    dadosTratados['peso'] = peso.replace(',', '.');
    return dadosTratados;
}

function statusIMC(imc) {

    var status;

    if (imc < 16) {
        status = "Baixo peso muito grave";
    } else if (imc >= 16 && imc < 16.99) {
        status = "Baixo peso grave";
    } else if (imc >= 17 && imc < 18.49) {
        status = "Baixo peso";
    } else if (imc >= 18.50 && imc < 24.99) {
        status = "Peso normal";
    } else if (imc >= 25 && imc < 29.99) {
        status = "Sobrepeso";
    } else if (imc >= 30 && imc < 34.99) {
        status = "Obesidade grau I";
    } else if (imc >= 35 && imc < 39.99) {
        status = "Obesidade grau II";
    } else if (imc >= 40) {
        status = "Obesidade grau III";
    }

    return status;

}
