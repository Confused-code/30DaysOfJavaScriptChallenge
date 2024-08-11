"use strict"

let a;

//for console.log
function log(v) {
    console.log(v);
}

// run task 
// t1();
// t2();
// t3();
// t4();
// t5();
// t6();
t7();

//Task1
function t1() {
    a = +prompt("give a number value to a, +ve, -ve or 0");

    if(a>0) {
        log('+ve');
    } else if (a==0) {
        log('zero');
    } else log('-ve');
}

function t2() {
    a = +prompt('enter age');

    if(a>18) log('eligible to vote');
    else log('not eligible vote');
}

function t3() {
    a = +prompt('enter 1st value');
    let b = +prompt('enter 2nd value');
    let c = +prompt('enter 3rd value');

    if(a>b) {
        if(a>c) log('a is greatest');
        else log('b is greatest')
    } else {
        if(b>c) log('b is greatest');
        else log('c is greatest')
    }
}

function t4() {
    a = +prompt('enter value strictly between 0 and 8');
    if(a<1||a>7) console.error('value is out of bound');

    switch (a) {
        case 1:
            log('Monday');
            break;
        case 2:
            log('Tuesday');
            break;
        case 3:
            log('Wed');
            break;
        case 4:
            log('Thursday');
            break;
        case 5:
            log('Friday');
            break;
        case 6:
            log('Sat');
            break;
        case 7:
            log('Sun');
            break;
    
        default:
            break;
    }
}

function t5() {
    //same as t4, assign grades to students
}

function t6() {
    a = +prompt('enter a number');
    (a>0)?a:a*=-1;

    (a%2==0)?log('even'):log('odd');
}

function t7() {
    a = +prompt('enter a +ve value');
    
    (a%4!=0)?log('not a leap yr'):
        (a%100!=0)?log('leap year'):
            (a%400==0)?log('leap yr'):log('not a leap yr');
}