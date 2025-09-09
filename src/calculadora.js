function somarDoisNumeros(valor1, valor2){

    const resultado = valor1 + valor2;
    return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2){

    const resultadoSomaDeDoisNumeros = somarDoisNumeros(valor1,valor2);

    const resultadoMediaDeDoisValores = resultadoSomaDeDoisNumeros / 2;

    return resultadoMediaDeDoisValores;

}

module.exports = {
    somarDoisNumeros
}