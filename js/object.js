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