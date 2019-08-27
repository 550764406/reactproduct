import React,{ Component } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Content from './index/index';
import '../assets/css/index.less';
import {  connect } from 'react-redux';
import store from '../store/index';
import { getInitHomeData,getInitHomeOftenData,getInitIndexSellerData } from '../store/actionCreators'

class Index extends Component{
    constructor(props){
        super(props);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    render() {
        return (
            <>
                <Header />
                <Content />
                <Footer/>
            </>
        )
    }
    componentDidMount(){
        //促销
        const action = getInitHomeData();
        store.dispatch(action);
        //酒水饮料
        const oftenAction = getInitHomeOftenData();
        store.dispatch(oftenAction);
        //推荐商家
        const indexSellAction = getInitIndexSellerData();
        store.dispatch(indexSellAction)
    }
}
export default connect()(Index);
