const { somarDoisNumeros } = require('../src/calculadora');

describe('A função deve ser capaz somar 2 numeros', function (){
    it('Deve retornar 5 para os numeros 2 e 3', function (){
        const resultado = somarDoisNumeros(2, 3);   
        if (resultado !== 5) {
            throw new Error(`O resultado esperado era 5, mas o resultado foi ${resultado}`);
        }
        console.log('Teste passou com sucesso');   
    });
});
