/* global describe, it, before */

import chai from "chai";
import { formatter } from "../lib/ts.library.starter";

chai.expect();

const expect = chai.expect;

let lib;

describe("Number : 100000", () => {
  before(() => {
    // lib = new Cat();
  });
  describe("when I need the name", () => {
    it("should return the name", () => {
      expect(formatter.numberToCommaString(100000)).to.be.equal("100,000");
    });
  });
});
