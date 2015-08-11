'use strict';

module.exports = function(method){

    if(typeof method !== 'function'){
        throw new Error('method need to be a Function');
    }

    return function(candles){
        var result = method(candles);

        if(typeof result === 'string'){
            if(['long', 'short'].includes(result)){
                return result;
            }
        }

        if(typeof result === 'number'){
            if(result > 0){
                return 'long';
            }
            else if(result < 0){
                return 'short';
            }
        }

        return 'none';
    };
};
