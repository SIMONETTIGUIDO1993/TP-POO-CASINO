import { Tragamonedas } from "./tragamonedasComun";
import { TragamonedasBonus } from "./tragamonedasBonus"
import { CaraSeca } from "./caraSeca"
import { Dado } from './Dado';

export class Jugada{
    protected tragamonedas: Tragamonedas;
    protected tragamonedasBonus: TragamonedasBonus;
    protected caraSeca: CaraSeca;
    protected dado: Dado;
    protected valorDeApuesta:number;




    constructor(pTragamonedas: Tragamonedas, pTragamonedasBonus: TragamonedasBonus, pCaraSeca: CaraSeca, pDado: Dado) {
        this.tragamonedas = pTragamonedas;
        this.tragamonedasBonus = pTragamonedasBonus;
        this.caraSeca = pCaraSeca;
        this.dado = pDado;



    }

    setValorDeApuesta(pValorDeApuesta:number):void{
        this.valorDeApuesta = pValorDeApuesta;
    }
    public getValorDeApuesta():number {
        return this.valorDeApuesta;
    }


    

    jugarJuego(pJuegoElegido:String):string{
        
        switch(pJuegoElegido){ 
            case  "tragamonedas":
                let JugadaTragamonedas = this.tragamonedas.jugarTragamonedas(this.tragamonedas.llenarArregloJugada(),[0,1,2]); 
                
                return JugadaTragamonedas;
                break;
            case  "tragamonedasBonus":
                let jugadaTragamonedasBonus= this.tragamonedasBonus.jugarTragamonedasBonus();
                return jugadaTragamonedasBonus;
                break;    
            case "caraSeca":
                let jugadaCaraSeca = this.caraSeca.jugarCaraSeca("cara");
                return jugadaCaraSeca;
                break; 
            case "dado":
                let jugadaDados = this.dado.jugarDado()
                return jugadaDados;
                break;

                }
                return "Elija un juego entre  dado, caraSeca, tragamonedasBonus, tragamonedas"

    }

    


    

    

}
