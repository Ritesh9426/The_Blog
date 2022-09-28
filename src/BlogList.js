import { Link } from "react-router-dom";
import { useState } from "react";
const Bloglist = ({blogs,title}) => {
    // const blogs=props.blog;
    // const title=props.title;
    const[searchterm, setsearchterm]=useState("");
    return (
        <div className="blog-list">
            <div className="blog-header">
            <h1>{title}
            </h1>
            <input type="text" placeholder="search...."
            onChange={(err)=>{
                setsearchterm(err.target.value);
            }}/>
            </div>
            {blogs.filter((val)=>
                    {if(searchterm === ""){
                        return val
                    }else if(val.title.toLowerCase().includes(searchterm.toLowerCase())){
                        return val
                    }
                }).map((blog)=> {
                    return (
                <div className="Blog-print" key={blog.id}>
                    <Link to ={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written  by {blog.author}</p>
                    </Link>
                    
                </div>
                )})}
        </div>
    );
}
export default Bloglist;