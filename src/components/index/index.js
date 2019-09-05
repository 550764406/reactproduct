/** @format */
import React from 'react';
import { connect } from 'react-redux';
//store
import Menu from '../../common/menu';
import Sale from './sale/sale';
import List from './list/list';
import Shop from './indexseller/indexseller';


class Main extends React.Component{
    render(){
        return(
            <>
            <Menu />
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
