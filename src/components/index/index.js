/** @format */
import React from 'react';
//store
import Menu from '../../common/menu';
import Sale from './sale/sale';
const menusort = ['首页', '特惠专场', '工厂直销'];

class Index extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps){
        this.setState(nextProps);
    }

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
                {
                    console.log('5555=====>',this.props)
                }
                <Sale {...this.props.mylist.lists} />
            </div>
            </>
        )
    }
}


export default Index;
