/**
 * 
 * @param {*} fn 需要执行的延迟函数
 * @param {*} delay 执行延迟函数的时间
 */
// 测试用的数据
export const debounce = (fn, delay = 1000) => {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw new Error('fn is not function');
    }
    let timer;
    return (data,list) => {
        clearTimeout(timer);
        if (data == "") return clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, data,list)
        }, delay)
    }
}
export const debounceAjax = debounce(ajax, 1000);

function ajax(data,list) {
    console.log(data,list)
}
