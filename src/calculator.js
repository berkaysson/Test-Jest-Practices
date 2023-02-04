class Calculator{
    static sum(num1, num2){
        if(this.#isValuesValid(num1, num2)){
            let result = num1 + num2;
            if(result % 1 != 0){
                result = Number(result.toFixed(2));
            }
            return result;
        }
        else{
            return 'Invalid values.'
        }
    }
    
    static subtract(num1, num2){
        if(this.#isValuesValid(num1, num2)){
            let result = num1 - num2;
            if(result % 1 != 0){
                result = Number(result.toFixed(2));
            }
            return result;
        }
        else{
            return 'Invalid values.'
        }
    }

    static divide(num1, num2){
        if(this.#isValuesValid(num1, num2)){
            if(num2 === 0) return 'Cannot divide by zero.'
            let result = num1 / num2;
            if(result % 1 != 0){
                result = Number(result.toFixed(2));
            }
            return result;
        }
        else{
            return 'Invalid values.'
        }
    }

    static multiply(num1, num2){
        if(this.#isValuesValid(num1, num2)){
            let result = num1 * num2
            if(result % 1 != 0){
                result = Number(result.toFixed(2));
            }
            return result;
        }
        else{
            return 'Invalid values.'
        }
    }

    static #isValuesValid(num1, num2){
        if(typeof num1 !== 'number' || typeof num2 !== 'number') return false;
        return true
    }
}

export default Calculator;