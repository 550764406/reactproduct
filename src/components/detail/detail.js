import React from 'react';
import Header from '../../common/header';
import Menu from '../../common/listmenu';
import Footer from '../../common/footer';
import '../../assets/css/detail.less'
import img from '../../assets/img/2.jpg';

import img0 from '../../assets/img/detai/0.jpg';
import img1 from '../../assets/img/detai/1.jpg';
import img2 from '../../assets/img/detai/2.jpg';
import img3 from '../../assets/img/detai/3.jpg';
import img4 from '../../assets/img/detai/4.jpg';
import { Row, Col, Input, Icon } from 'antd';


class Detail extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    onChange(value) {
        console.log('changed', value);
    }

    render(){
        return(
            <>
                <Header />
                <Menu />
                <div className="detailwarpper">
                    <div className="title">当前位置：酒水饮料 > 中外名酒 > 白酒> 飞天</div>
                    <div className="detailcon">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={10}>
                                <img src={img} width="100%" alt="" />
                            </Col>
                            <Col className="gutter-row" span={14}>
                                <div className="detailRight">
                                    <h1>五十三度飞天茅台</h1>
                                    <h2>小包装价<em>¥0.01</em>/瓶 <span>起订量：<i>1瓶</i></span></h2>
                                    <ul>
                                        <li>大包装价：<span>¥0.10/箱</span></li>
                                        <li>配送条件：<span>¥0.0起订；</span></li>
                                        <li className="line">配送范围：<span>达孜县,墨竹工卡县,市辖区,城关区,当雄县,尼木县,曲水县</span></li>
                                        <li>近期成交：<span>213瓶</span></li>
                                        <li>单位换算：<span>1箱=6瓶</span></li>
                                        <li>&nbsp;&nbsp;&nbsp;&nbsp;类型：<b>500ml酱香型</b></li>
                                        <li className="line end">数量/单位：<span><Input min={1} max={10} defaultValue={3} onChange={this.onChange} style={{width: 100}} /> 瓶</span>库存9786瓶</li>
                                        <li className="btns">
                                            <a href="/" className="btnBuy">立即购买</a>
                                            <a href="/" className="btnBuy1"><Icon type="menu-unfold" /> 加入进货单</a>
                                        </li>
                                        <li>退货保障：<span><Icon type="minus-circle" className="colRed" /> 不支持退换货</span></li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="detailShop">
                        <Row gutter={16}>
                            <Col className="gutter-row" span={6}>
                                <dl className="detailShop_title">
                                    <dt>———<span>实力商家</span> ———</dt>
                                    <dd>商    家：<span>藏客隆商贸有限公司</span></dd>
                                    <dd>代理品牌：<span>茅台</span></dd>
                                    <dd>优惠政策：<span>口味威卡威我可卡位了开文克伦威尔</span></dd>
                                    <dd className="btns">
                                        <a href="/" className="btn1">进入商铺</a>
                                        <a href="/" className="btn2">已收藏商铺</a>
                                    </dd>
                                </dl>
                                <div className="detailShop_con">
                                    <h2>该供货商其他商品</h2>
                                    <ul>
                                        <li><img src={img} alt="" width="150" /> </li>
                                        <li className="price">¥0.01<span>/瓶</span></li>
                                        <li>王府井特曲王府曲</li>
                                    </ul>
                                    <ul>
                                        <li><img src={img} alt="" width="150" /> </li>
                                        <li className="price">¥0.01<span>/瓶</span></li>
                                        <li>王府井特曲</li>
                                    </ul>
                                    <ul>
                                        <li><img src={img} alt="" width="150" /> </li>
                                        <li className="price">¥0.01<span>/瓶</span></li>
                                        <li>王府井特曲</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className="gutter-row" span={18}>
                                <div className="detailShop_des">
                                    <h2><span>商品描述</span></h2>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                商品名称：<span>飞天</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                品牌：<span>茅台</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                产地：<span>贵州</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                SPUID：<span>29</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                类型：<span>500ml酱香型</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                单位：<span>瓶</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row gutter={16}>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                建议零售价：<span>0.05</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                条形码：<span>6902952880294</span>
                                            </div>
                                        </Col>
                                        <Col className="gutter-row" span={8}>
                                            <div className="tit">
                                                保质期：<span>10 年</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="detailShop_des1">
                                        <img src={img0} alt="" width="100%" />
                                        <img src={img1} alt="" width="100%"/>
                                        <img src={img2} alt="" width="100%"/>
                                        <img src={img3} alt="" width="100%"/>
                                        <img src={img4} alt="" width="100%"/>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Detail;