import { INITHOME } from './actionType';
const defaultStatus = {

}

export default (state = defaultStatus,action)=>{
    console.log('action',action)
    switch (action.type){
        case INITHOME:
            return Object.assign(state,action.data);
        default:
            return state
    }
}