import React from 'react';
import { Row, Col, Pagination  } from 'antd';
import { connect } from 'react-redux';
import Header from '../../common/header';
import Footer from '../../common/footer';
import '../../assets/css/list.less';
import img from '../../assets/img/2.jpg';
import store from '../../store/index';
import { getInitListData } from '../../store/actionCreators';

class List extends React.Component{
    constructor(props){
        super(props);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }

    componentDidMount(){
        const action = getInitListData();
        store.dispatch(action);
    }

    onChange(pageNumber) {
        console.log('Page: ', pageNumber);
    }

    itemRender(current, type, originalElement) {
        if (type === 'prev') {
            return <a>上一页</a>;
        }
        if (type === 'next') {
            return <a>下一页</a>;
        }
        return originalElement;
    }

    render(){
        return(
            <>
                <Header />
                <div className="listwarpper">
                    <div className="title">当前位置：首页>饼干/糕点</div>
                    <div className="sort">
                        <span className="active">全部</span>
                        <span>酒水饮料</span>
                        <span>饼干/糕点</span>
                        <span>茶冲/乳品</span>
                    </div>
                    <div className="sort1">
                        <span className="active">综合</span>|
                        <span>新品</span>|
                        <span>销量</span>|
                        <span>价格</span>
                    </div>
                    <Row gutter={16}>
                        {
                            this.props.goodlists? this.props.goodlists.lists.goodlist.map(item=>{
                                return <Col className="gutter-row" span={6} key={item.id}>
                                    <dl>
                                        <dt><img src={img} alt=""/></dt>
                                        <dd>{item.title}</dd>
                                        <dd>
                                            <span><b>¥&nbsp;</b> {item.price}<i>近期成交:{item.sellnum}件</i></span>
                                        </dd>
                                        <dd>
                                            <em>{item.company}</em>
                                        </dd>
                                    </dl>
                                </Col>
                            }):null
                        }
                    </Row>
                    <div className="page">
                        <Pagination
                            itemRender={this.itemRender}
                            showQuickJumper
                            total={this.props.pageTotal}
                            onChange={this.onChange}
                            defaultPageSize={8}  />
                        <span>共1页,{this.props.pageTotal}条记录,当前为第1页,每页8条</span>
                    </div>

                </div>
                <Footer/>
            </>

        )
    }
}

const mapStateToProps = (state)=>{
    console.log('0000000000000000000',state)
    return{
        goodlists: state.goodlist,
        pageTotal: state.goodlist?state.goodlist.lists.total: 0
    }
}

const mapActionToProps = (dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps,mapActionToProps)(List);