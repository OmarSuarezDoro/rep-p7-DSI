import "mocha";
import { expect } from "chai";
import { A } from "../src/clase.js";

describe("add function tests", () => {
  it("expect to fail", () => {
    expect(true).to.be.true;
  });
  it("expect to be an instance of class A", () => {
    let a : A = new A();
    expect(a instanceof A).to.be.true;
  });
});