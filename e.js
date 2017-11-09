const arr = [1, 4, 2, 7, 9];

const arrPerson = [
    { name: 'Teo', age: 10 },
    { name: 'Ti', age: 11 },
    { name: 'Tun', age: 5 },
]

// console.log(arrPerson.findIndex(e => true));

Array.prototype.myFind = function(fn) {
    for(let i = 0; i < this.length; i++) {
        if (fn(this[i])) return this[i];
    }
}
console.log(arrPerson.myFind(e => e.name === 'Tun'));

// let x = { name: 'a' };
// let y = x;
// x.name = 'b';

// console.log(x === { name: 'a' });
// console.log(arr.indexOf(7));
// console.log(arr.indexOf({ name: 'Ti', age: 11 }));

