export const throttle = (fn, delay = 1000)=>{
    let timer;
    return (args)=>{
        if(args == "") return;
        if(!timer){
            timer = setTimeout(()=>{
                timer = undefined;
                fn.call(this,args)
            },delay)
        }
    }
}
function move(e){
    console.log(e);
}
export const throttleMove = throttle(move);