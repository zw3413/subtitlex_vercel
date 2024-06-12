'use client'
export const useLocalStorage = (key:string)=>{
    const setItem = (value: unknown)=>{
        try{
            global?.window?.localStorage?.setItem(key, JSON.stringify(value));
        }catch(error){
            console.log(error)
        }
    };
    const getItem = ()=>{
        try{
            const item = global?.window?.localStorage?.getItem(key)
            return item ? JSON.parse(item) : undefined;
        }catch(error){
            console.log(error)
        }
    };
    const removeItem = ()=>{
        try{
            global?.window?.localStorage?.removeItem(key);
        }catch(error){
            console.log(error)
        }
    };
    return [setItem, getItem, removeItem]
}