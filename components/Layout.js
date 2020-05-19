import Head from 'next/head';
// import '../assets/style/antd.min.css'
import '../assets/style/reset.css'
import Header from '../components/header'
import Nav from '../components/nav'
import MainRight from '../components/home'
import react, {Fragment, useState} from 'react'
import Router from 'next/router'
import {Spin} from 'antd';


const Layout = props => {
    const [loading, setloading] = useState(false);


    Router.events.on('routeChangeStart', () => {
        setloading(true)
    });

    Router.events.off('routeChangeStart  ', () => {
        setloading(false)
    });

    return (
        <Fragment>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link href="http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css" rel="stylesheet"/>
                <link href="//at.alicdn.com/t/font_1826411_5xnjkpnxf1m.css" rel="stylesheet"/>
                <meta charSet='utf-8'/>
                <title>{props.title || '刘伟坤 - 个人博客'}</title>
            </Head>
            <Header/>
            <Nav/>
            <div className='main'>
                <div className='main-left'>
                    <div className='main-header'>
                        <h4>随心博客</h4>
                        <p>前端开发人员的个人博客，记录工作上，生活上的知识，并分享前端方面技术和一些生活趣事。</p>
                        <p>
                            前端页面使用 <strong>react</strong> + <strong>next.js</strong> + <strong>antd</strong>，创建此站的目的只是为了熟悉下<strong>react</strong>的基本语法，和 <strong>next.js </strong>
                            <strong> ssr </strong>的使用, 文章详情采用 <strong>markdown</strong> 渲染。
                        </p>
                        <p>
                            <a className='vue-a' href="http://sxitw.cn/" target="_blank">Vue版本个人网站</a>
                            <style jsx>
                                {`
                                    .vue-a{
                                        color:#188ae2!important;
                                    }
                                `}
                            </style>
                        </p>
                    </div>
                    <div className='content'>
                        <Spin spinning={loading}>
                            {props.children}
                        </Spin>
                    </div>
                </div>
                <div className='main-right'>
                    <MainRight></MainRight>
                </div>

            </div>


        </Fragment>
    )
};

export default Layout

