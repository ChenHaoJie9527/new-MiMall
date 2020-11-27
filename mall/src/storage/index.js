let STORAGE_KEY = "mall"; // storage封装 key值
class Storage {
    setItem(key, value, module_name) {
        if(module_name){
            let val = this.getItem(key);
            val[module_name] = value;
            this.setItem(key,val);
        }else {
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
    }
    getItem(module_name, key) {
        if (key) {
            return this.getStorage()?.[module_name]?.[key]??undefined;
        }
        return this.getStorage()?.[module_name]??undefined;
    }
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "{}");
    }
    clear(key, module_name) {
        let val = this.getStorage();
        if(module_name){
            delete val[key]?.[module_name]??undefined;
        }else {
            delete val[key]??undefined;
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}
const storage = new Storage();
export { storage };