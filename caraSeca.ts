export class CaraSeca {
  protected valorDeApuesta:number;
  protected valorPremio:number;
  protected caraElegida:string;

    constructor(pValorDeApuesta:number,pValorPremio:number,pCaraElegida:string) {
      this.valorDeApuesta = pValorDeApuesta;
      this.valorPremio = pValorPremio;
      this.caraElegida = pCaraElegida;
    }
    
    getRandomInt(max:number):number { 
        return Math.floor(Math.random() * max);
      }
    
    setCaraElegida(pCaraElegida:string):void{
        this.caraElegida = pCaraElegida;
    }


      
    jugarCaraSeca(pCaraElegida:string):any {
      let caraSeca = this.getRandomInt(2);
      let ladoResultado = this.convertirStringAnumber(caraSeca);
      pCaraElegida = this.caraElegida;
      if (this.valorDeApuesta > 0){

        if (ladoResultado === pCaraElegida) {
          this.sumarPremio();
          return `Usted gano en CaraSeca! el resultado fue ${ladoResultado}, Su saldo actual es $ ${this.valorDeApuesta}`
        
        }else {
          this.restarPremio();
          return `Usted Perdio en CaraSeca! el resultado fue ${ladoResultado}, Su saldo actual es $ ${this.valorDeApuesta}`
        }
      } return "Usted no tiene Suficiente dinero para seguir jugando al CaraSeca, si quiere seguir jugando ingrese mas dinero!"

    }

    convertirStringAnumber(pLadoResultado:number):string {
      if (pLadoResultado ===0){
        return "cara";
      } else{
        return "seca";
      }

    }
    restarPremio():void{
      this.valorDeApuesta = this.valorDeApuesta - 10;
    }
    sumarPremio():void{
        this.valorDeApuesta = this.valorDeApuesta + this.valorPremio;
    }
    setValorDeApuesta(pValorDeApuesta:number):void{
      this.valorDeApuesta = pValorDeApuesta;
  }
  public getValorDeApuesta():number {
      return this.valorDeApuesta;
  }

}