import{ INITHOME,INITOFTENHOME,INITSELLERLISTHOME } from './actionType';
const defaultStatus = {

}

export default (state = defaultStatus,action)=>{
    console.log('action',action)
    switch (action.type){
        case INITHOME:
            return {
                ...state,
                lists:  action.data
            }
        case INITOFTENHOME:
            return {
                ...state,
                oftenlists:  action.data
            }
        case INITSELLERLISTHOME:
            return {
                ...state,
                indexsellerlists:  action.data
            }
        default:
            return state
    }
}