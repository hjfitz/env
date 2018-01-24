const { expect } = require('chai');

describe('env', () => {
  it('Should load 4 variables', () => {
    const varsBefore = Object.keys(process.env);
    require('../dist');
    const varsAfter = Object.keys(process.env);
    expect(varsBefore.length).to.equal(varsAfter.length - 4);
  });

  it('Loads normal var correctly', () => {
    expect(process.env.CONTENTFUL_URL).to.equal('something');
  });

  it('Loads a var with spaces correctly', () => {
    expect(process.env.REDIS_URL).to.equal('something else');
  });

  it('Loads a URL with an \'=\' correctly', () => {
    expect(process.env.SECRET_VIDEO_URL).to.equal('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  });
});

