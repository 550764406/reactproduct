import React,{ Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';

class Index extends Component{
    constructor(props){
        super(props);
        this.state ={
            btnmsg: "点击获取数据"
        }
    }
    btnclick(){
        axios.get('/api/list').then((data)=>{
            console.log('请求成功了',data);
        })
    }

    render() {
        return (
            <>
                <Button type="primary" onClick={ this.btnclick }>{this.state.btnmsg}</Button>
            </>
        )
    }
}

export default Index;