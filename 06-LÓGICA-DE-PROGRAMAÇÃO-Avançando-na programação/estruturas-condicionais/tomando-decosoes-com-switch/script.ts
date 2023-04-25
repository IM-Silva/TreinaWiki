let mes = 1;


// A palavra-chave BREAK sai do bloco switch. Isso interromperá a execução de mais execução de código e/ou teste de caso dentro do bloco. Se break for omitido, o próximo bloco de código na instrução switch será executado.//

switch (mes) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Maio');
        break;
    case 6:
        console.log('Junho');
        break;
    case 7:
        console.log('Julho');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Setembro');
        break;
    case 10:
        console.log('Outubro');
    case 11:
        console.log('Novembro');
        break;
    case 12:
        console.log('Dezembro');
        break;
    default:
    console.log('Mês Inválido');
    break;
}