'use strict';

let a;
let b;

function log(v) {
    console.log(v);
}

a=+prompt('enter a num')
// b=+prompt('enter another num if u want to')

// task 3
const t3 = function () {
    a = +prompt('value of a');
    b = +prompt('value fo b');

    (a>b)?log(a):log(b);
}

const t4 = function () {
    a=prompt('enter a string')
    b=prompt('enter another string')

    log(a+" "+b);
}

const t5 = () => {
    a=+prompt('enter a num')
    b=+prompt('enter another ')

    log(a+b);
}

const t6 = ()=> {
    a=prompt('enter a string')
    b=prompt('enter substr to find in string')

    log(a.includes(b));
}

function t7(a,b=5) {
    log(a*b);
}

function callback(a) {
    log('hi');
    log(a);
}

function t9(a, callingback) {
    while(a--) {
        callingback(a);
    }
}

function t10(a, callback1, callback2) {
    return callback2(callback1(a));
}

function callback1(a) {
    return a*10;
}

function callback2(a) {
    return a*10;
}

// t3();
// t4();
// t5();
// t6();
// t7(a,b);
// t7(a);
// t8()
// t9(a, callback);
log(t10(a, callback1, callback2));