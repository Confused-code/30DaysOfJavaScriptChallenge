'use strict'

function log(v) {
    console.log(v);
}

let name = 'Batman'
let age= 32

// log(`${name} is ${age}`);
// log(`${name} is\n${age}`);

// T3 and T4
let arr = [1,2,3,4,5];
let obj = {
    name: 'Batman',
    age: 33,
};

let [first, second, ...rest] = arr;
log(`${first}, ${second}`);
let {name : name1, age : age2} = obj;

const obj2 = {
    na: 'Superman',
    ag: 34,
};
let {na, ag} = obj2;
// log(na);
// log(ag);

const a =10;
const tap = 'bear';
function blast() {
    log('blast');
}

const newObj = {a, tap, blast};
// log(newObj);

const doom = {
    [tap] : 'newTap',
    ['+'+a] : 'newblast',
}
log(doom);

