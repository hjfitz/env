const env = require('../dist/index');
const { expect } = require('chai');
const assert = require('assert');
require('mocha-sinon');


describe('env', () => {
  
  // note that we use non-arrow functions when we need access to 'this'
  beforeEach(function() {
    this.sinon.spy(console, 'log');
  });

  describe('Empty files', () => {
    it('Should not crash upon loading an empty file', () => {
      expect(() => { env('./test/env-empty') }).to.not.throw();
    });
  });

  describe('Non-existant flies', () => {
    it('Should not crash upon loading a non-existant file', () => {
      expect(() => { env('./test/env-missing'); }).to.not.throw();
    });

    it('Informs the user that a file has not been found', () => {
      env('./test/env-missing', true);
      expect( console.log.calledOnce ).to.be.true;    
    });
  });

  describe('Correct files', () => {
    it('Load a 3 variables from env-correct, and not load comments', () => {
      const varsBefore = Object.keys(process.env).length;
      env('./test/env-correct');
      const varsAfter = Object.keys(process.env).length;
      const expectedDifference = varsBefore + 4;
      expect(expectedDifference).to.be.equal(varsAfter);
    });

    it('Loads normal var correctly', () => {
      env('./test/env-correct');
      expect(process.env.CONTENTFUL_URL).to.equal('something');
    });

    it('Loads a var with spaces correctly', () => {
      expect(process.env.REDIS_URL).to.equal('something else');
    });

    it('Loads a URL with an \'=\' correctly', () => {
      expect(process.env.SECRET_VIDEO_URL).to.equal('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    });
  });

  describe('Erroneous files', () => {
    it('Shouldn\'t crash on loading an erroneous file', () => {
      expect(() => env('./test/env-error')).to.not.throw();
    });
    
    it('Loads no erroneous variables', () => {
      const varsBefore = Object.keys(process.env).length;
      env('./test/env-error');
      const varsAfter = Object.keys(process.env).length;
      const expectedDiff = varsBefore;
      expect(expectedDiff).to.equal(varsAfter);
    });
});
});

