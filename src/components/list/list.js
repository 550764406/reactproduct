import React from 'react';
import { Row, Col, Pagination } from 'antd';
import { connect } from 'react-redux';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Menu from '../../common/listmenu';
import '../../assets/css/list.less';
import img from '../../assets/img/2.jpg';
import store from '../../store/index';
import { getInitListData } from '../../store/actionCreators';
import { Link } from 'react-router-dom';

class List extends React.Component{
    constructor(props){
        super(props);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.state={
            data: [],
            pagination: {
                defaultPageSize: 6,
                total: 0,
                currentSize: 2
            },
            loading: false,
            tablist:[]
        }
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    componentDidMount (){

        this.setState({
            tablist: this.props.getInitListDataAction()
        })
        // this.setState = (state, callback) => {
        //     return;
        // };
    }
    getTableList = (page) => {
        if(!this.props.goodlists) return;
        const defaltSize = this.state.pagination.defaultPageSize;
        const listArr = this.props.goodlists.lists.goodlist; //当前数组所有值
        const listNewArr=[];
        // 遍历icon列表
        listArr.forEach((item,index) => {
            // 每8条为一页；例：0-7为第一页
            // currentPage为当前页码；
            // 0/6 1/6 2/6 3/6 4/6 5/6
            // 6/6 7/6 8/6 9/6 10/6 11/6
            // 12/6 13/6 14/6 15/6
            const currentPage =Math.floor(index/defaltSize)
            // 判断pages中当前页的存储数组是否已声明，未声明则声明当前页为数组格式；
            if(!listNewArr[currentPage]){
                listNewArr[currentPage]=[]
            }
            // 将当前icon信息放入对应的页码数组中；
            listNewArr[currentPage].push(item)
        })
        // 返回分页之后的icon集合；
        // console.log('pages=======>',listNewArr[page-1])
        return listNewArr[page-1];
    }

    onChange=(pageNumber) =>{
        this.getTableList(pageNumber);
        let data = Object.assign({}, this.state.pagination, {currentSize: pageNumber})
        this.setState({
            pagination: data
        })
    }

    itemRender=(current, type, originalElement)=> {
        if (type === 'prev') {
            return <b>上一页</b>;
        }
        if (type === 'next') {
            return <b>下一页</b>;
        }
        return originalElement;
    }

    render(){
        return(
            <>
                <Header />
                <Menu />
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
                            this.getTableList(this.state.pagination.currentSize)?this.getTableList(this.state.pagination.currentSize).map(item=>{
                                return <Col className="gutter-row" span={6} key={item.id}>
                                    <Link to={'/detail/'+ item.id}>
                                    <dl>
                                        <dt><img src={img} alt=""/></dt>
                                        <dd>{item.title}</dd>
                                        <dd>
                                            <span><b>+¥&nbsp;</b> {item.price}<i>近期成交:{item.sellnum}件</i></span>
                                        </dd>
                                        <dd>
                                            <em>{item.company}</em>
                                        </dd>
                                    </dl>
                                    </Link>
                                </Col>
                            }):null
                        }
                    </Row>
                    <div className="page">
                        <Pagination
                            itemRender={this.itemRender}
                            showQuickJumper
                            defaultPageSize={this.state.pagination.defaultPageSize}
                            onChange={this.onChange}
                            current = {this.state.pagination.currentSize}
                            total={this.props.goodlists?this.props.goodlists.lists.goodlist.length:0}  />
                        <span>共1页,{this.state.pagination.total}条记录,当前为第1页,每页{this.state.pagination.defaultPageSize}条</span>
                    </div>

                </div>
                <Footer/>
            </>

        )
    }
}

const mapStateToProps = (state)=>{
    return{
        goodlists: state.goodlist,
    }
}

const mapActionToProps = (dispatch)=>{
    return {
        getInitListDataAction() {
            const action = getInitListData();
            dispatch(action);
        },

    }
}
export default connect(mapStateToProps,mapActionToProps)(List);