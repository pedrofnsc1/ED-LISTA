export default class pilhas {
    constructor(tamanho = 10){
        this.dado = [];
        this.tamanhoMax = tamanho;
        this.topoA = tamanho;
        this.topoB = -1;
    }

    AisEmpty(){
        return this.topoA === this.tamanhoMax;
    }

    BisEmpty(){
        return this.topoB === - 1;
    }

    pushA(novoDado){
        if(!this.isFull()){
            this.dado[--this.topoA] = novoDado;
        }else{
            throw new Error("stack overflow");
        }
    }

    pushB(novoDado){
        if(!this.isFull()){
            this.dado[++this.topoB] = novoDado;
        }else{
            throw new Error("stack overflow");
        }
    }

    popA(){
        if(!this.AisEmpty()){
            this.topoA++;
        }else{
            throw new Error("stack underflow");
        }
    }

    popB(){
        if(!this.BisEmpty()){
            this.topoB--;
        }else{
            throw new Error("stack underflow");
        }
            
    }

    isFull(){
        if(this.topoA + 1 === this.topoB || this.topoB+ 1 === this.topoA){
            return true
        }else {
            return false;
        }
        
    }

    clear(){
        this.topoA = this.tamanhoMax;
        this.topoB = -1;
    }
}