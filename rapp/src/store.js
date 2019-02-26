import {createStore} from 'redux';
// reducer  
let initialState = {
    count:0
};
// createStore创建store 第一个参数reducer 第二个参数初始state
let store = createStore(()=>{
},initialState);

export default store;