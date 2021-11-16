import React, { Component } from 'react';
import './Blog.css';
import BlogItemSmall from './BlogItemSmall/BlogItemSmall';
import BlogContent from './BlogContent/BlogContent';
import { getBlog } from '../../api/blog/blog';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import NavBar from '../NavBar/NavBar';

const Blog = ({ user }) => {
    let { path, url } = useRouteMatch();

    const [blogs, setBlogs] = React.useState([
        {
            title: '',
            author: '',
            date: '',
            content: '',
            picture: ''
        }
    ]);

    const [loading, setLoading] = React.useState(true)

    React.useEffect(async () => {
        let blogData = await getBlog();
        setBlogs(blogData);
        setLoading(false);
    }, []);
    
    return (
        <div>
            <Route path={path} exact>
                <NavBar page='Blog' user={user}></NavBar>
                {
                    loading? (
                        <Stack spacing={1}>
                            <div>
                                <div className="skeletonText">
                                    <Skeleton variant="rectangular" width={300} height={30} />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="rectangular" width={400} height={180} />
                                </div>
                                <div className="skeletonPic">
                                    <Skeleton variant="rectangular" width={350} height={280} />
                                </div>
                            </div>
                            <div>
                                <div className="skeletonText">
                                    <Skeleton variant="rectangular" width={300} height={30} />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="rectangular" width={400} height={180} />
                                </div>
                                <div className="skeletonPic">
                                    <Skeleton variant="rectangular" width={350} height={280} />
                                </div>
                            </div> 
                            <div>
                                <div className="skeletonText">
                                    <Skeleton variant="rectangular" width={300} height={30} />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="rectangular" width={400} height={180} />
                                </div>
                                <div className="skeletonPic">
                                    <Skeleton variant="rectangular" width={350} height={280} />
                                </div>
                            </div>   
                        </Stack>
                    ) :
                (
                <div className='blog_container'>
                    {blogs.map((blogItem, index) => (
                        <div className='blog_small_item_row'>
                            <BlogItemSmall blogItem={blogItem} />
                        </div>
                    ))}
                </div>)
                }
                
            </Route>

            <Switch>

                <Route path={`${path}/:id`} children={<BlogContent></BlogContent>} />

            </Switch>



        </div>


    )
};
export default Blog;