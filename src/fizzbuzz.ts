export function fizzbuzz(inputNumber: number) {
    if (inputNumber % 3 === 0) {
        return 'Fizz';
    } else if (inputNumber % 5 === 0) {
        return 'Buzz';
    }
    return inputNumber;
}
