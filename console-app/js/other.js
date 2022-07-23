// // OOP
// const stranger = {
//     health: 100,
//     armor: 80,
//     sayHello: function() {
//         console.log('hello')
//     }
// }
//
// const ray = {
//     armor: 500
// }
//
// //deprecated
// // ray.__proto__ = stranger;
// // console.log(ray.health);
// // console.log(ray.sayHello());
//
// //new
// Object.setPrototypeOf(ray, stranger);
// console.log(ray.sayHello());
//
// //correct
// //create new object and set the prototype
// const leo = Object.create(stranger);
// console.log(leo.sayHello());


//closure
function createCounter() {
    let counter = 0;
    let linkData = 5;

    const myFunction = function() {
        counter = counter + 1;
        // console.log(linkData);
        return counter;
    }
    return myFunction;
    //После ретёрна всё лексическое окружение функции было уничтожено
    //Функция, которую мы вохвращаем "помнит" (работала) с уже уничтоженым лекс.окружением (хранит ссылки на эти данные)
    //и при этом она возвращала (преобразовывала) значения и возвращала их главной функции
    //При этом продолжает хранить ссылку на это значение, которое после каждого вызова менятся (т.к был ретёрн)

    //myFunction может показать linkData т.к хранит ссылку с ее значением, и точно также может работать с ним и возвращать
    //меняя его - это и есть замыкание

    //myFunction имеет ссылку на лексическое окружение где она была создана!
}

const increment = createCounter();
console.log(increment);

const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(c1, c2, c3);



let a = [1, 2];
const [first, second] = a;
console.log(first, second);

let time = '';
console.log(0 || null ? time = 'Day' : time = 'Night');






// destructuring
let options = {
    size: {
        width: 100,
        height: 200
    },
    borderColor: ['black', 'green'],
    images: {
        tree: {
            tree1: true,
            tree2: true,
            tree3: false,
        }
    },
    // defaultSet: false this property do no exist
}

// let {
//      size: {
//         width,
//         height
//      }
// } = options;
// console.log(width, height); //log width, height from size

let {size} = options;
console.log(size); //log size from options

let {
    size: {
        width,
        height
    },
    borderColor,
    images: {
        tree
    },
    defaultSet = 'true'
} = options
console.log(width, height, borderColor, tree, defaultSet);

let object = {
    set1: 'black',
    set2: 'white',
    otherSet1: 'red',
    otherSet2: 'blue',
    otherSet3: 'pink',
}

let {set1, set2, ...rest} = object;
console.log(set1, set2, rest);

let array = ['first', 'second', 'other1', 'other2', 'other3'];
let [one, two, ...other] = array;
console.log(one, two, other);
console.log(typeof(other));




let propertiesForSmartFunction = {
    title: 'smart.jpg',
    size: {
        weight: '500px',
        height: '1000px'
    },
    images: ['image1.png', 'image2.jpg']
}
//default properties (при вызове нужно использовать пустой обьект или будет ошибка {})
function smartFunction({
                           title = 'untitled',
                           size: {
                               weight = '100px',
                               height = '100px'
                           },
                           images = []
                       } = {})
{
    console.log(title, weight, height, images);
}
smartFunction(propertiesForSmartFunction);

function smartFunctionRestProperties({size: {weight = '50px', height = '50px'}, ...rest}= {})
{
    console.log(weight, height, rest);
}
smartFunctionRestProperties(propertiesForSmartFunction);






