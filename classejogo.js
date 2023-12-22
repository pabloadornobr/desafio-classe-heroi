class heroi{
    constructor(nome, idade, tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
        this.ataque="";
    }
  
    atacar(){
        if(this.tipo==="guerreiro"){
            this.ataque="espada"
        }
        if(this.tipo==="mago"){
            this.ataque="magia"
        }
        if(this.tipo==="monge"){
            this.ataque="artes marciais"
        }
        if(this.tipo==="ninja"){
            this.ataque="shuriken"
        }
        console.log(this.nome+", "+this.idade+" anos, "+this.tipo);
        console.log("O "+this.tipo+" "+this.nome+" atacou usando "+this.ataque);

    }
    
}

let heroinovo= new heroi("Kirito", "18","guerreiro");
console.log(heroinovo);
heroinovo.atacar();

