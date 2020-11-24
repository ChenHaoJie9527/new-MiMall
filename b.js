const promise1 = Promise.resolve(100);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'info'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'name'))

Promise.allSettled([promise1, promise2, promise3]).
then((results) => console.log(results));
/* 
    [
        { status: 'fulfilled', value: 100 },
        { status: 'rejected', reason: 'info' },
        { status: 'fulfilled', value: 'name' }
    ]
*/
const num = 10;
console.log(num.toFixed(2));
console.log(num.toPrecision(4));

let numObj = 5.123456;
//当使用toPrecision方法的时候，如果值的小数点大于指定小数点，那么就会采用四舍五入方法进行计算，会出现向上向下取证
console.log(numObj.toPrecision())    // logs '5.123456'
console.log(numObj.toPrecision(3))   // logs '5.1235'
console.log(numObj.toPrecision(2))   // logs '5.1'
console.log(numObj.toPrecision(1))   // logs '5'