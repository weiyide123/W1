export let add =(num)=>{
    console.log('add-action',num);
    return {
        type:'ADD',
        num
    }
}
export let minus =(num)=>{
    console.log('add-action',num);
    return {
        type:'MINUS',
        num
    }
}
export let  cet4=(num)=>{
    console.log('add-action',num);
    return {
        type:'CET4',
        num
    }
}
 
// store提供属性   action提供方法干哈  reducer改