var should = require('should');
var tagger = new (require('../POSTagger'))();

describe('POSTagger#tag', function(){
  it('should allow the lexicon to be extended', function(){
    tagger.extendLexicon({'Obama': ['NNP']});
    tagger
      .tag(['Mr', 'Obama'])
      .should.eql([[ 'Mr', 'NNP' ], [ 'Obama', 'NNP' ]]);
  });

  it('should overwrite the base lexicon', function () {
    tagger
      .tag(['access'])
      .should.eql([['access', 'NN']]);
    tagger.extendLexicon({'access': ['VB']}, true);
    tagger
      .tag(['access'])
      .should.eql([['access', 'VB']]);
  });
});
