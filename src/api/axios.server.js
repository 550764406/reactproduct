import axios from './http';

class myAxios {
    //公共请求
    apiAxios(opt){
        //axios({}).then().catch()
        axios({
            method: opt.method,
            url: opt.url+ opt.action + '?timestamp='+ new Date().getTime(),
            headers: {'Content-type': opt.contentType},
            params: params,
            data: data
        }).then(res=>{
            if(!res.state){
                return;
            }
            //请求返回callback
            if(res.sucessFn){
                //数据没有请求成功
                if(!res.data.success){
                    if(res.data.errorMessage === 'token已过期' || res.data.errorMessage === 'token已失效'){
                        //可以添加一些提示框
                    }
                    else {
                        if(!res.data.data){
                            //如果data没有值 可以添加提示
                        }
                    }
                }
                //返回数据
                opt.successFn(res.data);
            }
        }).catch(error=>{
            //请求错误的callback
            if(opt.failFn){
                opt.failFn(error);
            }
        })
    }

    //post请求
    postAxios(opt){
        let data = {};
        if(opt){
            data = opt.data;
        }

        axios.post(opt.url+opt.action,data,{
            headers:{
                'content-type': opt.contentType
            }
        }).then(res=>{
            if(!res.state){
                return;
            }
            //请求返回callback
            if(res.sucessFn){
                //数据没有请求成功
                if(!res.data.success){
                    if(res.data.errorMessage === 'token已过期' || res.data.errorMessage === 'token已失效'){
                        //可以添加一些提示框
                    }
                    else {
                        if(!res.data.data){
                            //如果data没有值 可以添加提示
                        }
                    }
                }
                //返回数据
                opt.successFn(res.data);
            }
        }).catch(error=>{
            //请求错误的callback
            if(opt.failFn){
                opt.failFn(error);
            }
        })
    }
}


