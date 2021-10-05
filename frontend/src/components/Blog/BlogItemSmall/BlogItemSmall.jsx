import React, {Component} from 'react';


const BlogItemSmall = (props) => {
    let id = props.blogItem.blogId;
    let title = props.blogItem.title;
    let author = props.blogItem.author;
    let date = props.blogItem.date;
    let content = props.blogItem.content;
    content = content.substring(0, 580) + '...';
    let imageUrl = props.blogItem.imageUrl;
    return (
        <div className='blog_small_item_row_item' id={id}>
            <div className='blog_small_item_left_col'>
                <div className='blog_small_item_title'>
                    {title}
                </div>
                <div className='blog_small_item_author'>
                    {author}
                </div>
                <div className='blog_small_item_date'>
                    {date}
                </div>
                <div className='blog_small_item_content'>
                    <span className='blog_small_item_content_text'>
                        {content}
                    </span>
                    <span className='blog_small_item_read_more'>
                        read more
                    </span>
                    </div>
            </div>
            <div className='blog_small_item_right_col'>
                <div className='blog_small_item_image'>
                    <img src={imageUrl}/>
                </div>
            </div>
        </div>
    )
};
export default BlogItemSmall;