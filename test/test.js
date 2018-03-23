const { expect } = require('chai');

describe('env', () => {
  it('Should load 4 variables', () => {
    const varsBefore = Object.keys(process.env);
    require('../dist');
    const varsAfter = Object.keys(process.env);
    expect(varsAfter.length - varsBefore.length).to.equal(6);
    
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
  });

  it("Shouldn't load commented files", () => {
    expect('this' in process.env).to.be.false;
  });

  it('Should trim keys', () => {
    expect('ANOTHER_URL' in process.env).to.be.true;
  });

  it('Should load values preceeded by newlines', () => {
    expect('OTHER_SECRET_VIDEO_URL' in process.env).to.be.true;
  });


});

