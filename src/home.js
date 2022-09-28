
import Bloglist from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const{data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs')
    //  const [count,setcount]=useState(0);
    //  const [calculation,setcalculation]=useState(0);
     
    // const handleClick=(id)=>{
    //     const newBlogs=blogs.filter(blog=> blog.id !== id);
    //     setBlogs(newBlogs);
    //     console.log('done');
    // }

    
    return (
        <div className="home">
            {error && <center><div>{error}</div></center>}
            {isPending && <center><div >Loading....</div></center>}
            {blogs && <Bloglist blogs={blogs} title="Blogs Collection!" />}
            {/* <p>Count: {count}</p>
            <button onClick={()=>setcount((c) => c + 1)}>+</button>
            <button onClick={()=>{if(count>0){setcount((c) => c - 1)}}}>-</button>
            <p>Calculation:{calculation}</p> */}
            {/* <Bloglist blogs={blogs.filter((blog)=>blog.au==='Ritesh')} title="Ritesh's Collection" handleClick={handleClick}/>
            <Bloglist blogs={blogs.filter((blog)=>blog.au==='Vipin')} title="Vipins's Collection" handleClick={handleClick}/> */}
        </div>
    );
}
export default Home;