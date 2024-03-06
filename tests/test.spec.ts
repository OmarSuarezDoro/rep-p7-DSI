import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Complex } from '../src/modificacion-1/Complex.js';
import { ArithmeticableCollection } from '../src/modificacion-1/ArithmeticableCollection.js';
import { Rational } from '../src/modificacion-1/Rational.js';
import { AdapterRationalComplex } from '../src/modificacion-1/AdapterRationalComplex.js';

describe('test for class Complex', () => {
  it("Constructor Test", () => {
    let c : Complex = new Complex(2, 3);
    expect(c.realPart).to.be.eql(2);
    expect(c.imaginaryPart).to.be.eql(3);
  }); 

  it("Add Test", () => {
    let c : Complex = new Complex(2, 3);
    let c2: Complex = new Complex(2, 3);
    let result : Complex = c.add(c2);
    expect(result.realPart).to.be.eql(4);
    expect(result.imaginaryPart).to.be.eql(6);
  }); 

    
  it("sub Test", () => {
    let c : Complex = new Complex(2, 3);
    let c2: Complex = new Complex(2, 3);
    let result : Complex = c.substract(c2);
    expect(result.realPart).to.be.eql(0);
    expect(result.imaginaryPart).to.be.eql(0);
  }); 

    
  it("multiply Test", () => {
    let c : Complex = new Complex(2, 3);
    let c2: Complex = new Complex(2, 3);
    let result : Complex = c.multiply(c2);
    expect(result.realPart).to.be.eql(-5);
    expect(result.imaginaryPart).to.be.eql(12);
  }); 

  it("divide Test", () => {
    let c : Complex = new Complex(2, 3);
    let c2: Complex = new Complex(2, 3);
    let result : Complex = c.divide(c2);
    expect(result.realPart).to.be.eql(1);
    expect(result.imaginaryPart).to.be.eql(0);
  }); 

});

describe('test for ArithmeticableCollection', () => {
  it("Constructor Test", () => {
    let c1 : Complex = new Complex(1,2);
    let c2 : Complex = new Complex(2,3);
    let collection : ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>([c1, c2]);
    expect(collection.getNumberOfArithmeticables()).to.eql(2);
  }); 
  it("Get number of elements test", () => {
    let c1 : Complex = new Complex(1,2);
    let c2 : Complex = new Complex(2,3);
    let collection : ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>([c1, c2]);
    expect(collection.getNumberOfArithmeticables()).to.eql(2);
  }); 
  it("Get an item", () => {
    let c1 : Complex = new Complex(1,2);
    let c2 : Complex = new Complex(2,3);
    let collection : ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>([c1, c2]);
    expect(collection.getArithmeticable(0)).to.eql(c1);
    expect(collection.getArithmeticable(-2)).to.be.undefined;
    expect(collection.getArithmeticable(54)).to.be.undefined;
  });

  it("Add an item", () => {
    let c1 : Complex = new Complex(1,2);
    let c2 : Complex = new Complex(2,3);
    let collection : ArithmeticableCollection<Complex> = new ArithmeticableCollection<Complex>([c1, c2]);
    let c3 : Complex = new Complex(5, 1);
    collection.addArithmeticable(c3);    
    expect(collection.getArithmeticable(2)).to.eql(c3);
    expect(collection.getNumberOfArithmeticables()).to.eql(3);
  }); 

  it("Add an item Rational", () => {
    let c1 : Rational = new Rational(1,2);
    let c2 : Rational = new Rational(2,3);
    let collection : ArithmeticableCollection<Rational> = new ArithmeticableCollection<Rational>([c1, c2]);
    let c3 : Rational = new Rational(5, 1);
    collection.addArithmeticable(c3);    
    expect(collection.getArithmeticable(2)).to.eql(c3);
    expect(collection.getNumberOfArithmeticables()).to.eql(3);
  }); 

  it("Get an item", () => {
    let c1 : Rational = new Rational(1,2);
    let c2 : Rational = new Rational(2,3);
    let collection : ArithmeticableCollection<Rational> = new ArithmeticableCollection<Rational>([c1, c2]);
    expect(collection.getArithmeticable(0)).to.eql(c1);
  });
});


describe('test for class Rational', () => {
  it("Constructor Test", () => {
    let c : Rational = new Rational(2, 3);
    expect(c.top).to.be.eql(2);
    expect(c.bottom).to.be.eql(3);
  }); 

  it("Add Test", () => {
    let c : Rational = new Rational(2, 3);
    let c2: Rational = new Rational(2, 3);
    let result : Rational = c.add(c2);
    let c3 : Rational = new Rational(3, -1);
    let c4: Rational = new Rational(5, 2);
    let result2 : Rational = c3.add(c4);
    expect(result.top).to.be.eql(4);
    expect(result.bottom).to.be.eql(3);
    expect(result2.top).to.be.eql(-1);
    expect(result2.bottom).to.be.eql(2);

  }); 

    
  it("sub Test", () => {
    let c : Rational = new Rational(2, 3);
    let c2: Rational = new Rational(2, 3);
    let result : Rational = c.substract(c2);
    expect(result.top).to.be.eql(0);
    expect(result.bottom).to.be.eql(1);
  }); 

  it("multiply Test", () => {
    let c : Rational = new Rational(2, 3);
    let c2: Rational = new Rational(2, 3);
    let result : Rational = c.multiply(c2);
    expect(result.top).to.be.eql(4);
    expect(result.bottom).to.be.eql(9);
  }); 

  it("divide Test", () => {
    let c : Rational = new Rational(2, 3);
    let c2: Rational = new Rational(2, 3);
    let result : Rational = c.divide(c2);
    expect(result.top).to.be.eql(1);
    expect(result.bottom).to.be.eql(1);
  }); 

  it("abs Test", () => {
    let c : Rational = new Rational(-2, 3);
    expect(c.abs()).to.be.eql(new Rational(2, 3));
  }); 

  it("inv Test", () => {
    let c : Rational = new Rational(2, 3);
    expect(c.inv()).to.be.eql(new Rational(3, 2));
  }); 

});

describe('Test for the class Adapter', () => {
  it('It must create a Complex using rationl', () => {
    let r : Rational = new Rational(-2, 3);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    expect(myAdapter.realPart).to.be.eql(-2/3);
    expect(myAdapter.imaginaryPart).to.be.eql(0);

  });

  it('It must create operate with add method', () => {
    let r : Rational = new Rational(1, 2);
    let c : Complex = new Complex(1, 2);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    expect(myAdapter.realPart).to.be.eql(0.5 + 1);
    expect(myAdapter.imaginaryPart).to.be.eql(2);

  });
})