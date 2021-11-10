/*
- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida
com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade.
    Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.

- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 

- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";

- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;

- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

function Microondas(NumeroTipoComida, tempoSelecionado) {
    let mensagem = 'CheckPoint I \n';

    switch(NumeroTipoComida) {
        case 1 :
            mensagem += 'Você selecionou o tipo de comida Pipoca\n';



            if (tempoSelecionado >= 30) {
                mensagem += 'kabumm\n';
            }
         

                 if (tempoSelecionado > 20 && tempoSelecionado <30 ) {
                    mensagem += 'Sua comida queimou\n';
            }
        ;

            if (tempoSelecionado < 10 ) {
                mensagem += 'tempo insuficiente\n';
        }
 
        ;

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
console.log(Microondas(1, 10));