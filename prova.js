class Venda{
    constructor(loja, lanche, acompanhamento){
        this.loja = loja;
        this.lanche = lanche;
        this.acompanhamento = acompanhamento;
        combo(lanche);
        this.combo1 = "McLanche Alegre" + acompanhamento
        this.combo2 = "Biglanche" + acompanhamento
        this.combo1 = "McHen" + acompanhamento
    }
    if(lanche != "McLanche Alegre" || lanche != "Biglanche" || lanche != "McHen"){
        console.error("insira um lanche válido")
    }
    else{
        console.log("seu pedido foi cadastrado")
    };
    
    if(acompanhamento != "Batata média" || lanche != "Refri" || lanche != "Fruta"){
        console.error("insira uma fruta válido")
    }
    else{
        console.log("seu pedido foi cadastrado")
    }
}
