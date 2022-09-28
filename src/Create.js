import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState(' ');
    const [author, setAuthor]=useState('');
    const [date, setDate] = useState('')
    const [isPending,setIsPending]=useState(false);

    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author,date};
        setIsPending(true);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('yup added');
            setIsPending(false);
            history.push('/');
        })
    }
    return (
        <div className="create">
            <div>Add a new Blog</div>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" 
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label >Blog Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label >Blog Author:</label>
                <input type="text"
                
                required 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    {/* <option value="Ritesh">Ritesh</option>
                    <option value="Vipin">Vipin</option> */}
                </input>
                <label>Blog Date:</label>
                <input type="text" 
                required
                value={date}
                onChange={(e)=> setDate(e.target.value)}
                placeholder="Date monthName year"></input>
                {!isPending &&<button>Add Blog</button>}
                {isPending &&<button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;