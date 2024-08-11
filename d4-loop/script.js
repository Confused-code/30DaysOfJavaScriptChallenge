'use strict';

let a;
// t1()
// t2()
// t3();
// t4();
// t5();
// t6()
// t7()
t8()

function log(value) {
    console.log(value);
}

function t1 () {
    log('too easy');
}

function t2 () {
    log('table of 5, easy peasy');
}

function t3 () {
    a=10;
    let sum=0;
    while(a--) {
        sum+=(a+1);
    }
    log(sum)
}

function t4 () {
    log('easy');
}

function t5 () {
    a =5;
    do {
        log(a);
    } while (--a)
}

function t6 () {
    //factorial
    let factorial=1;
    a=+prompt('enter a number from 1 to 10');

    do{
        factorial*=a;
    } while(--a)
    log(factorial);
}

function t7 () {
    log('print pattern to easy');
}

function t8() {
    a=0;
    while(true) {
        a++;
        if(a==5) continue;
        console.log(a);
        if(a==10) break;
    }
}

function t9() {
log('easy');
}