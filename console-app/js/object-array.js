// Object
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'red',
        bg: 'black'
    },
    makeTest: function () {
        console.log('test');
    }
};
options.makeTest();

//Деструктуризация обьектов:
const {border, bg} =  options.colors;
//Теперь это отдельные переменные
console.log(border);

let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            counter++;
        }
    } else counter++;
}
console.log(counter);

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} is ${options[key][i]}`);
        }
    } else console.log(`Property ${key} is ${options[key]}`);
}


const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            C: '0',
            Docker: '0'
        },
        exp: '1 month'
    },
    testString: {
        string1: 1
    },


    showAgeAndLangs: function (plan) {
        const {languages} = plan.skills;
        const {age} = plan;
        if (languages.length === 0) {
            return 0;
        }
        let result = languages.join(' ').toUpperCase();
        return `Мне ${age} и я владею языками: ${result}`;

// 2
// Или такой вариант, здесь мы не меняем тип данных на строку, а работаем с массивом
        let str = `Мне ${age} и я владею языками: `;
        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(plan, str) {
    const {exp} = plan.skills;
    const {string1} = str;
    console.log(string1);
    return `${exp}`;
}
showExperience(personalPlanPeter, personalPlanPeter.testString);

function showProgrammingLangs(plan) {
    let result = '';
    const {programmingLangs} = plan.skills;
    if (Object.keys(programmingLangs).length === 0) {
        return result;
    }
    for (let key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));



// Array ///////////////////////////////////////////////////////////////////////////////////

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



const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        },
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let result = '';

    let square = 0;
    const {shops} = data;
    shops.forEach(i => {
        square += i.width * i.length;
    })
    //Ошибка в том, что нельзя собрать эти "коробочки" в одну большую т.к
    // по ширине они разные (а по длине сложит можно но это не имеет смысла)
    // for (let i = 0; i < shops.length; i++) {
    //     if (typeof(shops[i]) === 'object') {
    //         width += shops[i].width;
    //         length += shops[i].length;
    //     }
    // }
    // console.log(width, length);

    const volume = square * data.height;
    const payment = volume * data.moneyPer1m3;
    payment <= data.budget ? result = 'Бюджета достаточно': result = 'Бюджета недостаточно';
    return result;

    // 2
    // let square = 0;
    // let volume = 0;
    //
    // data.shops.forEach(shop => {
    //     square += shop.width * shop.length;
    // });
    // console.log(square);
    // volume = data.height * square;
    //
    // if (data.budget - (volume * data.moneyPer1m3) >= 0) {
    //     return 'Бюджета достаточно';
    // } else {
    //     return 'Бюджета недостаточно';
    // }
}
console.log(isBudgetEnough(shoppingMallData));

//SUBARRAY
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];
function sortStudentsByGroups(arr, str = 'Оставшиеся студенты: -') {
    arr.sort();
    let resultArray = [];
    let chunkSize = 3;
    for (let i = 0; i < arr.length; i += chunkSize) {
        if(resultArray.length >= chunkSize) {
            let otherStudents = `Оставшиеся студенты: ${arr.slice(i).join(', ')}`;
            resultArray.push(otherStudents);
            return resultArray;
        } else {
            let chunk = arr.slice(i, i + chunkSize);
            resultArray.push(chunk);
        }
    }
    resultArray.push(str);
    return resultArray;


    //2
    // arr.sort();
    // const a = [], b = [], c = [], rest = [];
    //
    // for (let i = 0; i < arr.length; i++) {
    //     if (i < 3) {
    //         a.push(arr[i]);
    //     } else if (i < 6) {
    //             b.push(arr[i]);
    //     } else if (i < 9) {
    //         c.push(arr[i]);
    //     } else {
    //         rest.push(arr[i]);
    //     }
    // }
    // return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
}
console.log(sortStudentsByGroups(students));

////////////////////////////////

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}
console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if ((+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1))) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[Math.floor(Math.random() * 4)], restorantData.menu[Math.floor(Math.random() * 4)], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    // const copy = {...data};

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение
    // будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);
