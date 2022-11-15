export class Dado {
    protected dado1: number;
    protected dado2: number;
    protected valorDeApuesta: number;
    protected valorDePremio: number;
    private numeroCaras: number;

    constructor(numeroCaras: number, pValorDeApuesta: number, pValorDePremio: number) {
        this.numeroCaras = numeroCaras;
        this.valorDeApuesta = pValorDeApuesta;
        this.valorDePremio = pValorDePremio;
    }

    public tirarDado(): any {
        return this.generarNumeroAleatorio(1, this.numeroCaras);
    }

    public tirarDadoNveces(n: number): number[] {
        let valores: number[] = [n];
        for (let i: number = 0; i < valores.length; i++) {
            valores[i] = this.tirarDado();
        }
        return valores;
    }

    private generarNumeroAleatorio(min: number, max: number): number {
        let num: number = Math.floor(Math.random() * (max - min + 1) + (min));
        return num;
    }

    jugarDado(): string {
        let resultado: number = 0;
        let dado1: number = Math.floor(Math.random() * 6) + 1;
        let dado2: number = Math.floor(Math.random() * 6) + 1;
        resultado = dado1 + dado2;

        if (this.valorDeApuesta > 0) {
            if (resultado === 7 || resultado === 11) {
                this.sumarPremio();
                return `Usted ha ganado en los Dados, el resultado fue ${resultado} su saldo es ${this.valorDeApuesta}`;
            } else {
                this.restarPremio();
                return `Usted ha perdido en los Dados, el resultado fue ${resultado} su saldo es ${this.valorDeApuesta}`;
            }
        }
        return `Usted no tiene saldo para seguir jugando a los Dados, si quiere seguir jugando ingrese mas dinero!`;
    }

    setValorDeApuesta(pValorDeApuesta: number): void {
        this.valorDeApuesta = pValorDeApuesta;
    }

    getValorDeApuesta(): number {
        return this.valorDeApuesta;
    }

    restarPremio(): void {
        this.valorDeApuesta = this.valorDeApuesta - 10;
    }

    sumarPremio(): void {
        this.valorDeApuesta = this.valorDeApuesta + this.valorDePremio;
    }
}