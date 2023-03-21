import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const BlogsForm = (props)=>{
    const { setShouldRefresh, urlEndPoint } = props;
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [categories, setCategories] = useState("");

    //Instantiate navigator
    const navigate = useNavigate();

    const handleCreateBlog = async ()=>{
        //Refresh page
        setShouldRefresh(true)

        console.log(urlEndPoint)
        const req = {
            title: title,
            text: text,
            author: author,
            year: year,
            categories: categories
        }
            console.log(req);
        axios.post(`${urlEndPoint}/sample_blogs/create-one`, req)
        .then (function (response) {
            console.log(response);
        },
        {
            "Content-Type":"applications/x-www-form-urlencoded"
        });
        setShouldRefresh(false);
    }
    
    return (
                <div>
                    <h1>Create Blog Entry</h1>
                    <label>Title</label>
                    <input type="text" onChange={(e)=>{
                        setTitle(e.target.value)
                    }} />
                    <br/>
                    <label>Text</label>
                    <textarea type="text" onChange={(e)=>{
                        setText(e.target.value)
                    }}/>
                    <br/>
                    <label>Author</label>
                    <input type="text" onChange={(e)=>{
                        setAuthor(e.target.value)
                    }}/>
                    <br/>
                    <label>Year</label>
                    <input type="number" onChange={(e)=>{
                        setYear(e.target.value)
                    }}/>
                    <br/>
                    <label>Categories</label>
                    <input type="text" onChange={(e)=>{
                        setCategories(e.target.value)
                    }}/>
                    <br/>
                    <button onClick={()=>{
                        handleCreateBlog()
                        navigate("/")
                    }}>Create Blog</button>
                </div>
    )
}

export default BlogsForm