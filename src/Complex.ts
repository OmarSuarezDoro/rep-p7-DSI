/**
 * Universidad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Sexta práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 * Archivo Complex.ts: Implementación de la clase Complex.
 */

import { Arithmeticable } from './Interfaces.js';

/**
 * This class represents a ComplexNumber
 */
export class Complex implements Arithmeticable<Complex> {
  private realPart_ = 0;
  private imaginaryPart_ = 0;
  
  /**
   * The constructor of the class
   * @param a The real part
   * @param b The imaginary part
   */
  constructor(a : number = 0, b : number = 0) {
    this.realPart_ = a;
    this.imaginaryPart_ = b;
  }
  /**
   * This method add 2 Complex
   * @param b The complex to add
   * @returns The result complex
   */
  add(b: Complex) : Complex {
    return new Complex(this.realPart_ + b.realPart, this.imaginaryPart_ + b.imaginaryPart);
  }
  /**
   * This method sub 2 Complex
   * @param b The complex to sub
   * @returns The result complex
   */
  substract(b: Complex) : Complex {
    return new Complex(this.realPart_ - b.realPart, this.imaginaryPart_ - b.imaginaryPart); 
  }

  /**
   * This method multiply 2 Complex
   * @param b The complex to multiply
   * @returns The result complex
   */
  multiply(b: Complex): Complex {
    let auxRealPart : number = this.realPart_ * b.realPart;
    auxRealPart += this.imaginaryPart_ * (-b.imaginaryPart); 
    let auxImaginaryPart : number = this.realPart_ * b.imaginaryPart;
    auxImaginaryPart += this.imaginaryPart_ * b.realPart;
    return new Complex(auxRealPart, auxImaginaryPart);
  }

  /**
   * This method divide 2 Complex
   * @param b The complex to divide
   * @returns The result complex
   */
  divide(b: Complex) : Complex {
    let top : Complex = this.multiply(b.opposite());
    let bottom : Complex = b.multiply(b.opposite());
    return new Complex(top.realPart / bottom.realPart, bottom.imaginaryPart === 0 ? 0 : top.imaginaryPart / bottom.imaginaryPart);
  }
  /**
   * This method return the opposite Complex
   * @returns The opposite Complex
   */
  opposite() : Complex {
    return new Complex(this.realPart_, -this.imaginaryPart_);
  }
  /**
   * Getter for the real part
   * @returns The real part
  */
  get realPart() : number {
    return this.realPart_;
  }
  /**
   * Getter for the imaginary part
   * @returns The imaginary part
  */
  get imaginaryPart() : number {
    return this.imaginaryPart_;
  }
}