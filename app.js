// задание 1 

// let a = prompt('Введите своё имя: ' )
// let b = prompt('Какого вы года: ' )
// let c = prompt('Какой сейчас год:' )


// function app(one,two) {
//     let add = two - one 
//     return add
//  }
 
// alert('Ваш возраст: '  + app(b,c));
// console.log(a + ',' + ' Ваш возраст: ' + app(b,c));
 

// задание 2


// function r(min, max) {
//   return Math.floor(Math.random() * (max + 1 - min) + min);
// }

// let a = +prompt("Сколько примеров вы хотите решить");

// for (let i = 1; i <= a; i++) {
//   let action = r(1, 4);
//   let one = r(100,1);
//   let two = r(100,1);
//   let res = 0;
//   if (action == 1) {
//     res = +prompt(one + " + " + two + " = ");
//     alert(one + ' + ' + two + " = " + (one + two) + ' Ваш ответ ' + res + ((one + two) == res ? ' Молодец' : 'Не правильно' ))
//   } else if (action == 2) {
//     res = +prompt(one + " - " + two + " = ");
//     alert(one + ' - ' + two + " = " + (one - two) + ' Ваш ответ ' + res + ((one - two) == res ? ' Молодец' : 'Не правильно' ))
//   } else if (action == 3) {
//     res = +prompt(one + " * " + two + " = ");
//     alert(one + ' * ' + two + " = " + (one * two) + ' Ваш ответ ' + res + ((one * two) == res ? ' Молодец' : 'Не правильно' ))
//   } else if (action == 4) {
//     res = +prompt(one + " / " + two + " = ");
//     alert(one + ' / ' + two + ' = ' + (one / two) + ' Ваш ответ ' + res + ((one / two) == res ? ' Молодец' : 'Не правильно' ))
//   }
// }