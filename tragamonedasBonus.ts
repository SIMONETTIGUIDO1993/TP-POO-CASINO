import { Tragamonedas } from "./tragamonedasComun"

export class TragamonedasBonus extends Tragamonedas {

    constructor(pValorDeApuesta: number, pValorPremio: number, pArregloCarretes: number[]) {
        super(pValorDeApuesta, pValorPremio, pArregloCarretes);
    }

    jugarTragamonedas(): string {
        let carrete1: number = Math.floor(Math.random() * 2) + 1;
        let carrete2: number = Math.floor(Math.random() * 2) + 1;
        let carrete3: number = Math.floor(Math.random() * 2) + 1;
        let arregloBonus: number[] = [carrete1, carrete2, carrete3];

        if (this.valorDeApuesta > 0) {
            if (carrete1 === carrete2 && carrete2 === carrete3) {
                this.sumarPremio();
                return `El resultado de TragamonedasBonus es ${arregloBonus} Usted Gano la jugada, su saldo es $ ${this.valorDeApuesta}`;
            } else {
                this.restarPremio();
                return `El resultado TragamonedasBonus es ${arregloBonus} Usted Perdio la jugada, su saldo es $ ${this.valorDeApuesta}`;
            }
        } else {
            return "Usted no tiene Suficiente dinero para seguir jugando al TragamonedasBonus, si quiere seguir jugando ingrese mas dinero!";
        }
    }

    sumarPremio(): void {
        this.valorDeApuesta = this.valorDeApuesta + 50;
    }

    restarPremio(): void {
        this.valorDeApuesta = this.valorDeApuesta - 10;
    }
}
