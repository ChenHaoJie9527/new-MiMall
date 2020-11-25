// const promise1 = Promise.resolve(100);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'info'));
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'name'))

// Promise.allSettled([promise1, promise2, promise3]).
// then((results) => console.log(results));
// /* 
//     [
//         { status: 'fulfilled', value: 100 },
//         { status: 'rejected', reason: 'info' },
//         { status: 'fulfilled', value: 'name' }
//     ]
// */
// const num = 10;
// console.log(num.toFixed(2));
// console.log(num.toPrecision(4));

// let numObj = 5.123456;
// //当使用toPrecision方法的时候，如果值的小数点大于指定小数点，那么就会采用四舍五入方法进行计算，会出现向上向下取证
// console.log(numObj.toPrecision())    // logs '5.123456'
// console.log(numObj.toPrecision(3))   // logs '5.1235'
// console.log(numObj.toPrecision(2))   // logs '5.1'
// console.log(numObj.toPrecision(1))   // logs '5'

/**
 * 数组转对象：
 *     1. 展开运算符
 *     2. Object.assign(target,...sources)
 *          将所有可枚举属性的值从一个或多个源对象分配到目标对象
 *          参数： target目标对象 ...sources源对象
 *          返回值： 目标对象
 *     3. Object.fromEntries(iterable)
 *          把键值对转换为一个对象。
 *          参数：类似Array、Map
 *          返回值：由该迭代对象条目提供对应属性的新对象
 */

// 1. 展开运算符
// const arr = [1,2,3,4,5];
// console.log({...arr});

// Object.assign(target,...sources);
// const arr = ['one', 'two', 'three'];
// const obj = Object.assign({}, arr);
// console.log(obj);

// Object.fromEntries(iterable)
// const arr = new Map([
//     [1,"chj"],
//     [2,'lili'],
//     [3,'xiaoming']
// ]);
// const obj = Object.fromEntries(arr);
// console.log(obj);

/**
 * 对象转数组：
 *      1. Object.entries(obj)：
 *          把一个键值对转换为数组
 *          参数：可以返回其自身可枚举属性的键值对的对象
 *          返回值：返回一个其自身可枚举属性的键值对数组
 *      2. Object.keys(key);
 *          由给定的对象自身可枚举的属性组成的数组
 *          参数：对象
 *          返回值：给定对象的属性组成的字符串数组    
 *      3. Object.values(obj)
 *          由给定的对象自身可枚举的属性值组成的数组
 *          参数：对象
 *          返回值：给定对象的属性值组成的字符串数组
 *      4. Array.from(array, fn, this)
 *          从一个类似数组对象或可迭代对象创建一个新的，浅拷贝的数组实例。
 *          参数：     
 *              array类数组或者可迭代对象
 *              fn 增强函数，新数组的每个元素都会执行该函数
 *              this 执行回调函数时的this对象
 *              返回值：一个新的数组实例
 */

//  Object.entries(obj)：
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// const arr = Object.entries(obj);
// console.log(arr);

// Object.keys(key);
// const obj = {a:1,b:2,c:3};
// // const arr = Object.keys(obj).map(item => obj[item]);
// // console.log(arr); // [1, 2, 3];

// const arr = Object.keys(obj).map(item => [item,obj[item]]);
// console.log(arr); // [ ['a', 1], ['b', 2], ['c', 3] ]

// Object.values(obj);
// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// const arr = Object.values(obj);
// console.log(arr); // [1, 2, 3];

/**
 * ps: 
 *      什么是类数组？
 *      就是含有索引值或者length的对象 
 *      类似数组对象的length的值，决定了返回数组的长度
 */
// 类数组
// const obj = {
//     0: 'name',
//     1: 'age',
//     2: 'sex',
//     3: 'height',
//     length: 3,
// };
// console.log(Array.from(obj));
console.log("12312321")
