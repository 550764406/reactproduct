/** @format */
import React from 'react';
import {Menu, Icon} from 'antd';

const {SubMenu} = Menu;
const menulists = [
    {
        id: '1',
        title: '饼干/糕点',
        type: 'setting',
        list: [
            {
                id: '11',
                title: '饼干/糕点1',
                list: [
                    {
                        id: '111',
                        title: '饼干'
                    },
                    {
                        id: '112',
                        title: '威化'
                    },
                    {
                        id: '113',
                        title: '曲奇苏打'
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        title: '酒水饮料',
        type: 'trophy',
        list: [
            {
                id: '21',
                title: '饼干/糕点',
                list: [
                    {
                        id: '121',
                        title: '饼干'
                    },
                    {
                        id: '122',
                        title: '威化'
                    },
                    {
                        id: '123',
                        title: '曲奇苏打'
                    }
                ]
            }
        ]
    },
    {
        id: '3',
        title: '茶冲乳品',
        type: 'coffee',
        list: [
            {
                id: '31',
                title: '牛奶',
                list: [
                    {
                        id: '121',
                        title: '饼干'
                    },
                    {
                        id: '122',
                        title: '威化'
                    },
                    {
                        id: '123',
                        title: '曲奇苏打'
                    }
                ]
            },
            {
                id: '32',
                title: '咖啡',
                list: [
                    {
                        id: '121',
                        title: '饼干'
                    },
                    {
                        id: '122',
                        title: '威化'
                    },
                    {
                        id: '123',
                        title: '曲奇苏打'
                    }
                ]
            },
            {
                id: '33',
                title: '营养保健',
                list: [
                    {
                        id: '121',
                        title: '蛋白质'
                    },
                    {
                        id: '122',
                        title: '氨基酸'
                    },
                    {
                        id: '123',
                        title: '维生素钙'
                    }
                ]
            }
        ]
    }
];

export default () => (
    <div>
        <Menu style={{width: 200}} mode='vertical'>
            {menulists.map((item, index) => (
                <SubMenu
                    key={index}
                    title={
                        <span>
                          <Icon type={item.type}/>
                          <span>{item.title}</span>
                        </span>
                    }
                >
                    {item.list.map((item1, index1) => (
                        <Menu.Item key={index1}>
                            <em className="menuitemsort">{item1.title}</em>
                            {item1.list.map((item2, index2) => (
                                <span key={index2} className="menuitemsortlist">
                                  <a href={item2.title}>{item2.title}</a>
                                </span>
                            ))}
                        </Menu.Item>
                    ))}
                </SubMenu>
            ))}
        </Menu>
    </div>
);
