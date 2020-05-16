/**
 * Created with Cocos2d-x3.0 jsb.
 * User: liuwk
 * Date: 2020-05-16' 0016
 * Time: 18:03:29
 *
 */


const BlogList = props => {
    return (
        <div>
            <ul>
                {
                    props.lists.map((item,idx)=>{
                        <li key={idx}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    )
};



export default BlogList;