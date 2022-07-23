// Callback                       функция как аргумент
function testCallback(string, callbackFunction) {
    const a = prompt(string, '');
    //Проверку конечно лучше сделать здесь, а не отдельной функцией
    //Но для примера подойдёт

    //     Функция вызывается
    return callbackFunction(a);
}
//Функция передаётся аргументом (т.е без скобочек), а потом уже выхывается внутри другой - callback
console.log(testCallback('Enter something', someFunctionsForTest));
function someFunctionsForTest(str) {
    if (str !== null && str !== '') {
        return str;
    } else return testCallback('Enter something', someFunctionsForTest);
}