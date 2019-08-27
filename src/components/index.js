import React,{ Component } from 'react';
import Header from '../common/header';
import Content from './index/index';
import '../assets/css/index.less';
import {  connect } from 'react-redux';
import store from '../store/index';
import { getInitHomeData } from '../store/actionCreators'

class Index extends Component{
    constructor(props){
        super(props);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }

    componentWillMount(){
        console.log('parent------willMount-------1111111111111111111111')
    }
    componentDidMount(){
        console.log('parent------Mount-------222222222222222222222222',this.props)
    }

    componentWillReceiveProps(){
        console.log('parent------ReceiveProps-------3333333333333333333333')
    }

    handleStoreChange(){
        this.setState(store.getState())
    }
    render() {

        return (
            <>
            {
                console.log('parent===========render')
            }
                <Header />
                <Content />
            </>
        )
    }
    componentDidMount(){
        const action = getInitHomeData();
        store.dispatch(action);
    }
}
const mapStateToProps = (state)=>{
    return{
        state:state
    }
}

const mapActionToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapActionToProps)(Index);
