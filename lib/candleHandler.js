'use strict';
module.exports = function(candleEmitter){

    var candles = [];

    var candleCallback;
    var requiredCandleNumber;

    candleEmitter.on('candle', function(candle){
        candles.push(candle);

        handleCallback();
    });

    return {
        setCandleCallback: setCandleCallback,
    };

    function setCandleCallback(number, callback){
        requiredCandleNumber = number;
        candleCallback = callback;

        handleCallback();
    }

    function handleCallback(){
        if(candles.length >= requiredCandleNumber && !!candleCallback){
            candleCallback(candles.slice(-requiredCandleNumber));
        }
    }
}
