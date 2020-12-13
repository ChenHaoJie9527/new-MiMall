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