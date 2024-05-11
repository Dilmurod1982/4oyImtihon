// Masal

// 1 vazifa

// function removeFirstOccurrence(originalString, stringToRemove) {
//   const index = originalString.indexOf(stringToRemove);
//   if (index === -1) {
//     return originalString;
//   }
//   return (
//     originalString.slice(0, index) +
//     originalString.slice(index + stringToRemove.length)
//   );
// }

// let originalString = "Hammaga Salom!";
// let stringToRemove = "Salom!";

// let result = removeFirstOccurrence(originalString, stringToRemove);
// console.log(result);

// 2 vaizfa

// function unbracketTag(input) {
//   if (input.startsWith("<") && input.endsWith(">")) {
//     return input.slice(1, -1);
//   } else {
//     return input;
//   }
// }

// let text = "<Salom>";
// let result = unbracketTag(text);
// console.log(result);

// 3 vazifa

// let son = parseInt(prompt("Son kiriritng: "));
// let truFal;

// function isPrime(n) {
//   if (n % 2 != 0) {
//     truFal = true;
//   } else {
//     truFal = false;
//   }
//   return truFal;
// }

// let result = isPrime(son);
// alert(truFal);

// 4 vazifa

// function group(a) {
//   let result = {};

//   a.forEach((item) => {
//     if (result[item.country]) {
//       result[item.country].push(item.city);
//     } else {
//       result[item.country] = [item.city];
//     }
//   });

//   return result;
// }

// let a = [
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "Russia", city: "Samara" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
// ];

// let b = group(a);
// console.log(b);

// 5 vazifa

// let a = 5;
// let b = 15;

// function getSumBetweenNumbers(n1, n2) {
//   let counter = 0;
//   for (let i = n1; i < n2; i++) {
//     counter += i;
//   }
//   return counter;
// }

// const result = getSumBetweenNumbers(a, b);
// console.log(result);

// 6 vazifa

// function birMrta(arr) {
//   return arr.filter(
//     (item) => arr.indexOf(item) === arr.lastIndexOf(item)
//   );
// }

// let arr = [1, 5, 6, 1, 5, 7, 2];
// let result = birMrta(arr);
// console.log(result);

// 7 vazifa

// let b = [];
// function remove(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] !== num[i + 1]) {
//       b.push(num[i]);
//     } else {
//       i++;
//     }
//   }
// }

// let a = [1, 2, 3, 4, 5, 5, 6, 7, 8];
// const result = remove(a);
// console.log(b);

// 8 vazifa

// function yegindi(arr, k, m, n) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i < k || i > m) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
// }
// let array = [1, 2, 3, 4, 5];

// let k = 1;
// let m = 5;
// let n = 8;
// console.log(yegindi(array, k, m, n));

// 9 vazifa

// Input:
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// function readBooks(books) {
//   for (let i = 0; i < books.length; i++) {
//     if (books.alreadyRead == false) {
//       console.log(`${author}ning ${title} o'qilmagan`);
//     } else if (books.alreadyRead == true) {
//       console.log(`${author}ning ${title} o'qilgan`);
//     }
//   }
// }
// readBooks();

// 10 vazifa

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let jami = 0;

// products.forEach((product) => {
//   const chegirma = product.price * (1 - product.discount / 100);
//   const narx = chegirma * product.quantity;
//   jami += narx;
// });

// console.log("Jami " + jami);
