import React from 'react';
import { Row, Col } from 'antd';
import '../assets/css/footer.less';

export default class Footer extends React.Component{
    render(){
        return (
            <>
            <div className="shopFooter">
                <div className="shopFooter_top">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <em className="icon1"></em><span>品类齐全，便利生活</span>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <em className="icon2"></em><span>随时随地，急速配送</span>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <em className="icon3"></em><span>正品保障，智慧零售</span>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <em className="icon4"></em><span>货比三家，天天低价</span>
                        </Col>
                    </Row>

                </div>
                <div className="shopFooter_bottom">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={9}>
                            <div className="bottomLeft">
                                <dl>
                                    <dt>购物指南</dt>
                                    <dd><a href="/">购物流程</a></dd>
                                    <dd><a href="/">常见问题</a></dd>
                                    <dd><a href="/">订单查询</a></dd>
                                </dl>
                                <dl className="middle">
                                    <dt>支付流程</dt>
                                    <dd><a href="/">微信支付</a></dd>
                                    <dd><a href="/">支付宝支付</a></dd>
                                    <dd><a href="/">信用卡支付</a></dd>
                                    <dd><a href="/">货到付款</a></dd>
                                </dl>
                                <dl>
                                    <dt>服务保障</dt>
                                    <dd><a href="/">正品保障</a></dd>
                                    <dd><a href="/">送货入户</a></dd>
                                    <dd><a href="/">优质售后</a></dd>
                                    <dd><a href="/">库存保障</a></dd>
                                </dl>
                            </div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <dl className="bottomMiddle">
                                <dd>关注云链</dd>
                            </dl>
                        </Col>
                        <Col className="gutter-row" span={9}>
                            <dl className="bottomRight">
                                <dt>联系客服</dt>
                                <dd>在线客服：工作日9:00-21:00   非工作日9:00-21:00</dd>
                                <dd>电话：010-65817999</dd>
                                <dd>公司介绍：https://www.zhongyanyunlian.com/</dd>
                            </dl>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="copyright">北京中烟云链数据科技有限公司  |  京ICP备18027056号  |  版权所有  中烟云链</div>
            </>
        )
    }
}