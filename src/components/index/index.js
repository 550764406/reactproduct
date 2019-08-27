/** @format */
import React from 'react';
import { connect } from 'react-redux';
//store
import Menu from '../../common/menu';
import Sale from './sale/sale';
const menusort = ['首页', '特惠专场', '工厂直销'];

class Index1 extends React.Component{
    componentWillMount(){
        console.log('child------willMount-------1111111111111111111111',this.props)
    }
    componentDidMount(){
        console.log('child------Mount-------222222222222222222',this.props)
    }

    componentWillReceiveProps(){
        console.log('child------ReceiveProps-------33333333333333333333333333',this.props)
    }

    render(){
        return(
            <>
            {
                console.log('child===========render')
            }
            <div className="banner">
                <div className="contentwarper">
                    <div className="menutitle">
                        <span onClick={(e)=>this.aa(e)}>全部商品分类</span>
                        <ul>
                            {menusort.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <Menu />
                </div>
            </div>
            <div className="salewarper">
                <Sale mylist={this.props.conlists} oftenlist={this.props.conlists} />
            </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        conlists: state.lists,
        oftenlists: state.lists
    }
}

const mapActionToProps = (dispatch)=>{
    return{

    }
}

export default connect(mapStateToProps,mapActionToProps)(Index1);
