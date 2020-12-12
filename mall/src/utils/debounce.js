/**
 * 
 * @param {*} fn 需要执行的延迟函数
 * @param {*} delay 执行延迟函数的时间
 */
export const debounce = (fn, delay = 1000) => {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw new Error('fn is not function');
    }
    let timer;
    return (data) => {
        clearTimeout(timer);
        timer= setTimeout(() => {
            fn.call(this, data)
        }, delay)
    }
}
export const debounceAjax = debounce(ajax, 1000);

function ajax(data) {
    console.log(new Date().toLocaleTimeString() + "-" + data);
}
