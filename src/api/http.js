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

/**
 * axios应用
 * 一、axios是一个基于promise的http库，既可以应用于浏览器端也可应用于node端
      特性：
        1、支持promise api
        2、拦截请求和响应
        3、转化请求数据和响应数据
        4、取消请求
        5、自动转动json数据
        6、客户端支持防御XSRF
 * 二、axios的请求方法
 *      get: 用于获取数据
 *      post：用于提交数据（表单提交 + 文件上传）
 *          form-data(图片上传、文件上传)
 *              let data = { a: 1};
 *              let formData = new FormData();
 *              for(let key in data){
 *                  formData.append(key, data[key]);
 *              }
 *              axios.post('/post',formData).then()
 *          application/json 提交
     *          let data = { a: 1};
     *          axios({
     *              method: 'post',
     *              url: '/post',
     *              data: data
     *          })
     *          axios.post('/post',data).then()
 *      put：更新数据（所有的数据推送到后端）
 *            axios.put('/post',data).then()
 *      patch：更新数据（只推送修改的数据）
 *      delete：删除数据
 * 三、并发请求
 *    同时进行多个请求，并且统一处理返回值
 *    axios.all[] 多个请求路径
 *    axios.spread 请求的返回值
 *      axios.all[
 *          axios.get('/data.json'),
 *          axios.get('/city.json')
 *      ].then(
 *          //这里上面有几个请求，则下面有几个返回值
 *          axios.spread((dataRes,cityRes)=>{
 *              console.log(dataRes, cityRes);
 *          })
 *      )
 * 四、axios实例
 *     后端接口地址由多个，超时时长不一样
 *     let axios1 = axios.create({
 *          baseURL: 'http://localhost:8080',
 *          timeout: 1000
 *     })
 *     let axios2 = axios.create({
 *          baseURL: 'http://localhost:9090',
 *          timeout: 5000
 *     })
 *     axios1.get('/data.json').then(res=>{
 *      console.log(res);
 *     }) 访问改接口超时时的回调函数
 *     axios2.get('/data.json').then(res=>{
 *      console.log(res);
 *     }) 访问改接口超时时的回调函数
 * 五、axios配置参数
 *      axios.create({
 *          baseURL: 'http://localhost:8080', //请求的域名地址
 *          timeout :1000 , //超时时长
 *          url:"/data.json", //请求路径
 *          method: 'get,post,put,patch,delte', //请求方法
 *          headers：{
 *              token:""
 *          }, //请求头
 *          params:{},//请求参数添加到请求地址上
 *          data：{} //请求参数添加到请求体上
 *      })
 *      1、axios全局配置
 *          axios.defaults.timeout = 1000;
 *          axios.defaults.baseURl = 'http://localhost:8080'
 *      2、axios的实例配置
 *          let instance = axios.create();
 *          instance.defaults.timeout = 3000;
 *      3、axios请求配置
 *          instance.get('data.json',{
 *              timeout: 5000
 *          })
 * 六、实际开发
 *     有两种请求接口
 *     http://localhost:9090
 *     http://localhost:9091
 *     let instance = axios.create({
 *          baseURL: 'http://localhost:9090',
 *          timeout :1000
 *      })
 *      let instance1 = axios.create({
 *          baseURL: 'http://localhost:9091',
 *          timeout :3000
 *      })
 *      //需要的请求参数 baseURL,timeout,url,method,params
 *      instance.get('/list',{
 *          params:{}
 *      }).then(res=>{
 *          cosnole.log(res)
 *      })
 *      //需要的请求参数 baseURL,timeout,url,method,params
 *      instance.get('/list',{
 *          timeout :5000
 *      }).then(res=>{
 *          cosnole.log(res)
 *      })
 * 七、拦截器
 *      在请求或者响应被处理前拦截它们
 *      //请求拦截器
 *      axios.interceptors.request.use(config=>{
 *          //请求前做什么
 *          return config
 *      },err=>{
 *         //请求出现错误的时候做什么 （接口没有未请求错误，还没到后端接口处理）
 *         return Promise.reject(err);
 *      })
 *      //响应拦截器
 *      axios.interceptors.response.use(res=>{
 *          //请求成功对响应数据做什么
 *          return res
 *      }，err=>{
 *          //响应错误的是做什么,  （接口查不到此人，后端返回为响应错误）
 *          return Promise.reject(err);
 *      })
 *      axios.get('data.json').then(res=>{
 *          //上面的res就是返回到这里的res
 *      }).catch(err=>{
 *          //这里就是处理的上面err的回调函数
 *      })
 *      //取消拦截器
 *      let instance = axios.interceptors.request.use(config=>{
 *          config.headers = {
 *              auth: true
 *          };
 *          return config;
 *      })
 *      axios.interceptors.request.eject(instance);
 *      //例子 登录状态 token 识别登录人的信息
 *      let instance = axios.create({});
 *      instance.interceptors.request.use(config=>{
 *          config.headers.token = '';
 *          return config;
 *      })
 *      //不需要登录访问的接口
 *      let newinstance = axios.create({});
 *
 *      //移动端开发 请求前显示模态框，请求成功关闭
 *      let instance_phone = axios.create({});
 *      instance_phone.interceptors.request.use(config=>{
 *          $('#model').show();
 *          return config;
 *      });
 *      axios.interceptors.response.use(res=>{
 *          $('#model').hide();
 *          return res
 *      })
 * 八、取消请求(message 可选)
 *      //什么情况用到 一个请求几秒内用不到就取消请求
 *      let source = axios.CancelToken.source();
 *      axios.get('/data.json',{
 *          CancelToken: source.token
 *      }).then(res=>{
 *          console.log(res)
 *      }).catch(err=>{
 *          console.log(err);
 *      })
 *      source.cancel('cancel http');
 * 九、axios封装
 *  1、添加统一的loading 超时，请求加载、错误判断
 *  2、给headers添加token鉴权，某些接口需要添加token判断
 *  3、统一的错误提示
*/
