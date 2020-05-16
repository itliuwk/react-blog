/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-16' 0016
 * Time: 16:42:32
 *
 */

const { parse } = require('url');
const next = require('next');
const express = require('express');
const server = express();
const NODE_PORT = process.env.NODE_PORT;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
    server.get('*', (req, res) => {

        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        // 主页
        if (pathname === '/') {
            return app.render(req, res, '/', query);
        }
        // ... 其它页面
        app.render(req, res, '/404', query);
    })

    server.listen(NODE_PORT, () => console.log('Example app listening on port ' + NODE_PORT));
})