/**
 * 
 * @param {string 查询数组中的数据} key 
 * @param {string 对应的值} value 
 * @param {Function 单个精准查询} SearchKeyValue
 */
export function SearchKeyValue(list, key, value = undefined) {
    return list.filter(item => {
        if (!value) {
            return item[key];
        } else {
            return item[key] == value;
        }
    });
}
/**
 * 
 * @param {Array 原数组} list 
 * @param {Object 需要筛选的多个条件组成的对象} filterList 
 * @param {Function 多条件精准查询} SearchMultiValue
 * 
 */
export function SearchMultiValue(list = [], filterList = {}) {
    const key = Object.keys(filterList);
    return list.filter(item => key.find(k => item[k] === filterList[k]));
}

/**
 * 
 * @param {Array} list 所有数据 
 * @param {*} key 需要查询的key键
 * @param {*} valueArr 需要查询的值 单个或者多个
 */
export function SearchSingleAndMultiValue(list = [], key = "", valueArr = []) {
    return list.filter(item => valueArr.find(i => i == item[key]))
}