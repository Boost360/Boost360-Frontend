import React from "react";
import { useParams } from "react-router";




const BlogContent = () => {
    /**
     * @todo 通过api获取指定id的blog数据
     */
    const { id } = useParams();
    let image_url = 'http://cloverville.co.nz/wp-content/uploads/2021/10/background7-min-min.jpg';
    let title = 'Title';
    let author = 'Author';
    let date = '01/10/2021';
    let content = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'


    return (
        <div className=''>
            <div className='blog_content_image_banner'>
                <img src={image_url}/>
            </div>
            <div className='blog_content_main_container'>
                <div className='blog_content_title'>
                    {title}
                </div>
                <div className='blog_content_author'>
                    {author}
                </div>
                <div className='blog_content_date'>
                    {date}
                </div>
                <div className='blog_content_content'>
                    {content}
                </div>
                <div className='blog_content_share'>
                    share
                </div>
            </div>
        </div>
    )

}


export default BlogContent;