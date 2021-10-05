import React, {Component} from 'react';
import './Blog.css';
import BlogItemSmall from './BlogItemSmall/BlogItemSmall';

const Blog = () => {

    let blogArray = [
        {
            blogId: '0',
            title:'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        },
        {
            blogId: '1',
            title:'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        },
        {
            blogId: '2',
            title:'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        },
        {
            blogId: '3',
            title:'Title',
            author: 'Author',
            date: '01/09/2021',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            imageUrl: 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg'
        }
    ]

    return (
        <div className='blog_container'>
            {blogArray.map((blogItem, index) => (
                <div className='blog_small_item_row'>
                    <BlogItemSmall blogItem={blogItem}/>
                </div>
            ))}
        </div>
    )
};
export default Blog;