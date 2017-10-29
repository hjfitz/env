const env = require('../dist/index');
const { expect } = require('chai');
const assert = require('assert');



describe('env', () => {

  it('Should not crash upon loading an empty file', () => {
    expect(() => { env('./test/env-empty') }).to.not.throw();
  });

  it('Should not crash upon loading a non-existant file', () => {
    env('./test/doesntexist');
  });

  it('Load a 3 variables from env-correct, and not load comments', () => {
    env('./test/env-correct');
    // console.log(process.env.CONTENTFUL_URL);
  });

  it('loading erroneous file', () => {
    env('./test/env-error');
  });
});

