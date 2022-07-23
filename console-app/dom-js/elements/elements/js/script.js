// //1 get elements by id (only 1 copy)
// const box = document.getElementById('box');
// console.log(box);
//
// //2 get element by tag (always get pseudo array)
// const btns = document.getElementsByTagName('button');
// console.log(btns);
// //(if you want to get that element, use index)
// const btn = document.getElementsByTagName('button')[0];
// console.log(btn);
// //or
// console.log(btns[0]);
//
// //3 get elements by class (always get pseudo array)
// const circle = document.getElementsByClassName('circle');
// console.log(circle);
//
// //4 - actual
// //Get all elements by css selector, have method - forEach
// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// hearts.forEach(item => {
//     console.log(item);
// })
//
// //5 - Get first element by css selector
// const oneHeart = document.querySelector('.heart'); //any type: div, id, class and other
// console.log(oneHeart);






const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

// let num = prompt('', '');
let num = 500;
box.style.cssText = `background-color: blue; width: ${num}px`

btns[1].style.borderRadius = '100%';

//wrong circle - pseudo array, use forEach of index
circle[0].style.backgroundColor = 'red';

//1
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'pink';
}
//2 right way
hearts.forEach(item => {
    item.style.backgroundColor = 'green';
})



//create element на лету
const div = document.createElement('div');
//create text node
const text = document.createTextNode('tyt bul ya');

//We may create HTML structure (create html page absolutely dynamic)
div.innerHTML = 'Hello World';
//when we get only text
div.textContent = 'Hello World';







