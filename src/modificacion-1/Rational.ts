/**
 * Univeridad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Cuarta práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 * Archivo Rational.ts: Implementación de funciones para manejar operaciones de números racionales.
 */

import { Arithmeticable } from "./Interfaces.js";

export class Rational implements Arithmeticable<Rational> {
  private top_ : number = 0;
  private bottom_ : number = 0;
  
  /**
   * The constructor of the class
   * @param a Numerator
   * @param b Denominator
   */
  constructor(a : number, b : number) {
    if (b === 0) {
      throw ("Invalid denominator");
    }
    this.top_ = a;
    this.bottom_ = b;
    this.mcd();
  }
  /**
   * This function applies MCD to the rational number
   */
  mcd() : void {
    let num: number = this.top_;
    let denom : number = this.bottom_;
    let wasNegative : boolean = false;
    if ((num < 0 && denom >= 0) || (denom < 0 && num >= 0)) { 
     wasNegative = true; 
    }
    let a = Math.abs(num);
    let b = Math.abs(denom); 
    while (b) {
      let tempVar = b;
      b = a % b;
      a = tempVar;
    }
    let result : [number, number] = [Math.abs(num) / a, Math.abs(denom) / a];
    if (wasNegative) {
      result[0] = -result[0];
    } 
    this.top_ = result[0];
    this.bottom_ = result[1];
  }

  /**
   * This function checks if a rational number is valid
   * @returns true if the denominator is different from 0
   * ```typescript
   * validRationalNumber([1, 0]); // false
   * validRationalNumber([1, 2]); // true
   * ```
   */
  validRationalNumber(): boolean {
    return this.bottom_ !== 0;
  }

  

  /**
   * This method add two rationals
   * @param b The other rational
   * @returns The result Rational
   */
  add(b: Rational): Rational {
    return new Rational(this.top_ * b.bottom + b.top * this.bottom_, this.bottom_ * b.bottom);
  }
  
  /**
  * This method sub two rationals
  * @param b The other rational
  * @returns The result Rational
  */
  substract(b: Rational): Rational {
    return new Rational(this.top_ * b.bottom + -b.top * this.bottom_, this.bottom_ * b.bottom);
  }
  
  /**
   * This function multiplies 2 rational numbers
   * @param b The other rational
   * @returns The result rational
   */
  multiply(b: Rational): Rational {
    return new Rational(this.top_ * b.top, this.bottom_ * b.bottom);
  }  

  /**
   * This function multiplies 2 rational numbers
   * @param b The other rational
   * @returns The result rational
   */
  divide(b: Rational): Rational {
    return this.multiply(new Rational(b.bottom, b.top));
  }
  
  /**
   * Applies ABS to the rational
   * @returns The result
   */
  abs() : Rational {
    return new Rational(Math.abs(this.top), Math.abs(this.bottom_));
  }
  /**
   * Applies Invertion to the rational
   * @returns The result
   */
  inv() : Rational {
    return new Rational(this.bottom_, this.top_);
  }
  
  /**
   * The getter for the bottom propertie
   */
  get bottom() : number {
    return this.bottom_;
  }

  /**
   * The getter for the top propertie
   */
  get top() : number {
    return this.top_;
  }
}