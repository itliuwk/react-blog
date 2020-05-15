/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-15' 0015
 * Time: 14:14:51
 *
 */

import React from "react";
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href="/detail/[id]" as={`/detail/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <div>
            <ul>
                <PostLink id="hello-nextjs"/>
                <PostLink id="learn-nextjs"/>
                <PostLink id="deploy-nextjs"/>
            </ul>
        </div>
    );
}