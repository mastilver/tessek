'use strict';

var should = require('should');

var MethodHandler = require('../../lib/methodHandler');

describe('methodHandler handle an undefined method', function(){

    it('should throw an error', function(){
        should.throws(() => MethodHandler(undefined), Error);
    });

});
