import { Tragamonedas } from "./tragamonedasComun";
import { TragamonedasBonus } from "./tragamonedasBonus"
import { CaraSeca } from "./caraSeca"
import { Dado } from './Dado';
import { Jugada } from './jugada'
import * as fs from 'fs';

let Bienvenidos: string = fs.readFileSync('bienvenidos.txt', 'utf8');
let instruccionesTragamonedasComun: string = fs.readFileSync("instruccionesTragamonedasComun.txt", 'utf8');
let instruccionesTragamonedasBonus: string = fs.readFileSync("instruccionesTragamonedasBonus.txt", 'utf8');
let instruccionesCaraSeca: string = fs.readFileSync("instruccionesCaraSeca.txt", 'utf8');
let instruccionesDados: string = fs.readFileSync("instruccionesDados.txt", 'utf8');

console.log(Bienvenidos);

//  Juego: tragamonedas
let tragamonedas: Tragamonedas = new Tragamonedas(50, 250, [1, 2, 3]);

//  Juego:  tragamonedasBonus
let tragamonedasBonus: TragamonedasBonus = new TragamonedasBonus(50, 250, [1, 2, 3]);

// Juego: caraSeca
let caraSeca: CaraSeca = new CaraSeca(50, 10);

// Juego: dado
let dados: Dado = new Dado(6, 50, 10);

let jugadas: Jugada = new Jugada(tragamonedas, tragamonedasBonus, caraSeca, dados);


console.log(instruccionesTragamonedasComun);
// Para jugar al Tragamonedas hay que setear el valorDeApuesta y los 3 numeros ganadores
// Si gana la jugada se le suma el valor previamente seteado de premio.
// Si pierde la jugada se restan $10

tragamonedas.setArregloCarretes([0, 1, 2]);
tragamonedas.setValorDeApuesta(30);

let jugadaTragamonedas1 = jugadas.jugarJuego("tragamonedas");
console.log(jugadaTragamonedas1);

let jugadaTragamonedas2 = jugadas.jugarJuego("tragamonedas");
console.log(jugadaTragamonedas2);

let jugadaTragamonedas3 = jugadas.jugarJuego("tragamonedas");
console.log(jugadaTragamonedas3);

let jugadaTragamonedas4 = jugadas.jugarJuego("tragamonedas");
console.log(jugadaTragamonedas4);


console.log(instruccionesTragamonedasBonus);
// Para jugar al TragamonedasBonus hay que setear el valorDeApuesta
// Se gana si los 3 numeros son iguales.
// Si gana la jugada se suman $50
// Si pierde la jugada se restan $10

tragamonedasBonus.setValorDeApuesta(30)
let jugadaTragamonedasBonus1 = jugadas.jugarJuego("tragamonedasBonus");
console.log(jugadaTragamonedasBonus1);

let jugadaTragamonedasBonus2 = jugadas.jugarJuego("tragamonedasBonus");
console.log(jugadaTragamonedasBonus2);

let jugadaTragamonedasBonus3 = jugadas.jugarJuego("tragamonedasBonus");
console.log(jugadaTragamonedasBonus3);

let jugadaTragamonedasBonus4 = jugadas.jugarJuego("tragamonedasBonus");
console.log(jugadaTragamonedasBonus4);


console.log(instruccionesCaraSeca);
// Para jugar al CaraSeca hay que setear el valorDeApuesta y la cara elegida ( "cara" o "seca" en minuscula)
// Si gana la jugada se le suma el valor previamente seteado de premio.
// Si pierde la jugada se restan $10

caraSeca.setValorDeApuesta(40)
caraSeca.setCaraElegida("seca")
let jugadaCaraSeca1 = jugadas.jugarJuego("caraSeca");
console.log(jugadaCaraSeca1);

let jugadaCaraSeca2 = jugadas.jugarJuego("caraSeca");
console.log(jugadaCaraSeca2);


console.log(instruccionesDados);
// Para jugar al los Dados hay que setear el valorDeApuesta
// Si el resultado da 7 u 11 gana la jugada y se suma el valor de premio seteado previamente.
// Si pierde la jugada se restan $10

dados.setValorDeApuesta(40)
let jugadaDado1 = jugadas.jugarJuego("dado")
console.log(jugadaDado1);

let jugadaDado2 = jugadas.jugarJuego("dado")
console.log(jugadaDado2);
