'use strict';

require('should');

var MethodHandler = require('../../lib/methodHandler');

describe('methodHandler handle a method behaving correctly', function(){

    var methodHandler;
    var methodReturn;
    var candles = [{}];


    before(function(){

        function method(candles){
            return methodReturn;
        }

        methodHandler = MethodHandler(method);
    });

    describe('method return \'long\'', function(){
        it('should return \'long\'', function(){
            methodReturn = 'long';

            methodHandler(candles).should.be.equal('long');
        });
    });

    describe('method return \'short\'', function(){
        it('should return \'short\'', function(){
            methodReturn = 'short';

            methodHandler(candles).should.be.equal('short');
        });
    });

    describe('method return undefined', function(){
        it('should return \'none\'', function(){
            methodReturn = undefined;

            methodHandler(candles).should.be.equal('none');
        });
    });

    describe('method return null', function(){
        it('should return \'none\'', function(){
            methodReturn = null;

            methodHandler(candles).should.be.equal('none');
        });
    });

    describe('method return a positive number', function(){
        it('should return \'long\'', function(){
            methodReturn = 10;

            methodHandler(candles).should.be.equal('long');
        });
    });

    describe('method return a negative number', function(){
        it('should return \'short\'', function(){
            methodReturn = -10;

            methodHandler(candles).should.be.equal('short');
        });
    });

    describe('method return a zero', function(){
        it('should return \'none\'', function(){
            methodReturn = 0;

            methodHandler(candles).should.be.equal('none');
        });
    });
});
