// const dangeonBoss = {
//     name: 'Bell',
//     surname: 'Cranel',
//     age: '19',
//     health: '65',
//     armor: '90',
//     class: 'dodger',
//     ability: ['rage'],
//     weapon: [
//         {
//             knife: {
//                 damage: 150,
//                 length: 3,
//                 type: 'melee'
//             }
//         },
//         {
//             firebold: {
//                 damage: 1000,
//                 range: 20,
//                 type: 'magic'
//             }
//         }
//     ],
//     resistance: function () {
//         return 'GOD MODE IS ACTIVATE';
//     }
// }
//
// function createName() {
//     let a = prompt('Enter name');
//     return a;
// }
// function createSurname() {
//     let a = prompt('Enter name');
//     return a
// }
//
// const userPerson = {
//     nameContainer: createName(),
//     surname: createSurname(),
//     age: '19',
//     health: '60',
//     armor: '90',
//     class: 'dodger',
//     ability: ['rage'],
//     weapon: [
//         {
//             knife: {
//                 damage: 150,
//                 length: 3,
//                 type: 'melee'
//             }
//         },
//         {
//             firebold: {
//                 damage: 1000,
//                 range: 20,
//                 type: 'magic'
//             }
//         }
//     ],
//     resistance: function () {
//         return 'GOD MODE IS ACTIVATE';
//     }
// }
// console.log(userPerson.nameContainer);
// console.log(userPerson.surname);
// console.log(userPerson.health);
//
// for (let key in userPerson) {
//     for (let i in dangeonBoss) {
//         if (userPerson[key] === 'health' && userPerson[key] < (dangeonBoss[i] === 'health')) {
//             console.log(userPerson[key], dangeonBoss[i]);
//         }
//     }
// }

const humanClass = {
    health: 60,
    power: 5
}
const armorSet = {
    light: 40,
    medium: 70,
    heavy: 100
}
const stranger = Object.create(humanClass);
stranger.armor = armorSet.light;
const hero = Object.create(humanClass);
hero.armor = armorSet.medium;
