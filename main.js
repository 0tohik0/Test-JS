'use strict'


function sum(a = 1, b = 5) {
    return a + b;
};

sum();

function one (v = 3) {
    console.log(v + sum());
};

one();