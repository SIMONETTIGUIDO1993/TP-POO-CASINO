export class Tragamonedas{
    protected valorDeApuesta:number;
    protected arregloCarretes:number[];
    protected arregloJugada:number[];
    protected valorPremio:number;


    constructor(pValorDeApuesta:number,pValorPremio:number,pArregloCarretes?){
        this.valorDeApuesta = pValorDeApuesta;
        this.valorPremio = pValorPremio;
        this.arregloCarretes = pArregloCarretes;
    }
    setValorDeApuesta(pValorDeApuesta:number):void{
        this.valorDeApuesta = pValorDeApuesta;
    }
    getValorDeApuesta():number {
        return this.valorDeApuesta;
    }

    setValorPremio(pValorPremio:number):void{
        this.valorPremio = pValorPremio;
    }
    getValorPremio():number {
        return this.valorPremio;
    }
    getArregloCarretes(): number[] {
        return this.arregloCarretes;
    }
    
    setArregloCarretes(pArregloCarrete:number[]): void {
        this.arregloCarretes = pArregloCarrete;
    }


    // funcion para llenar el arreglo de jugada.

    llenarArregloJugada():number[]{
        let arregloJugada:number[] = []
    for (let i:number=0;i<this.arregloCarretes.length;i++){
        arregloJugada.push(Math.floor(Math.random() * this.arregloCarretes.length));
        }
        return arregloJugada;
    }

    //funcion para comparar el arreglo de carretes y arreglo de jugadas

    compararArreglos(pArregloJugada:number[],pArregloCarretes:number[]):boolean{
        this.arregloCarretes = pArregloCarretes
        this.arregloJugada = pArregloJugada
        let gane:boolean = true;
        for (let i:number=0;i<=this.arregloCarretes.length;i++){
            if (this.arregloJugada[i] != this.arregloCarretes[i]){
                gane = false;
                return gane;
            }
        } 
        return gane = true;
    }
    
    restarPremio():void{
        this.valorDeApuesta = this.valorDeApuesta - 10;
    }
    sumarPremio():void{
        this.valorDeApuesta = this.valorDeApuesta + this.valorPremio;
    }

    //funcion para ver los resultados de las jugadas
    public jugarTragamonedas(pArregloJugada:number[],pArregloCarrete:number[]):any{
        let arregloJugada = this.llenarArregloJugada();
        this.compararArreglos(arregloJugada,pArregloCarrete);
        
        if ((this.arregloCarretes === this.arregloJugada) && (this.valorDeApuesta > 0)) {
            this.sumarPremio();
            return `Usted Gano la jugada de Tragamonedas, su saldo es $ ${this.valorDeApuesta} ` 
        } else if ((this.arregloCarretes != this.arregloJugada) && (this.valorDeApuesta > 0)) {
            this.restarPremio();
            return `Usted Perdio la jugada de Tragamonedas,su saldo es $ ${this.valorDeApuesta} `
        } else {
            return this.mostrarMensaje()
        }
    }   


    mostrarMensaje():string {
        let mensajePerdio = "Haz Perdido en el Tragamonedas, si quiere seguir jugando ingrese mas dinero!"
        return mensajePerdio;

    }

}

