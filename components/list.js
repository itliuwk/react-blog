/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-16' 0016
 * Time: 18:03:29
 *
 */

import React, {Component} from 'react';
import Link from 'next/link'
import '../assets/style/list.css'
import {Pagination} from 'antd';
import Router from 'next/router'


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isState: false,
            ...props,
        }
    }

    handleMouseOver(e) {
        let list = this.state.lists.map((item, idx) => {
            item.isState = false;
            if (e === idx) {
                item.isState = true;
            }
            return item;
        });
        this.setState({
            list
        });
    }

    handleMouseOut(e) {
        let list = this.state.lists.map((item, idx) => {
            item.isState = false;
            return item;
        });
        this.setState({
            list
        });
    }

    onChange(page) {
        Router.push('/page/' + page);
    }

    render() {
        const over = {
            transform: 'scale(1.05)',
            borderRadius: '15px',
            transitionDuration: '1s',
            boxShadow: '1px 1px 5px 5px rgba(17, 150, 196, 0.35)'
        };

        const out = {
            transform: 'scale(1)',
            borderRadius: '15px',
            transitionDuration: '1s',
        };


        return (
            <div className='list'>
                {this.state.lists.length && <ul>
                    {
                        this.state.lists.map((item, idx) => (
                            <li key={idx} className='item' style={item.isState ? over : out}>
                                {
                                    idx % 2 == 0 && <div onMouseOver={this.handleMouseOver.bind(this, idx)}
                                                         onMouseOut={this.handleMouseOut.bind(this)}>
                                        <Link href="/detail/[id]" as={`/detail/${item.id}`} key={idx}>
                                            <a>
                                                <img src={item.url}
                                                     alt=""/>
                                            </a>
                                        </Link>
                                        <div className='item-info'>
                                            <Link href="/detail/[id]" as={`/detail/${item.id}`} key={idx}>
                                                <a>
                                                    <p className='fw'>{item.title}</p>
                                                </a>
                                            </Link>

                                            <p>{item.subtitle}</p>
                                        </div>
                                        <div className='text-ellipsis'>
                                            <span className='text-muted'>
                                                <i className='iconfont icon-yonghu'></i> {item.author}
                                            </span>
                                            <span className='text-muted'>
                                                <i className='iconfont icon-shijian'></i> {item.createtime}
                                            </span>
                                            <span className='text-muted'>
                                                     <i className='iconfont icon-yuedu'></i> 阅读({item.count})
                                            </span>
                                        </div>
                                    </div>
                                }
                                {
                                    idx % 2 == 1 &&
                                    <div className='col5' onMouseOver={this.handleMouseOver.bind(this, idx)}
                                         onMouseOut={this.handleMouseOut.bind(this)}>

                                        <img src={item.url} alt=""/>

                                        <div>
                                            <div className='item-info'>
                                                <Link href="/detail/[id]" as={`/detail/${item.id}`} key={idx}>
                                                    <a>
                                                        <p className='fw'>{item.title}</p>
                                                    </a>
                                                </Link>

                                                <p>{item.subtitle}</p>
                                            </div>
                                            <div className='text-ellipsis'>
                                                <span className='text-muted'>
                                                    <i className='iconfont icon-yonghu'></i> {item.author}
                                                </span>
                                                <span className='text-muted'>
                                                     <i className='iconfont icon-shijian'></i> {item.createtime}
                                                </span>
                                                <span className='text-muted'>
                                                     <i className='iconfont icon-yuedu'></i> 阅读({item.count})
                                                </span>
                                            </div>
                                        </div>


                                    </div>
                                }

                            </li>


                        ))
                    }

                </ul>
                }

                {!this.state.lists.length && <div className='pageErr'>
                    {this.props.pageErr}
                    <style jsx>
                        {`
                            .pageErr{
                                text-align:center;
                                padding:20px;
                            }
                        `}
                    </style>
                </div>}


                <div className='page'>
                    <Pagination defaultCurrent={1} current={parseInt(this.props.currPage) || 1} total={this.props.total}
                                onChange={this.onChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Index;