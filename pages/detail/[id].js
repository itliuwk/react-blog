/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-15' 0015
 * Time: 14:30:30
 *
 */
import {useRouter} from 'next/router'
import React from "react";
import Layout from '../../components/Layout'

const Detail = props => {
    const router = useRouter();
    return (
        <Layout title={props.title}>
            <ul>
                {
                    props.list.map((item, idx) => (
                        (
                            <li key={idx}>{item.label}</li>
                        )
                    ))
                }
            </ul>
        </Layout>
    )
};


Detail.getInitialProps = async function (context) {
    const {id} = context.query;
    const res = await fetch(`http://sxitw.cn:8000/api/classify/length`);
    const show = await res.json();
    return {
        list: show.data,
        title:'详情'
    };
};

export default Detail;