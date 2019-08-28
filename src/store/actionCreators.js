// import fetch from 'isomorphic-unfetch';
import{ INITHOME,INITOFTENHOME,INITSELLERLISTHOME, INITLIST } from './actionType';
import { $getHomeList,$getOftenList,$getIndexSellerList,$getList } from '../api/api';

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

const initListType = (data)=>({
    type: INITLIST,
    data
})

export const getInitHomeData = () => {
    return  (dispatch) => {
        $getHomeList( (data) => {
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

export const getInitListData = ()=>{
    return (dispatch=>{
        $getList((data)=>{
            dispatch(initListType(data));
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
