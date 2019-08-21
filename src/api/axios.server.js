import axios from './http';
let catchName = 0
class myAxiosHttp {
    //公共请求
    // opt 请求格式
    // {
    //     method:'GET',
    //     url,
    //     action, '/data.json'
    //     params,
    //     contentType:'application/json',
    //     successFn: successFn
    // }
    apiAxios(opt){
        let params, data;
        if(opt.method === 'GET'){
            params = opt.params;
            data = '';
        }
        else{
            params = '';
            data = opt.data;
        }
        //axios({}).then().catch()
        axios({
            method: opt.method,
            url: opt.url+ opt.action + '?timestamp='+ new Date().getTime(),
            headers: {'Content-type': opt.contentType},
            params: params,
            data: data
        }).then(res=>{
            //请求返回callback
            if(res.data.errorMessage === 'token已过期' || res.data.errorMessage === 'token已失效'){
                //可以添加一些提示框
                catchName++;// 防止catch时多次弹出
            }
            //返回数据
            opt.successFn(res.data);
        }).catch(error=>{
            //请求错误的callback
            console.log('请求错误=====》',error);
        })
    }
}
export default myAxiosHttp;


