const arr = [1, 4, 2, 7, 9];

// console.log(arr.filter(x => x % 2 === 0));
// Loc cac phan tu trong mang thoa man kieu kien GI DO

Array.prototype.myFilter = function(fn) {
    const arr2 = [];
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i])) {
            arr2.push(this[i]);
        }
    }
    return arr2;
}
console.log(arr.myFilter(x => x % 2 === 0));
