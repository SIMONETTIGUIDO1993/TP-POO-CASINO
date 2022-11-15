export class CaraSeca {
  protected valorDeApuesta: number;
  protected valorPremio: number;
  protected caraElegida: string;

  constructor(pValorDeApuesta: number, pValorPremio: number) {
    this.valorDeApuesta = pValorDeApuesta;
    this.valorPremio = pValorPremio;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  setCaraElegida(pCaraElegida: string): void {
    this.caraElegida = pCaraElegida;
  }

  jugarCaraSeca(pCaraElegida: string): string {
    this.setCaraElegida(pCaraElegida);
    let caraSeca = this.getRandomInt(2);
    let ladoResultado = this.convertiNnumberAString(caraSeca);

    if (this.valorDeApuesta > 0) {
      if (ladoResultado === pCaraElegida) {
        this.sumarPremio();
        return `Usted gano en CaraSeca! el resultado fue ${ladoResultado}, Su saldo actual es $ ${this.valorDeApuesta}`;
      } else {
        this.restarPremio();
        return `Usted Perdio en CaraSeca! el resultado fue ${ladoResultado}, Su saldo actual es $ ${this.valorDeApuesta}`;
      }
    }
    return "Usted no tiene Suficiente dinero para seguir jugando al CaraSeca, si quiere seguir jugando ingrese mas dinero!";
  }

  convertiNnumberAString(pLadoResultado: number): string {
    if (pLadoResultado === 0) {
      return "cara";
    } else {
      return "seca";
    }
  }
  restarPremio(): void {
    this.valorDeApuesta = this.valorDeApuesta - 10;
  }

  sumarPremio(): void {
    this.valorDeApuesta = this.valorDeApuesta + this.valorPremio;
  }

  setValorDeApuesta(pValorDeApuesta: number): void {
    this.valorDeApuesta = pValorDeApuesta;
  }

  getValorDeApuesta(): number {
    return this.valorDeApuesta;
  }
}