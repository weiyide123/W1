import { combineReducers}  from 'redux';
// reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
let  count =(state=0,action)=>{
    console.log('wyj',state,action);
    switch (action.type){
        case 'ADD':
            return state+action.num;
        case 'MINUS':
            return  state-action.num;
        default:
            return state;
    }
}
let cet4=(state=415,action)=>{
    switch(action.type){
        case 'CET4':
             return state +action.num;
        default:
            return state;
    }
}

export default combineReducers({
    count,
    cet4
});