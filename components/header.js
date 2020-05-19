/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-15' 0015
 * Time: 10:29:10
 *
 */
import React, {Component} from "react";
// import {Button} from 'antd'
import Link from 'next/link';
import '../assets/style/header.css'

function Header() {
    return (
        <div className='header'>
            <div className='left'>
                <Link href='/'>
                    <a>
                        <img src='/static/logo.jpg' alt=""/>
                    </a>
                </Link>
            </div>
            <div className='center'>

            </div>
            <div className='right'>
                {/*<iframe frameBorder="no" border="0" marginWidth="0" marginHeight="0" width="298" height="52" src="//music.163.com/outchain/player?type=2&id=1445585327&auto=1&height=32"></iframe>*/}
            </div>
        </div>
    );
}

export default Header
