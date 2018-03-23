const { expect } = require('chai');
const debug = require('debug')('local-env-var:test');

describe('env', () => {
  it('Should load 4 variables', () => {
    const varsBefore = Object.keys(process.env);
    require('../dist');
    debug(process.env.CONTENTFUL_URL);
    debug(process.env.REDIS_URL);
    debug(process.env.API_KEY);
    debug(process.env.SECRET_VIDEO_URL);
    debug('EMPTY' in process.env);
    const varsAfter = Object.keys(process.env);
    expect(varsAfter.length - varsBefore.length).to.equal(4);
    
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

  it('Should not load empty variables', () => {
    expect('EMPTY' in process.env).to.be.false;
  })
});

