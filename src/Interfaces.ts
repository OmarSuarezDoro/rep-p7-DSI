/**
 * Universidad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Sexta práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 * Archivo Interfaces.ts: Implementación de interfaces solcitadas en la modificación
 */

/**
 * Represents a Arithmeticable object.
 */
export interface Arithmeticable<T> {
  add(b : T) : T;
  substract(b : T) : T;
  multiply(b : T) : T;
  divide(b : T) : T;
}