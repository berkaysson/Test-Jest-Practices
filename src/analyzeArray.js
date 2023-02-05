function analyzeArray(numbers) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let length = numbers.length;
    
    for (let number of numbers) {
      sum += number;
      min = Math.min(min, number);
      max = Math.max(max, number);
    }
    
    return {
      'average': sum / length,
      'min': min,
      'max': max,
      'length': length
    };
}

export default analyzeArray;