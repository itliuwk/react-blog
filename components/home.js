/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-15' 0015
 * Time: 10:29:10
 *
 */
import React,{Component} from "react";
import '../assets/style/home.css'


function MainRight() {
    return (
        <div className='home'>
            <div className="personal">
                <h3>个人资料简介</h3>
                <p className="info">刘伟坤，90后前端开发人员，广东五华人，出厂27年有余，此博客拥有者，地地道道农村出生，已有小姐姐青睐。</p>
                <div className="contact">
                    <div className="weixin">
                        <i className="iconfont icon-weixin"></i>
                        <img src='/static/weixin.jpg' alt=""/>
                    </div>
                    <div className="qq">
                        <a target="_blank" href="http://wpa.qq.com/msgrd?V=3&uin=1834183435&Site=QQ&Menu=yes">
                            <i className="iconfont icon-icon_qq"></i></a>
                    </div>
                    <div className="github">
                        <a target="_blank" href="https://github.com/itliuwk">
                            <i className="iconfont icon-github"></i></a>
                    </div>
                    <div className="weibo">
                        <a target="_blank" href="https://weibo.com/u/2433275163">
                            <i className="iconfont icon-weibo"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainRight
