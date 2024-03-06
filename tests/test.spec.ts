import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Complex } from '../src/Complex.js';
import { ArithmeticableCollection } from '../src/ArithmeticableCollection.js';
import { Rational } from '../src/Rational.js';
import { AdapterRationalComplex } from '../src/AdapterRationalComplex.js';

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

  it('It must operate with add method 1', () => {
    let r : Rational = new Rational(1, 2);
    let c : Complex = new Complex(1, 2);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.add(c);
    expect(result.realPart).to.be.eql(0.5 + 1);
    expect(result.imaginaryPart).to.be.eql(2);

  });

  it('It must operate with add method 1 Inverted', () => {
    let r : Rational = new Rational(1, 2);
    let c : Complex = new Complex(1, 2);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = c.add(myAdapter);
    expect(result.realPart).to.be.eql(0.5 + 1);
    expect(result.imaginaryPart).to.be.eql(2);
  });

  it('It must operate with add method 2', () => {
    let r : Rational = new Rational(2, 2);
    let c : Complex = new Complex(3, 4);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.add(c);
    expect(result.realPart).to.be.eql(1 + 3);
    expect(result.imaginaryPart).to.be.eql(4);
  });
  
  it('It must operate with add method 3', () => {
    let r : Rational = new Rational(3, 4);
    let c : Complex = new Complex(4, 5);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.add(c);
    expect(result.realPart).to.be.eql(0.75 + 4);
    expect(result.imaginaryPart).to.be.eql(5);
  });
  
  it('It must operate with add method 4', () => {
    let r : Rational = new Rational(4, 5);
    let c : Complex = new Complex(5, 6);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.add(c);
    expect(result.realPart).to.be.eql(0.8 + 5);
    expect(result.imaginaryPart).to.be.eql(6);
  });

  it('It must operate with sub method 1', () => {
    let r : Rational = new Rational(1, 2);
    let c : Complex = new Complex(1, 2);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.substract(c);
    expect(result.realPart).to.be.eql(-0.5);
    expect(result.imaginaryPart).to.be.eql(-2);
  });

  it('It must operate with sub method 1 inverted', () => {
    let r : Rational = new Rational(1, 2);
    let c : Complex = new Complex(1, 2);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = c.substract(myAdapter);
    expect(result.realPart).to.be.eql(0.5);
    expect(result.imaginaryPart).to.be.eql(2);
  });

  it('It must operate with sub method 2', () => {
    let r : Rational = new Rational(3, 4);
    let c : Complex = new Complex(2, -5);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.substract(c);
    expect(result.realPart).to.be.eql(-1.25);
    expect(result.imaginaryPart).to.be.eql(+5);
  });

  it('It must operate with sub method 3', () => {
    let r : Rational = new Rational(3, 1);
    let c : Complex = new Complex(3, 0);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.substract(c);
    expect(result.realPart).to.be.eql(0);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with sub method 4', () => {
    let r : Rational = new Rational(-2, -1);
    let c : Complex = new Complex(2, 0);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.substract(c);
    expect(result.realPart).to.be.eql(0);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with multiply method 1 inverted', () => {
    let r : Rational = new Rational(-2, -1);
    let c : Complex = new Complex(2, 0);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = c.multiply(myAdapter);
    expect(result.realPart).to.be.eql(4);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with multiply method 1', () => {
    let r : Rational = new Rational(-2, -1);
    let c : Complex = new Complex(2, 0);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.multiply(c);
    expect(result.realPart).to.be.eql(4);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with multiply method 2', () => {
    let r : Rational = new Rational(3, 1);
    let c : Complex = new Complex(2, 3);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.multiply(c);
    expect(result.realPart).to.be.eql(6);
    expect(result.imaginaryPart).to.be.eql(9);
  });

  it('It must operate with multiply method 3', () => {
    let r : Rational = new Rational(999, 1);
    let c : Complex = new Complex(999, 6);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.multiply(c);
    expect(result.realPart).to.be.eql(998001);
    expect(result.imaginaryPart).to.be.eql(5994);
  });

  it('It must operate with multiply method 4', () => {
    let r : Rational = new Rational(-22, 1);
    let c : Complex = new Complex(5, 10);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.multiply(c);
    expect(result.realPart).to.be.eql(-110);
    expect(result.imaginaryPart).to.be.eql(-220);
  });

  it('It must operate with divide method 1', () => {
    let r : Rational = new Rational(-22, 1);
    let c : Complex = new Complex(5, 10);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.divide(c);
    expect(result.realPart).to.be.eql(-0.88);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with divide method 1 Inverted', () => {
    let r : Rational = new Rational(-22, 1);
    let c : Complex = new Complex(5, 10);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = c.divide(myAdapter);
    expect(result.realPart).to.be.eql(-0.22727272727272727);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with divide method 2', () => {
    let r : Rational = new Rational(9999, 1);
    let c : Complex = new Complex(1, 1);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.divide(c);
    expect(result.realPart).to.be.eql(4999.5);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with divide method 3', () => {
    let r : Rational = new Rational(0, 1);
    let c : Complex = new Complex(1, 38);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.divide(c);
    expect(result.realPart).to.be.eql(0);
    expect(result.imaginaryPart).to.be.eql(0);
  });

  it('It must operate with divide method 4', () => {
    let r : Rational = new Rational(27, 3);
    let c : Complex = new Complex(2, -2);
    let myAdapter : AdapterRationalComplex = new AdapterRationalComplex(r);
    let result = myAdapter.divide(c);
    expect(result.realPart).to.be.eql(2.25);
    expect(result.imaginaryPart).to.be.eql(0);
  });

});
