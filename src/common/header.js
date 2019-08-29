import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Tabs, Icon, Input, Button } from 'antd';
import logo from '../assets/img/logo.png';

const { TabPane } = Tabs;
const Search = Input.Search;
const hotsearchList = ['矿泉水', '康师傅', '绿茶', '雪碧', '瓜子', '酒', '糖', '纸', '牛奶', '酱油', '薯片', '牙膏'];

class Header extends React.Component{
    render(){
        return(
            <>
            <div className="header">
                <Row>
                    <Col span={6}>
                        <div className="headerleft" align='left'>
                            欢迎您！
                            <span className='name'>ly0001</span>
                            <span className='exitMes'>|退出消息</span>
                        </div>
                    </Col>
                    <Col span={18}>
                        <div align='right' className="headerright">
                            我的云链 我的订单 收藏夹 关注云链 |西藏拉萨市服务站：<span>0319-89898989</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={6}>
                        <Link to="/"><img src={logo} alt='' className="logo" /></Link>
                    </Col>
                    <Col span={10}>
                        <Tabs defaultActiveKey='2' className="logomiddle" animated={false}>
                            <TabPane tab={<span>供应商</span>} key='1'>
                                <Search placeholder='请输入供应商' enterButton='Search' size='large' onSearch={(value) => console.log(value)} />
                            </TabPane>
                            <TabPane tab={<span>商品</span>} key='2'>
                                <Search placeholder='请输入商品' enterButton='Search' size='large' onSearch={(value) => console.log(value)} />
                            </TabPane>
                        </Tabs>
                        <div className="hotsearch">
                            热门搜索：
                            {hotsearchList.map((item, index) => (
                                <a key={index} href={item}>{item}</a>
                            ))}
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="loginbtn">
                            <Button>
                                <Icon type='shop' />
                                我常买
                            </Button>
                            <Button>
                                <Icon type='shopping-cart' />
                                我的进货单
                                <em className="badge">5</em>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
        )
    }
}

export default Header;