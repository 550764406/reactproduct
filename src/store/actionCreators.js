import fetch from 'isomorphic-unfetch';
import{ INITHOME } from './actionType';
import { $getList } from '../api/api';

const initType = (data)=>({
    type: INITHOME,
    data
})

export const getInitHomeData = () => {
    return  (dispatch) => {
       $getList( (data) => {
            dispatch(initType(data))
        });
    }
}



// export const getInitHomeData = ()=> {
//     return async (dispatch)=>{
//         const res = await fetch('http://localhost:3000/app/mock/223715/shop/home',{
//             method: 'post'
//         })
//         const data = await res.json();
//         console.log('44444444444444==========>',data)
//         dispatch(initType(data))
//     }
//
// }
