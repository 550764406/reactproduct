import { INITHOME } from './actionType';
const defaultStatus = {

}

export default (state = defaultStatus,action)=>{
    console.log('action',action)
    switch (action.type){
        case INITHOME:
            const newState = JSON.parse(JSON.stringify(state));
            newState.lists = action.data;
            return newState;
        default:
            return state
    }
}