import myAxiosHttp from './axios.server.js';
const myAxios = new myAxiosHttp();

/*
 * GET请求封装
 * @param url 请求host
 * @param action 请求方法名 /api/list
 * @param params 请求参数
 * @param successFn 成功回调
*/
function getRequest (url,action,params,successFn) {
    // MYAXIOS.getServer({url,action,params,contentType:'application/json',successFn:successFn});
    myAxios.apiAxios({
        method:'GET',
        url,
        action,
        params,
        contentType:'application/json',
        successFn: successFn
    })
}

/*
 * POST请求封装
 * @param url 请求host
 * @param action 请求方法名
 * @param params 请求参数
 * @param successFn 成功回调
*/
function postRequest (url,action,obj, successFn) {
    let arr = Object.getOwnPropertyNames(obj);
    if(arr.length === 0) return;
    let fd = new FormData();
    for(let item in obj){
        fd.append(item,obj[item]);
    }

    if(action ==='/api/newApp'){ //action 为formdata请求的用这个 eg:'/api/newApp'
        myAxios.apiAxios({
            method:'POST',
            url,
            action,
            data:fd,
            contentType:'application/x-www-form-urlencoded',
            successFn:successFn
        });
        return;
    }
    myAxios.apiAxios({
        method:'POST',
        url,
        action,
        data:obj,
        contentType:'application/json;charset=UTF-8',
        successFn: successFn
    })
}

/*
 * 1.获取list信息
 * @param params 请求参数
 * param successFn 
*/
export function $getList(successFn) {
    postRequest('http://localhost:3000','/app/mock/223715/shop/home','',successFn);
}

/*
 * 1.获取list信息
 * @param params 请求参数
 * param successFn
*/
export function $getList1(successFn) {
    postRequest('http://localhost:3000','/api/list1','',successFn);
}
