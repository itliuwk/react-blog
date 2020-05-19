import Layout from '../components/Layout'
import BlogList from '../components/list'
import react, {Fragment} from 'react'
import {FormatDate} from '../utils/index'


const Home = props => {

    return (
        <Fragment>
            <Layout>
                {<BlogList lists={props.lists} total={props.total}/>}
            </Layout>
        </Fragment>
    )
};

Home.getInitialProps = async () => {
    const res = await fetch(`http://sxitw.cn:8000/api/blog/list?page=0&total=10&keyword=`);
    const show = await res.json();
    show.data.map(item => {
        item.url = 'https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&id=' + item.id;
        item.col = parseInt(Math.random() * 10);
        item.createtime = FormatDate(item.createtime);
        return item;
    });

    const countRes = await fetch(`http://sxitw.cn:8000/api/blog/list/count`);
    const count = await countRes.json();
    return {
        lists: show.data,
        total: count.data['count(id)'],
    };
};


export default Home

