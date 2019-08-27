/** @format */
import React from 'react';
import { connect } from 'react-redux';
//store
import Menu from '../../common/menu';
import Sale from './sale/sale';
import List from './list/list';
import Shop from './indexseller/indexseller';
const menusort = ['首页', '特惠专场', '工厂直销'];

class Main extends React.Component{
    render(){
        return(
            <>
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
                <List oftenlist={this.props.oftenlists}/>
                <Shop  indexsellerlist={this.props.indexsellerlists}/>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        conlists: state.lists,
        oftenlists: state.oftenlists,
        indexsellerlists: state.indexsellerlists
    }
}
export default connect(mapStateToProps)(Main);
