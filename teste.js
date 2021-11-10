function produto(tipo, valor) {
    let mensagem = '\n';

    switch(tipo) {
        case 'celular' :
            mensagem += 'Você selecionou o produto celular\n';

            if (valor >= 2000) {
                mensagem += 'O seu produto tem um valor alto, deseja fazer um seguro?\n';
            }
        break;
        case 'televisão' :
            mensagem += 'Você selecionou o produto televisão\n';
        break; 
        case 'mouse-teclado' :
            mensagem += 'Você selecionou o produto Mouse e teclado\n';

            if (valor >= 600) {
                mensagem += 'Você ganhou um mousepad. Retire no caixa\n';
            } else {
                mensagem += 'Gostaria de comprar um mousepad junto por R$ 50,00?\n';
            }           
        break;
        default :
            mensagem += 'Você ainda não selecionou nenhum produto, precisa de ajuda?\n';
    }

    mensagem += promocao('07/11');
    mensagem += cashback(valor);
   

    return mensagem;

}



function promocao(data) {
    if (data === '08/11') {
        return 'Você tem um cupom para um desconto de 10%\n';
    } else {
        return 'Não existem cupom disponível para hoje\n';
    }  
}

function cashback(total) {
    if (total >= 2000) {
        return 'Você tem um cashback de 50\n';
    } else {
        return 'O valor mínimo para um cashback é de 2000\n';
    }
}

console.log(produto('celular', 2000));
console.log('\n-------------------------\n');
console.log(produto('televisão', 2000));
console.log('\n-------------------------\n');
console.log(produto('mouse-teclado', 500));
console.log('\n-------------------------\n');
console.log(produto('mouse-teclado', 600));