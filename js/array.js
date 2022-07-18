const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arr) {
    if (arr.length === 0) {
        return 'Семья пуста';
    }
    let result = arr.join(' ');
    return `Семья состоит из: ${result}`;

//    2
//    Или вариант с тернарным оператором
//     let str = '';
//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
//     arr.forEach(member => {
//         str += `${member} `
//     });
//     return str;
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    if (arr.length === 0) {
        return 0;
    }
    for (let i of arr) {
        console.log(i.toLowerCase());
    }
    return 1;

//    2
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
}
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';
function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    }
    //Циклом
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
    //Методами
    //return str.split('').reverse().join('');
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, missingCurr) {
    //1
    // if (arr.length === 0) {
    //     return 'Нет доступных валют';
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if(arr[i] === missingCurr) {
    //         arr.splice(i, 1);
    //     }
    // }
    // let result = '';
    // for (let i = 0; i < arr.length; i++) {
    //     result += `${arr[i]}\n`;
    // }
    // return `Доступные валюты:\n${result}`

    // 2
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === missingCurr) {
            continue;
        }
        result += `${arr[i]}\n`;
    }
    return `Доступные валюты:\n${result}`;

    // 3
    //Очень интересный способ с тернарным операторм (задание моей финальной строки)
    //Этот способ лучше, так как не требует убирать отсутствующую валюту из массива
    // let str = '';
    // arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    // arr.forEach(function(curr, i) {
    //     if (curr !== missingCurr) {
    //         str += `${curr}\n`;
    //     }
    // });

    // 3.5 (циклом)
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    // return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));