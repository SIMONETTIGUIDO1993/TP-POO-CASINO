export class Tragamonedas {
    protected valorDeApuesta: number;
    protected arregloCarretes: number[];
    protected arregloJugada: number[];
    protected valorPremio: number;

    constructor(pValorDeApuesta: number, pValorPremio: number, pArregloCarretes: number[]) {
        this.valorDeApuesta = pValorDeApuesta;
        this.valorPremio = pValorPremio;
        this.arregloCarretes = pArregloCarretes;
        this.arregloJugada = [];
    }

    setValorDeApuesta(pValorDeApuesta: number): void {
        this.valorDeApuesta = pValorDeApuesta;
    }

    getValorDeApuesta(): number {
        return this.valorDeApuesta;
    }

    setValorPremio(pValorPremio: number): void {
        this.valorPremio = pValorPremio;
    }

    getValorPremio(): number {
        return this.valorPremio;
    }

    getArregloCarretes(): number[] {
        return this.arregloCarretes;
    }

    setArregloCarretes(pArregloCarrete: number[]): void {
        this.arregloCarretes = pArregloCarrete;
    }

    // funcion para llenar el arreglo de jugada.
    llenarArregloJugada(): void {
        for (let i: number = 0; i < this.arregloCarretes.length; i++) {
            this.arregloJugada.push(Math.floor(Math.random() * this.arregloCarretes.length));
        }
    }

    //funcion para comparar el arreglo de carretes y arreglo de jugadas
    compararArreglos(): boolean {
        let gane: boolean = true;
        for (let i: number = 0; i <= this.arregloCarretes.length; i++) {
            if (this.arregloJugada[i] != this.arregloCarretes[i]) {
                gane = false;
                return gane;
            }
        }
        return gane;
    }

    restarPremio(): void {
        this.valorDeApuesta = this.valorDeApuesta - 10;
    }

    sumarPremio(): void {
        this.valorDeApuesta = this.valorDeApuesta + this.valorPremio;
    }

    //funcion para ver los resultados de las jugadas
    jugarTragamonedas(pArregloCarrete: number[]): string {
        this.llenarArregloJugada();
        this.setArregloCarretes(pArregloCarrete);

        const gano = this.compararArreglos();

        if ((gano) && (this.valorDeApuesta > 0)) {
            this.sumarPremio();
            return `Usted Gano la jugada de Tragamonedas, su saldo es $ ${this.valorDeApuesta}`;
        } else if ((!gano) && (this.valorDeApuesta > 0)) {
            this.restarPremio();
            return `Usted Perdio la jugada de Tragamonedas,su saldo es $ ${this.valorDeApuesta}`;
        } else {
            var mensaje = this.mostrarMensaje();
            return mensaje;
        }
    }

    mostrarMensaje(): string {
        return "Haz Perdido en el Tragamonedas, si quiere seguir jugando ingrese mas dinero!";
    }
}

