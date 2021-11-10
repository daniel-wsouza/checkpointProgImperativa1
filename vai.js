function Microondas(tipoComida, tempoSelecionado) {
    let mensagem = 'CheckPoint I \n';

    switch(tipoComida) {
        case 'Pipoca' :
            mensagem += 'Você selecionou o tipo de comida Pipoca\n';

            if (tempoSelecionado >= 30) {
                mensagem += 'kabumm\n';
            }
                 if (tempoSelecionado > 20  ) {
                    mensagem += 'Sua comida queimou\n';
            }
            if (tempoSelecionado < 10 ) {
                mensagem += 'tempo insuficiente\n';
        }
        if (tempoSelecionado = 10 ) {
            mensagem += 'Prato pronto, bom apetite!!!\n';
    }
        break;
    }

    mensagem += msgPadrao();    

    return mensagem;
}

function msgPadrao() {
    return 'Obrigado!\n';
}
console.log(Microondas('Pipoca', 22));