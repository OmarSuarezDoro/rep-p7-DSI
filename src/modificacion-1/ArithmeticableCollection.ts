/**
 * Universidad de La Laguna
 * Asignatura: Desarrollo de Sistemas Informáticos
 * Sexta práctica de la asignatura DSI
 * Realizada por: Omar Suárez Doro
 * Correo: alu0101483474@ull.edu.es
 * Archivo ArithmeticableCollection.ts: Implementación de la clase ArithmeticableCollection.
 */

import { Arithmeticable } from './Interfaces.js';

/**
 * Represents a CAMBIAR.
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private collection_ : T[] = [];
  constructor(items: T[]) {
    this.collection_ = [...items];
  }
  /**
   * This method insert an item into the collection
   * @param element The element to be inserted
   */
  addArithmeticable(element : T) : void {
    this.collection_.push(element);
  }
  /**
   * This function returns the element that is gonna be searched
   * @param index The index of the element to return
   * @returns undefined if the index is not valid, otherwise the element
   */
  getArithmeticable(index : number) : T | undefined {
    if ((index < 0) || (index > this.collection_.length - 1)) {
      return undefined;
    }
    return this.collection_[index];
  }
  /**
   * This method return the number of elements
   * @returns The number of the elements in the collection
   */
  getNumberOfArithmeticables() : number {
    return this.collection_.length;
  }

}