function getCoupeNumber(place) {
    if (place === 0 || place >= 37) {
        return 'There are no such places';
    }
    if (typeof(place) === 'string' || place === null || Math.sign(place) !== 1 || Number.isInteger(place) !== true) {
        return 'Incorrect place';
    }
    else {
        place = Math.ceil(place/4);
        // row = Math.pow(place, 1/2);
        // coupe = Math.floor(row);
        // return `Your row is number ${coupe}`;
        return place;
    }
}
console.log((getCoupeNumber(36)));

function getTimeFromMinutes(minutes) {
    if (typeof(minutes) !== 'number' || Number.isInteger(minutes) !== true || minutes < 0) {
        return 'Incorrect time';
    }
    let min = minutes % 60;
    let hours = Math.trunc(minutes / 60);
    // Original (english version)
    if (hours <= 1) {
        return `This is ${hours} hour and ${min} minutes`;
    } else {
        return `This is ${hours} hours and ${min} minutes`;
    }
    //Russian version
    // if (hours === 0) {
    //     return `Это ${hours} часов и ${min} минут`;
    // }
    // if (hours === 1) {
    //     return `Это ${hours} час и ${min} минут`;
    // }
    // if (hours > 1 || hours < 5) {
    //     return `Это ${hours} часа и ${min} минут`;
    // }
    // if(hours > 5) {
    //     return `Это ${hours} часов и ${min} минут`;
    // }
}
console.log(getTimeFromMinutes(210));

function findMaxNumber(...arguments) {
    if (arguments.some((i) => Number.isNaN(i) || typeof(i) !== 'number')) {
        return 0;
    } else return Math.max(...arguments);

    // if (array.find((i) => Number.isNaN(i) || typeof(i) !== 'number')) {
    //     return 0
    // } else return Math.max(...array);
    //
    // if (array.find((i) => typeof(i) === 'number' && Number.isNaN(i)) !== true && array.length >= 4) {
    //     return Math.max(...array);
    // } else return 0;
    //
    //
    // if (isNaN(array.find(i => isNaN(i) || typeof(i) === 'object'))) {
    //     return 0
    // }
    // if (array.find((item) => typeof(item) === 'string' || array.length < 4)) {
    //     return 0;
    // } else ;
}
console.log(findMaxNumber(4, 5.5, 6, []));

function fibonacciNumber(num) {
    let result = [];
    if (typeof(num) !== 'number' || Number.isInteger(num) !== true) {
        return '';
    }
    for (let i = 0; i < num; i++ ) {
        result[i] = i;
        if (i > 1) {
            result[i] = result[i - 1] + result[i - 2];
        }
    }
    return result.join(' ');
}
console.log(fibonacciNumber(15));

// Fibonacci another way (without array)
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5)