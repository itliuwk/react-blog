/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-15' 0015
 * Time: 10:29:10
 *
 */
import React,{Component} from "react";
import {Button} from 'antd'
import Link from 'next/link';
import '../assets/style/nav.css'


function Nav() {
    return (
        <div className='nav'>
            <Link href='/list'>
                <a>
                    <Button type='primary'>跳转list</Button>
                </a>
            </Link>
        </div>
    );
}

export default Nav
