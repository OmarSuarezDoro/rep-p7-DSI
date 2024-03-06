/**
 * Universidad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Séptima práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 */

import { Complex } from "./Complex.js";
import { Rational } from "./Rational.js";

/**
 * This class is an Adapter which transform a Rational into a Complex number
 */
export class AdapterRationalComplex extends Complex {
  constructor(b : Rational) {
    super(b.top/b.bottom, 0);
  }
}