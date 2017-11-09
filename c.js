const arr = [1, 4, 2, 7, 9];

// console.log(arr.map(e => e * e))

// function tra ve mang, 
// moi phan tu la binh phuong cua cac phan tu trong arr
Array.prototype.getBinhPhuong = function() {
    let arrOutput = [];
    for(let i = 0; i < this.length; i++) {
        arrOutput.push(this[i] * this[i]);
    }
    return arrOutput;
}

Array.prototype.getNhanDoi = function() {
    let arrOutput = [];
    for(let i = 0; i < this.length; i++) {
        arrOutput.push(this[i] + this[i]);
    }
    return arrOutput;
}

console.log(arr.getNhanDoi());
// function tra ve mang, 
// moi phan tu la gap doi cua cac phan tu trong arr
