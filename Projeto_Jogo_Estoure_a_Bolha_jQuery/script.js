var placar = 0;

$(function () {
    $('#comecar').bind('click', function () {
        setInterval(addBola, 1000);
    });
});

function addBola() {

    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 500);

    // Criando elemento bola
    var bola = $('<div class="bola"></div>');

    // Posicionando x e y do elemento bola
    bola.css('left', x + 'px');
    bola.css('top', y + 'px');

    // Número aleatórios de 1 a 4 que definirão a cor da bola
    var cor = Math.floor(Math.random() * 4);

    // Dependendo do número da cor é definido o CSS do elemento
    switch (cor) {
        case 0:
            bola.css('background-color', 'blue');
            break;

        case 1:
            bola.css('background-color', 'red');
            break;

        case 2:
            bola.css('background-color', 'yellow');
            break;

        case 3:
            bola.css('background-color', 'green');
            break;
    }

    // Quando clicado elimina o elemento bola, e atualiza o placar
    bola.bind('click', function () {
        $(this).fadeOut('fast');
        placar++;
        updatePlacar();
    });

    // Adiciona o elemento bola na tela
    $(document.body).append(bola);

}

function updatePlacar() {
    $('#placar').html(placar);
}
