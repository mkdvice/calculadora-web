function calcular(tipo, valor) {

    /* Função calcular, irá pegar o tipo da entrada (Ação ou número)

     document.getElementById('resultado').value | pega o valor escrito na tela */
  
    if(tipo === 'acao') {

        if(valor === 'c'){
            //limpar a tela (id resultado)
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('resultado').value += valor
        }

        if(valor === '=') {
            // eval irá pegar a string e computar ela
            var valor_campo = eval(document.getElementById('resultado').value)

            document.getElementById('resultado').value = valor_campo          
        }

    } else if(tipo === 'valor'){
        // "+="" nesse caso irá concatenar os números para formar núemros de dois ou mais digitos
        document.getElementById('resultado').value += valor
    }

}