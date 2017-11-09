const arr = [
    'Android', 'React', 'Angular', 'Node'
];

Array.prototype.myForEach = function(fn) {
    for(let i = 0; i < this.length; i++) {
        fn(this[i]);
    }
}

arr.myForEach(i => console.log('i = ' + i));

// arr.forEach(i => console.log(i));
