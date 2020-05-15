import Head from 'next/head';

export default (props) => (
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <meta charSet='utf-8'/>
        <title>{props.title || '首页'}</title>
    </Head>
);