import Layout from '../../components/Layout'
import List from '../../components/list'
import {FormatDate} from "../../utils";

const Page = props => {
    return (
        <Layout title={props.title}>
            <List lists={props.lists} currPage={props.currPage} total={props.total} pageErr={props.pageErr}></List>
        </Layout>
    )
};

Page.getInitialProps = async (context) => {
    const {id} = context.query;
    const res = await fetch(`http://sxitw.cn:8000/api/blog/list?page=${(id - 1) * 10}&total=10&keyword=`);
    const show = await res.json();
    show.data.map(item => {
        item.url = 'https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302&id=' + item.id;
        item.col = parseInt(Math.random() * 10);
        item.createtime = FormatDate(item.createtime);
        return item;
    });
    const countRes = await fetch(`http://sxitw.cn:8000/api/blog/list/count`);
    const count = await countRes.json();

    let pageErr = '';
    if (!show.data.length) {
        pageErr = '页码错误，没有更多数据!!!'
    }
    return {
        lists: show.data,
        currPage: id,
        title: `第${id}页 - 刘伟坤 - 个人博客`,
        pageErr,
        total: count.data['count(id)'],
    };
};

export default Page;