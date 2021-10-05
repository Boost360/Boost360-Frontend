import React from "react";
import { useParams } from "react-router";




const BlogContent = () => {
    /**
     * @todo 通过api获取指定id的blog数据
     */
    const { id } = useParams();



    return (
        <div>
            Blog id = {id}
        </div>
    )

}


export default BlogContent;