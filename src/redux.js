import {createStore, combineReducers} from 'redux';
// import {connect} from 'redux' 
const objectReducer =(state=[{Name:"Ali",age:20,city:"Faisalaad"}],action)=>{
    switch(action.type){

        case "Add":
        return [...state, action.payload];
        default:
        return state;
    }
}

const bookReducer=(state=["English","math","phy"],action)=>{

    switch(action.type){

        case "book":
        return [...state, action.payload];
        default:
        return state;
    }
}
const allReducers=combineReducers({objectReducer, bookReducer});
let store=createStore(allReducers);
export default store;