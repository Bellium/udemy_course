// Some exercise:
// function getMathResult(num, base) {
//     let result = '';
//     if (typeof(base) !== 'number' || base === 0 || base < 0) {
//         return num;
//     }
//     for (let i = 1; i <= base; i++) {
//         if (i < base) {
//             result += `${num * i}---`;
//         } else {
//             result += `${num * i}`;
//         }
//     }
//     return result;
// }
// console.log(getMathResult(5, 3));
//
// function starPyramidBuilding() {
//     let result = '';
//     const length = 7;
//
//     for (let i = 1; i < length; i++) {
//         for (let j = 0; j < i; j++) {
//             result += '*';
//         }
//         result += '\n';
//     }
//     return result;
// }
// console.log(starPyramidBuilding());
//
// //Incorrect
// function doubleStarPyramidBuilding() {
//     const lines = 6;
//     let result = '';
//     let emptySpace = ' '
// // Проверяется именно переменная result, формируйте строку в ней
//     for (let i = 1; i <= lines ; i++) {
//         for (let j = 0; j < i + 2 ; j++) {
//             if (result == lines) {
//                 result = result - lines + '*';
//             }
//             result += '*';
//         }
//         result += '\n';
//     }
//     return result;
// }
// console.log(doubleStarPyramidBuilding());
//
// function calculateVolumeAndArea(num) {
//     if (typeof(num) === 'string' || num === null || Math.sign(num) !== 1 || Number.isInteger(num) !== true) {
//         return 'Error occurred';
//     } else {
//         let volume = Math.pow(num, 3),
//             area = 6 * Math.pow(num, 2);
//         // console.log(`Volume = ${volume}, area = ${area}`);
//         return `Обьем куба: ${volume} площадь всей поверхности: ${area}`.toString();
//     }
// }
// console.log(calculateVolumeAndArea(5));