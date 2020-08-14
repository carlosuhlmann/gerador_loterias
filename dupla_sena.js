function sorteio() {

    const jogo = [];
    let qtd = document.getElementById("quantidade").value

    var numeroSorteado = Math.round(Math.random() * 59 + 1);
    jogo[0] = numeroSorteado;
    var i = 1;

    while (i < qtd) {
        var j = 0;
        numeroSorteado = Math.round(Math.random() * 59 + 1);
        while (j < i) {
            if (numeroSorteado == jogo[j]) {
                numeroSorteado = Math.round(Math.random() * 59 + 1);
                j = 0
            }
            else {
                j = j + 1
            }
        }
        jogo[j] = numeroSorteado;
        i = i + 1;
    }


    jogo.sort(function (a, b) {
        return a - b;
    });


    if (qtd == 15) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]} - ${jogo[12]} - ${jogo[13]} - ${jogo[14]}`;
    }
    else if (qtd == 14) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]} - ${jogo[12]} - ${jogo[13]}`;
    }
    else if (qtd == 13) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]} - ${jogo[12]}`;
    }

    else if (qtd == 12) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]}`;
    }

    else if (qtd == 11) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]}`;
    }

    else if (qtd == 10) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]}`;
    }

    else if (qtd == 9) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]}`;
    }
    else if (qtd == 8) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]}`;
    }

    else if (qtd == 7) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]}`;
    }
    else if (qtd == 6) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]}`;
    }
    else if (qtd == 5) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]}`;
    }
    else if (qtd == 4) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]}`;
    }
    else if (qtd == 3) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]}`;
    }
    else if (qtd == 2) {
        mostrar = `${jogo[0]} - ${jogo[1]}`;
    }
    else if (qtd == 1) {
        mostrar = `${jogo[0]}`;
    }

    document.getElementById("resultado").innerHTML = mostrar;
}


function sorteio2() {

    const jogo = [];
    let qtd = document.getElementById("quantidade2").value

    var numeroSorteado = Math.round(Math.random() * 59 + 1);
    jogo[0] = numeroSorteado;
    var i = 1;

    while (i < qtd) {
        var j = 0;
        numeroSorteado = Math.round(Math.random() * 59 + 1);
        while (j < i) {
            if (numeroSorteado == jogo[j]) {
                numeroSorteado = Math.round(Math.random() * 59 + 1);
                j = 0
            }
            else {
                j = j + 1
            }
        }
        jogo[j] = numeroSorteado;
        i = i + 1;
    }


    jogo.sort(function (a, b) {
        return a - b;
    });


    if (qtd == 15) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]} - ${jogo[12]} - ${jogo[13]} - ${jogo[14]}`;
    }
    else if (qtd == 14) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]} - ${jogo[12]} - ${jogo[13]}`;
    }
    else if (qtd == 13) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]} - ${jogo[12]}`;
    }

    else if (qtd == 12) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]} - ${jogo[11]}`;
    }

    else if (qtd == 11) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]} - ${jogo[10]}`;
    }

    else if (qtd == 10) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]} - ${jogo[9]}`;
    }

    else if (qtd == 9) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]} - ${jogo[8]}`;
    }
    else if (qtd == 8) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]} - ${jogo[7]}`;
    }

    else if (qtd == 7) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]} - ${jogo[6]}`;
    }
    else if (qtd == 6) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]} - ${jogo[5]}`;
    }
    else if (qtd == 5) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]} - ${jogo[4]}`;
    }
    else if (qtd == 4) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]} - ${jogo[3]}`;
    }
    else if (qtd == 3) {
        mostrar = `${jogo[0]} - ${jogo[1]} - ${jogo[2]}`;
    }
    else if (qtd == 2) {
        mostrar = `${jogo[0]} - ${jogo[1]}`;
    }
    else if (qtd == 1) {
        mostrar = `${jogo[0]}`;
    }

    document.getElementById("resultado2").innerHTML = mostrar;
}