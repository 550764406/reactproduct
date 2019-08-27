/** @format */
import React from 'react';
import {Row, Col, Tabs} from 'antd';
import img from '../../../assets/img/1.jpg'
const {TabPane} = Tabs;

function mytab(e) {
}

export default class sale extends React.Component{
    componentWillMount(){
        console.log('sale------willMount-------1111111111111111111111',this.props)
    }
    componentDidMount(){
        console.log('sale------Mount-------222222222222222222',this.props)
    }

    componentWillReceiveProps(){
        console.log('salw------ReceiveProps-------33333333333333333333333333',this.props)
    }
    render(){
        const props = this.props;
        {
            console.log('sale===========render')
        }
        return (
            <div>
                <h1>
                    云链促销<em>热销爆款</em>
                    <span>更多</span>
                </h1>
                <Row>
                    {
                        props.mylist ? props.mylist.lists.list.map((item) => {
                            return <Col span={6} key={item.id}>
                                <dl>
                                    <dt>
                                        <img src={img} alt=""/>
                                    </dt>
                                    <dd>{item.title}</dd>
                                    <dd>
                                    <span>
                                    <b>¥&nbsp;</b> {item.price}
                                    </span>
                                    </dd>
                                    <dd>
                                        <a href={item.company}>{item.company}</a>
                                    </dd>
                                </dl>
                            </Col>
                        }) : null
                    }
                </Row>

                <Tabs className="mart20 salemain">
                    <TabPane tab='经常购买' key='1'>
                        <Row>
                            {
                                props.oftenlist &&
                                props.oftenlist.lists.list.map((item) => {
                                    return <Col span={6} key={item.id}>
                                        <dl>
                                            <dt>
                                                <img src={img} alt=""/>
                                            </dt>
                                            <dd>{item.title}</dd>
                                            <dd>
                                        <span>
                                          <b>¥&nbsp;</b> {item.price}
                                        </span>
                                            </dd>
                                            <dd>
                                                <a href={item.company}>{item.company}</a>
                                            </dd>
                                        </dl>
                                    </Col>
                                })
                            }
                        </Row>
                    </TabPane>
                    <TabPane tab='往来供货商' key='2'>
                        <Row>
                            <Col span={6}>
                                <dl>
                                    <dt>
                                        <img src={img} alt=""/>
                                    </dt>
                                    <dd>五十三度飞天茅台 500ml酱香型1111</dd>
                                    <dd>
                                <span>
                                  <b>¥&nbsp;</b>0.01
                                </span>
                                    </dd>
                                    <dd>
                                        <a href='/'>藏客隆商贸有限公司</a>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={6}>
                                <dl>
                                    <dt>
                                        <img src={img} alt=""/>
                                    </dt>
                                    <dd>五十三度飞天茅台 500ml酱香型</dd>
                                    <dd>
                                <span>
                                  <b>¥&nbsp;</b>0.01
                                </span>
                                    </dd>
                                    <dd>
                                        <a href='/'>藏客隆商贸有限公司</a>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={6}>
                                <dl>
                                    <dt>
                                        <img src={img} alt=""/>
                                    </dt>
                                    <dd>五十三度飞天茅台 500ml酱香型</dd>
                                    <dd>
                                <span>
                                  <b>¥&nbsp;</b>0.01
                                </span>
                                    </dd>
                                    <dd>
                                        <a href='/'>藏客隆商贸有限公司</a>
                                    </dd>
                                </dl>
                            </Col>
                            <Col span={6}>
                                <dl>
                                    <dt>
                                        <img src={img} alt=""/>
                                    </dt>
                                    <dd>五十三度飞天茅台 500ml酱香型</dd>
                                    <dd>
                                <span>
                                  <b>¥&nbsp;</b>0.01
                                </span>
                                    </dd>
                                    <dd>
                                        <a href='/'>藏客隆商贸有限公司</a>
                                    </dd>
                                </dl>
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>

                <Tabs defaultActiveKey='1' tabBarExtraContent={<span>更多</span>} onTabClick={(e) => mytab(e)}>
                    <TabPane tab='Tab 1' key='1'>
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab='Tab 2' key='2'>
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
        );
    }

}