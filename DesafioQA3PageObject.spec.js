///<reference types="cypress" />

import Totvs from '../support/Pages/Totvs';
import Procurar from '../suport/Pages/Procurar';
import Cursologica from '../support/Pages/Cursologica';
import Meucarrinho from '../support/Pages/Meucarrinho';

describe('DesafioQA3Page.spec.js', ()=>{

    it('Deve acessar o site',()=>{
        //acessar o site Totvs
        Totvs.acessarSite();

    })
    
    it('Deve buscar um produto',()=>{
        //acessar o site Totvs
        //buscar um produto de lógica de programação
        Totvs.acessarSite();
        Procurar.preencherBusca();
        
    })

    it('Acessar e encontrar um produto',()=>{
        //acessar o site
        //buscar um produto referente a lógica de programação
        //clicar no produto que escolher
        Totvs.acessarSite();
        Procurar.preencherBusca();
        Cursologica.escolherCurso();
        
    })
    
    it('Adicionar produto ao carrinho', ()=>{
        //acessar o site
        //buscar um produto referente a lógica de programação
        //adicionar um produto ao carrinho
        Totvs.acessarSite();
        Procurar.preencherBusca();
        Cursologica.escolherCurso();
        Meucarrinho.adicionarCurso();

    })

})