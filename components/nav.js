/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-15' 0015
 * Time: 10:29:10
 *
 */
import React, {Component, useState} from "react";
import {Button, Avatar} from 'antd'
import {UserOutlined} from '@ant-design/icons';
import Link from 'next/link';
import '../assets/style/nav.css'


function Nav() {
    const [list, setlist] = useState([
        {
            title: '首页',
            icon: 'icon-shouye',
            link: '/',
        },
        {
            title: '工具',
            icon: 'icon-gongju',
            link: 'http://sxitw.cn/tools',
            target: '_blank'
        },
        {
            title: '微语',
            icon: 'icon-aixin',
            link: 'http://sxitw.cn/whisper',
            target: '_blank'
        },
        {
            title: '关于',
            icon: 'icon-guanyu',
            link: 'http://sxitw.cn/about',
            target: '_blank'
        }
    ]);
    return (
        <div className='nav'>
            {/*     <Link href='/list'>
                <a>
                    <Button type='primary'>跳转list</Button>
                </a>
            </Link>*/}
            <div className='top'>
                <div>
                    <Avatar size={100} src='../static/favicon.png'/>
                    <p className='fw mt10'>刘伟坤</p>
                </div>
            </div>
            <div className='center mt10'>
                <div className='items'>
                    <p className='pl10 sub-text'>导航</p>
                    {
                        list.map((item, idx) => {
                            if (item.target) {
                                return (
                                    <a href={item.link} key={idx} target={item.target}>
                                        <div key={idx} className='item'>
                                            <i className={`iconfont ${item.icon}`}></i>
                                            <span> {item.title}</span>
                                        </div>
                                    </a>
                                );
                            }
                            return (
                                <Link href={item.link} key={idx}>
                                    <a key={idx} target={item.target}>
                                        <div key={idx} className='item'>
                                            <i className={`iconfont ${item.icon}`}></i>
                                            <span> {item.title}</span>
                                        </div>
                                    </a>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
            <div className='bottom'>
                <div>
                    <a href="http://sxitw.cn/admin" target='_blank'>
                        <p><i className={`iconfont icon-guanli`}></i></p>
                        管理
                    </a>
                </div>
                {/*<div>*/}
                {/*<p><i className={`iconfont icon-rss`}></i></p>文章*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*<p><i className={`iconfont icon-pinglun`}></i></p>*/}
                {/*评论*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Nav
