/** @format */
import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Tabs} from 'antd';
import img from '../../../assets/img/2.jpg'
import img1 from '../../../assets/img/3.jpg'
const {TabPane} = Tabs;

export default (props) => {
    return (
        <div>
            <h1>
                云链促销 <em>热销爆款</em>
                <span><Link to="/list">更多</Link></span>
            </h1>
            <Row>
                {
                    props.mylist ? props.mylist.lists.list.map((item) => {
                        return <Col span={6} key={item.id}>
                            <Link to={'/detail/'+ item.id}>
                                <dl>
                                    <dt>
                                        <img src={img1} alt=""/>
                                    </dt>
                                    <dd>{item.title}</dd>
                                    <dd>
                                            <span>
                                            <b>¥&nbsp;</b> {item.price}
                                            </span>
                                    </dd>
                                    <dd>
                                        <em>{item.company}</em>
                                    </dd>
                                </dl></Link>
                        </Col>
                    }) : null
                }
            </Row>

            <Tabs className="salemain" type="card">
                <TabPane tab='经常购买' key='1'>
                    <Row>
                        {
                            props.oftenlist &&
                            props.oftenlist.lists.list.map((item) => {
                                return <Col span={6} key={item.id}>
                                    <Link to={'/detail/'+ item.id}>
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
                                                <em>{item.company}</em>
                                            </dd>
                                        </dl>
                                    </Link>
                                </Col>
                            })
                        }
                    </Row>
                </TabPane>
                <TabPane tab='往来供货商' key='2'>
                    <Row>
                        <Col span={6}>
                            <a href='/'><dl>
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
                                    藏客隆商贸有限公司
                                </dd>
                            </dl></a>
                        </Col>
                        <Col span={6}>
                            <a href='/'><dl>
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
                                    藏客隆商贸有限公司
                                </dd>
                            </dl></a>
                        </Col>
                        <Col span={6}>
                            <a href='/'><dl>
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
                                    藏客隆商贸有限公司
                                </dd>
                            </dl></a>
                        </Col>
                        <Col span={6}>
                            <a href='/'><dl>
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
                                    藏客隆商贸有限公司
                                </dd>
                            </dl></a>
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    );
}
