import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {id}=useParams();
    const { data:blogs, isPending, error}= useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory();
    const [iisPending,setIisPending]=useState(false);
    
    const handleDelete=()=>{
        setIisPending(true);
    fetch('http://localhost:8000/blogs/'+ blogs.id,{
        method:'DELETE'
    }).then(()=>{
        history.push('/');
        setIisPending(false);
    })}
    return (
        <div className="blog-content">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && (
            <article>
                <h2>{blogs.title}</h2>
                <div>{blogs.body}</div>
                <p>-Written by {blogs.author}</p>
                <p id="p1">-on {blogs.date}</p>
                {!iisPending&&<center><button onClick={handleDelete}>Delete</button></center>}
                {iisPending&& <center><button disabled>Deleting..</button></center>}
            </article>)}
        </div>
    );
}
 
export default BlogDetails;