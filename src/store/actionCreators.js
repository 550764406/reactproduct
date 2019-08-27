// import fetch from 'isomorphic-unfetch';
import{ INITHOME,INITOFTENHOME,INITSELLERLISTHOME } from './actionType';
import { $getList,$getOftenList,$getIndexSellerList } from '../api/api';

const initType = (data)=>({
    type: INITHOME,
    data
})
const initOftenType = (data)=>({
    type: INITOFTENHOME,
    data
})
const initIndexSellerType = (data)=>({
    type: INITSELLERLISTHOME,
    data
})

export const getInitHomeData = () => {
    return  (dispatch) => {
       $getList( (data) => {
            dispatch(initType(data))
        });
    }
}
export const getInitHomeOftenData = () => {
    return  (dispatch) => {
        $getOftenList((data)=>{
            dispatch(initOftenType(data))
        })
    }
}

export const getInitIndexSellerData = ()=>{
    return (dispatch=>{
        $getIndexSellerList((data)=>{
            dispatch(initIndexSellerType(data));
        })
    })
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
