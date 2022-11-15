import { Tragamonedas } from "./tragamonedasComun";
import { TragamonedasBonus } from "./tragamonedasBonus"
import { CaraSeca } from "./caraSeca"
import { Dado } from './Dado';

export class Jugada {
    protected tragamonedas: Tragamonedas;
    protected tragamonedasBonus: TragamonedasBonus;
    protected caraSeca: CaraSeca;
    protected dado: Dado;

    constructor(pTragamonedas: Tragamonedas, pTragamonedasBonus: TragamonedasBonus, pCaraSeca: CaraSeca, pDado: Dado) {
        this.tragamonedas = pTragamonedas;
        this.tragamonedasBonus = pTragamonedasBonus;
        this.caraSeca = pCaraSeca;
        this.dado = pDado;
    }

    jugarJuego(pJuegoElegido: string): string {
        let mensajeJugada: string;
        switch (pJuegoElegido) {
            case "tragamonedas":
                mensajeJugada = this.tragamonedas.jugarTragamonedas([0, 1, 2]);
                break;
            case "tragamonedasBonus":
                mensajeJugada = this.tragamonedasBonus.jugarTragamonedas();
                break;
            case "caraSeca":
                mensajeJugada = this.caraSeca.jugarCaraSeca("cara");
                break;
            case "dado":
                mensajeJugada = this.dado.jugarDado();
                break;
            default:
                mensajeJugada = "Juego invalido";
        }

        return mensajeJugada;
    }
}
