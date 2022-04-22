'use strict'

let a = 1;
let b = 5;

function sum() {
    return a + b;
};

sum();

function one (v = 3) {
    console.log(v + sum());
};

one();