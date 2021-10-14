import React, { Component } from 'react';
import './Blog.css';
import BlogItemSmall from './BlogItemSmall/BlogItemSmall';
import BlogContent from './BlogContent/BlogContent';
import { Route, Switch } from 'react-router';
import { useRouteMatch } from 'react-router';

const Blog = () => {
    let { path, url } = useRouteMatch();

    let blogArray = [
        {
            blogId: '0',
            title: 'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        },
        {
            blogId: '1',
            title: 'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        },
        {
            blogId: '2',
            title: 'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        },
        {
            blogId: '3',
            title: 'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        }
    ]

    return (
        <div>
            <Route path={path} exact>
                <div className='blog_container'>
                    {blogArray.map((blogItem, index) => (
                        <div className='blog_small_item_row'>
                            <BlogItemSmall blogItem={blogItem} />
                        </div>
                    ))}
                </div>
            </Route>

            <Switch>

                <Route path={`${path}/:id`} children={<BlogContent></BlogContent>} />

            </Switch>



        </div>


    )
};
export default Blog;