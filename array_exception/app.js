try {
    const listaProdutosDisponiveis = [
        'pao',
        'leite',
        'cafe',
        'laranja',
        'macarrao',
        'sabonete',
        'detergente',
        ];
        
        
        const listaArgumentos = process.argv.slice(2);
        
        const listaProdutosSolicitadosDisponiveis = listaProdutosDisponiveis.filter(produto => {
            return listaArgumentos.find(argumento => argumento === produto);
        });
        listaProdutosSolicitadosDisponiveis.forEach( produto => console.log(`este produtos nos temos: ${produto}`));
        
        const listaProdutosSolicitadosNaoDisponiveis = listaArgumentos.filter(argumento => {
            return !listaProdutosDisponiveis.find(produto => produto === argumento);
        });
        listaProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`nao temos este produto: ${argumento}`));
        
        listaProdutosDisponiveis.sort();
        listaProdutosDisponiveis.forEach( produto => console.log(`produto disponivel na loja: ${produto}`));
        
} catch (e) {
    console.log('nao foi possivel executar sua compra:');
    
}



