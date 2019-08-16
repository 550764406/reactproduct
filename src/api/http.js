import axios from 'axios';
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 15000;

//拦截所有请求并都添加上token
axios.interceptors.request.use( req =>{
    let token = window.localStorage.getItem('token');
    if(token){
        //req.headers.accessToken = token;
        req.headers['Ggc-token'] = token;
    }
    return req;
},error =>{
    setTimeout(()=>{
        //可以添加一个错误提示信息
    },3000);
    return Promise.reject(error);
});

//拦截相应请求
axios.interceptors.response.use( data =>{
    return data;
},error=>{
    return Promise.reject(error)
});
export default axios;