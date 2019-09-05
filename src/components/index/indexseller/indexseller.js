import React from 'react';
import { Row, Col } from 'antd';
import img2 from '../../../assets/img/4.jpg'

export default (props)=>{
    return (
        <>
        <h3>推荐供货商
            <span>更多</span>
        </h3>
        <Row gutter={20}>
            {
                props.indexsellerlist ? props.indexsellerlist.lists.map(item=>{
                    return <Col className="gutter-row" span={8} key={item.id}>
                        <dl className="shopCon">
                            <dt>{item.name}</dt>
                            <dd>品牌：<span>{item.brand}</span></dd>
                            <dd>
                                <img src={img2} width="100%" alt="" />
                            </dd>
                            <dd className="text-center">
                                <a href={item.url}>进入商铺</a>
                            </dd>
                        </dl>
                    </Col>
                }): null
            }

        </Row>
        </>
    )
}

