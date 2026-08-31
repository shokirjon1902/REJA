// TASK - B
/*
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

function countDigits(str) {
  let number = 0;
  for (let a = 0; a < str.length; a++) {
    if (str[a] >= "0" && str[a] <= "9") {
      number++;
    }
  }
  return number;
}

const answer = countDigits("a23d2a54fvfrdy79we11t0sf5gb9");
console.log("Answer: ", answer);

// TASK - A
// Harf sifatida kiritilgan birinchi parametr,
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

// function countLetter(letter, word) {
//   let count = 0;
//   for (let a = 0; a < word.length; a++) {
//     if (word[a] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countLetter("a", "Jack Ma maslahatlari"));

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba buling ", //0-20
//   "togri boshliq tanlang va koproq xato qiling ", // 20-30
//   "uzingizga ishlashni boshlang ", //30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga invistetsiya qiling ", //50-60
//   "endi dam oling , fodasi yoq", // 60+
// ];

// //CALLBACK sunction
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("inser a number ", "null");
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 4000);
//   }
// }

// console.log("passed here 0");

// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob;", data);
// });

// console.log("passed here 1");

// SYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("inser a number ");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 2000);
//     });
//   }
// }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(35)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });

// console.log("passed here 1");

// asyn/await
// async function run(params) {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(700);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }

// run();
