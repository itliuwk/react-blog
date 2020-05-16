import Head from 'next/head';
import 'antd/dist/antd.css'
import '../assets/style/reset.css'
import Header from '../components/header'
import Nav from '../components/nav'
import MainRight from '../components/home'
import react, {Fragment} from 'react'

export default (props) => (
    <Fragment>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1'/>
            <meta charSet='utf-8'/>
            <title>{props.title || '首页'}</title>
        </Head>
        <Header/>
        <Nav/>
        <div className='main'>
            <div className='main-left'>
                <div className='main-header'>
                    <h4>随心</h4>
                    <p>入我相思门，知我相思苦。</p>
                </div>
                <div className='content'>
                    {props.children}
                </div>
            </div>
            <div className='main-right'>
                <MainRight></MainRight>
            </div>

        </div>

    </Fragment>

);