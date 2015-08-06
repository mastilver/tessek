require('should');

var sinon = require('sinon');
var EventEmitter = require('events').EventEmitter;

var CandleHandler = require('../../lib/candleHandler');




describe('when candle emitter emit candle', function(){


    describe('when there is enough candles to retrieve', function(){

        var clock;
        var candles;


        before(function(done){

            clock = sinon.useFakeTimers();

            var candleEmitter = new EventEmitter();
            var candleHandler = CandleHandler(candleEmitter);


            candleEmitter.emit('candle', {
                open: 10,
                close: 10,
                high: 10,
                low: 10,
                date: new Date(),
            });
            clock.tick(60000);
            candleEmitter.emit('candle', {
                open: 20,
                close: 20,
                high: 20,
                low: 20,
                date: new Date(),
            });
            clock.tick(60000);
            candleEmitter.emit('candle', {
                open: 30,
                close: 30,
                high: 30,
                low: 30,
                date: new Date(),
            });


            candleHandler.setCandleCallback(2, function(c){
                candles = c;
                done();
            });
        });

        after(function(){
            clock.restore();
        });


        it('should retrive the right number of candles', function(){
            candles.should.have.length(2);
        });

        it('should get the second emitted candle', function(){
            candles[0].should.have.property('close', 20);
        });

        it('should get the third emitted candle', function(){
            candles[1].should.have.property('close', 30);
        });
    });
});
