let ninjas = ['shaun', 'ryu', 'chun-li'];

console.log(ninjas[1]);

// let result = ninjas.concat(['ken', 'crystal']);

let result = ninjas.push('ken');
// Its altered the main array
console.log(ninjas);
result = ninjas.pop();
console.log(ninjas);