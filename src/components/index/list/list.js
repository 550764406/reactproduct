import React from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'antd';
import img from '../../../assets/img/1.jpg'

export default class List extends React.Component{
    render(){
        const props = this.props;
        return(
            <>
                <h2>
                    酒水饮料<b className="blue">酒水</b>
                    <span><Link to="/list">更多</Link></span>
                </h2>
            <div className="salemain">
                <Row>
                    {
                        props.oftenlist ? props.oftenlist.lists1.list1.map((item) => {
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
                        }) : null
                    }
                </Row>
            </div>
            </>
        )
    }
}