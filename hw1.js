//Q1
const num = 123;
//אם מספר מתחלק ב2.3.5  להדפיס 1- YES
const divisibleBy2=Number(num%2===0);
const divisibleBy3 = Number(num % 3 === 0);
const divisibleBy5 = Number(num % 5 === 0);

const result = divisibleBy2 + divisibleBy3 + divisibleBy5;

console.log(result);




//Q2
//אם המספר מתחלק גם ב2 גם ב3 או ב3 וגם ב5 יש להדפיס 2 
const number = 12; // ניתן להחליף את המספר כדי לבדוק תוצאות שונות

// בדיקות חלוקה
const isDivisibleBy2 = Number(number % 2 === 0);
const isDivisibleBy3 = Number(number % 3 === 0);
const isDivisibleBy5 = Number(number % 5 === 0);

// חישוב אם המספר מתחלק בדיוק בשני מספרים מבין 2, 3, 5
const twoDivisors =
  (isDivisibleBy2 && isDivisibleBy3 && !isDivisibleBy5) ||
  (isDivisibleBy2 && !isDivisibleBy3 && isDivisibleBy5) ||
  (!isDivisibleBy2 && isDivisibleBy3 && isDivisibleBy5);

// חישוב אם המספר מתחלק בשלושת המספרים יחד
const threeDivisors = isDivisibleBy2 && isDivisibleBy3 && isDivisibleBy5;

// הדפסת התוצאה
console.log(Number(twoDivisors) * 2 + Number(threeDivisors) * 3);


//Q3
// אם המספר מתחלק גם ב-2 וב-3 וב-5 – יש להדפיס 3
const n=30;

// בדיקות חלוקה
const IsDivisibleBy2 = Number(n % 2 === 0);
const IsDivisibleBy3 = Number(n % 3 === 0);
const IsDivisibleBy5 = Number(n % 5 === 0);

const treeDivisors = (IsDivisibleBy2 && IsDivisibleBy3 && IsDivisibleBy5);
console.log(Number(treeDivisors)*3);