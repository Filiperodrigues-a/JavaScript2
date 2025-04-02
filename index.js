const estoque = [
    {id: 2035, titulo: 'harry potter', quantidade: 2},
    {id: 2023, titulo: 'Como conhecer Pessoas', quantidade: 3},
    {id: 2055, titulo: 'Programaçao', quantidade: 5},
];

const adicionaLivro = (id, titulo, autor, quantidade) => {
    estoque.push({
        id,
        titulo,
        autor,
        quantidade
    })
}
adicionaLivro(2020, 'assim que é', 'qualquer', 2);

const removeLivro = (idDoLivro) => {
    const existeIdNoEstoque = estoque.find(livro => livro.id === idDoLivro)
    if(existeNoEstoque) {
        for(let indice = 0; indice < estoque.length; indice++) {
            if(estoque[indice].id === idDoLivro) {
                console.log('O livro de id ${idDoLivro} foi removido')
                estoque.splice(indice, 1)
                break;
            }
    }   }
    else
    console.log('O livro de id ${idDoLivro} não foi encontrado')
}
removeLivro()

const atualizaQuantidade = (id, novaQuantidade) => {
    const existeIdNoEstoque = estoque.find(livro => livro.id === idDoLivro)
    if(existeIdNoEstoque) {
        for(let livro of estoque) {
            if(livro.id === idDoLivro) {
            livro.quantidade = novaQuantidade;
            console.log('A quantidade do livro ${livro.titulo} foi atualizada')
            break;
         }
    
    }
    } else{
        console.log('O id ${idDoLivro} não foi localizado no estoque.')
    }
}
atualizaQuantidade();
console.log(estoque);

const listarLivros = () => {
    if(estoque.length === 0) {
        console.log('O estoque está vazio')
    }else {
        console.log('O estoque possui ${estoque.length} títulos.')
        for (let livro of estoque) {
            console.log('ID: ${livro.id}
                Livro: ${livro.titulo}
                Autor: ${livro.autor}
                Qauntidade: ${livro.quantidade}')
        }
    }console.log(`${listaNovos.length} livros adicionados`);
}
adicionadoDaLista(ListaNovosLivros);
console.log(estoque);

listarLivros()

const executaEMostraLista = (acao, mostraLista) => {
    acao();
    mostraLista();
}
executaEMostraLista(() => adicionaLivro(2020, 'assim que é', 'qualquer', 2))
