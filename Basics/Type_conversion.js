let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let result = Number('hello');
console.log(result);

result = String(50);
console.log(result)
console.log(typeof result);

result = Boolean(100);
console.log(result)
console.log(typeof result);

// Any string are true
result = Boolean('0');
console.log(result)
console.log(typeof result);