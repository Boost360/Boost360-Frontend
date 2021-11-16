import React from "react";
import { useParams } from "react-router";
import { getTheBlog } from '../../../api/blog/blog';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import NavBar from "../../NavBar/NavBar";



const BlogContent = ({ user, props }) => {
    const { id } = useParams();
    
    const [blog, setBlog] = React.useState([
        {
            title: '',
            author: '',
            date: '',
            content: '',
            picture: ''
        }
    ]);

    const [BlogTitle, setTitle] = React.useState("Blog Detail")

    const [loading, setLoading] = React.useState(true)

    React.useEffect(async () => {
        let blogData = await getTheBlog(id);
        setBlog(blogData);
        setTitle(blogData.title);
        console.log(blogData.title);
        setLoading(false);
    }, []);

    return (
        <div>
            <NavBar page={BlogTitle} user={user}></NavBar>
            {loading ?
            (<div>
                <Skeleton variant="rectangular" height={500} />
                <div className="loadingBody">
                    <div className="loadingInfo"><Skeleton variant="rectangular" width={300} height={30} /></div>
                    <div className="loadingInfo"><Skeleton variant="rectangular" width={240} height={30} /></div>
                    <div className="loadingInfo"><Skeleton variant="rectangular" width={260} height={30} /></div>
                    <div className="loadingInfo"><Skeleton variant="rectangular" width={860} height={500} /></div>
                </div>
            </div>
                ):
            (<div className=''>
                <div className='blog_content_image_banner'>
                    <img src={blog.picture}/>
                </div>
                <div className='blog_content_main_container'>
                    <div className='blog_content_title'>
                        {blog.title}
                    </div>
                    <div className='blog_content_author'>
                        {blog.author}
                    </div>
                    <div className='blog_content_date'>
                        {blog.date.substring(0, 10)}
                    </div>
                    <text className='blog_content_content'>
                        {blog.content}
                    </text>
                    <div className='blog_content_share'>
                        share
                    </div>
                </div>
            </div>)}

        </div>
    )

}


export default BlogContent;