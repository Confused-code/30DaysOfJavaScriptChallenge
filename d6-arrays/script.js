'use strict';

function log(v) {
    console.log(v);
}

let arr = [1,2,3,4,5]

log(arr)
log(arr[0])
log(arr[arr.length-1])

// T-3 to T 6
arr.push(6);
log(arr);

arr.pop();
log(arr);

arr.shift();
log(arr);

arr.unshift(1);
log(arr)

// T7 to T9 
const newArr =arr.map((item) => item*2);
log(newArr);

const newArr2 = arr.filter( item => (item%2==0));
log(newArr2)

const sum = arr.reduce((sum, item) => sum+=item, 0);
log('sum is '+sum)

// T10 - T11 
for(let item in arr) {
    log(arr[item]);
}

newArr.forEach((item)=>{log(item)})

// Multidimensional array T12-T13

const multiArr = [];
multiArr.push(arr, newArr, newArr2);
log(multiArr);

log(multiArr[1]);
log(multiArr[2][1]);
