/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-15' 0015
 * Time: 14:30:30
 *
 */
import React from "react";
import Layout from '../../components/Layout'
import marked from 'marked';
import hljs from 'highlight.js';

const Detail = props => {
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
    });

    return (
        <Layout title={props.detail.title +' - 刘伟坤 - 个人博客'}>
            <div>
                {
                    <div className="content">
                        <div
                            id="content"
                            className="article-detail"
                            dangerouslySetInnerHTML={{
                                __html: props.detail.content ? marked(props.detail.content) : null,
                            }}
                        />
                        <style jsx>
                            {`
                            #content{

                                background:#fff;
                                padding:20px;
                                margin-bottom:50px;
                            }


                            `}
                        </style>
                    </div>
                }
            </div>
        </Layout>
    )
};


Detail.getInitialProps = async function (context) {
    const {id} = context.query;
    const res = await fetch(`http://sxitw.cn:8000/api/blog/detail?id=${id}`);
    const show = await res.json();
    return {
        detail: show.data || {content: '请检查是否路径有错误'},
        title: '详情'
    };
};

export default Detail;