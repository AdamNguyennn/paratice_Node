// var nums = [1,2,3,4,5];

// function checkNum(num) {
//     var check = (temp) => {
//         var a = (temp % 2 == 0) ? temp * 2 : temp * 3;
//         return a;
//     }
//     var newArr = num.map(check);
//     return newArr;
// }

// console.log(checkNum(nums));

///////////////////////////////$$$$$$$$$$///////////

//REGEX
//   var re = /^(Mrs|[MDE]r)\.([a-zA-Z])+$/;
    
        
// str1 = "Dr#Joseph"; // false
// str2 = "Er. Abc"; // false
// str3 = "Mr.Y"; // true
// str4 = "Mrs.X"; // true
// str5 = "Er.Acb"; // true
// str6 ="Er.Dr"; // true

// console.log(re.test(str1));
// console.log(re.test(str2));
// console.log(re.test(str3));
// console.log(re.test(str4));
// console.log(re.test(str5));
// console.log(re.test(str6));
////////////////////////////////////@@@@@@@@@@@@@@@@@@////////
 //REGEX
// //vow = [aeiou];

// var re = /^([aeiou]).+\1$/;

// str1 = "abc"; // false
// str2 = "ababca"; // true
// str3 = "bsab"; // false
// str4 = "eadfbe"; // true

// console.log(re.test(str1));
// console.log(re.test(str2));
// console.log(re.test(str3));
// console.log(re.test(str4));

////777777777777777777777&&&&&&&&&&&&&&&&&&&&///////////////
//REGEX

// var rex =/[0-9]/g;

// str1 = "102, 1948984 and 1.3 and 4.5";
// str2 = "1 2 3";

// console.log(str1.match(rex));
/****************************//****************************/

// function getDayName(dateString) {
//     let dayName;
//     var c = new Date(dateString).getDay();
//     switch (c) {
//         case 0:
//             dayName = "Sunday";
//             break;
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//             break;
//     }

//     return dayName;
// }

// console.log(getDayName('10/11/2009'));
// console.log(getDayName('11/10/2010'));
/****************************//****************************//****************************/

