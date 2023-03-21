import { useState } from "react";
import axios from 'axios';

const BlogCard = (props)=>{

    const { blogs, urlEndPoint, setShouldRefresh } = props;
    const [title, setTitle] = useState(blogs.title);
    const [text, setText] = useState(blogs.text);
    const [author, setAuthor] = useState(blogs.author);
    const [categories, setCategories] = useState(blogs.categories);
    const [year, setYear] = useState(blogs.year);
    const [isEditing, setIsEditing] = useState(false);

    //Implement handlers

    //Handle Get All
//     const handleGetAllBlogs = ()=>{

//     axios.get(`${urlEndPoint}/sample_blogs/all`)
//     .then(function(response){
//         console.log(response);
//     },{
//         'Content-Type': 'application/json'
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// }

    //Handle delete
    const handleDeleteBlog = ()=>{
    axios.delete(`${urlEndPoint}/sample_blogs/delete-one/${blogs.id}`)
        .then(function(response){
            console.log(response);
        },{
            'Content-Type': 'application/json'
        })
    }

    //Handle update
    const handleUpateBlog = ()=>{
        setShouldRefresh(true);
        const req ={
            title: title,
            text: text,
            author: author,
            categories: categories,
            year: year
        }
        axios.put(`${urlEndPoint}/sample_blogs/update-one/${blogs.id}`, req)
        .then(function (response) {
            console.log(response);
        },{
            'Content-Type': 'application/json'
        })
        setShouldRefresh(false);
    }
    
    return(
        <div>
        {/* <handleGetAllBlogs></handleGetAllBlogs> */}
            {!isEditing && <h2>{blogs.title}</h2>}
            {isEditing && (
                <input
                type="text"
                value={title}
                onChange={(e) =>{
                    setTitle(e.target.value);
                }}
            />
            )}
            <p>ID: {blogs.id}</p>
            {!isEditing && <p>Text: {blogs.text}</p>}
            {isEditing && (
                    <>
                <textarea
                type="text"
                value={text}
                onChange={(e)=>{
                setText(e.target.value);
                }}
                />   
                    </>
            )}
            {!isEditing && <h2>{blogs.author}</h2>}
            {isEditing && (
                <input
                type="text"
                value={author}
                onChange={(e) =>{
                    setAuthor(e.target.value);
                }}
            />
            )}
            {!isEditing && <h2>{blogs.categories}</h2>}
            {isEditing && (
                <input
                type="text"
                value={categories}
                onChange={(e) =>{
                    setCategories(e.target.value);
                }}
            />
            )}
            {!isEditing && <h2>{blogs.year}</h2>}
            {isEditing && (
                <input
                type="number"
                value={year}
                onChange={(e) =>{
                    setYear(e.target.value);
                }}
            />
            )}
            <p>Creation Date: {blogs.creationDate.toString()}</p>
            <p>Last Modified: {blogs.lastModified.toString()}</p>

            <button
                onClick={()=>{
                    handleDeleteBlog();
                }}
                >
                    Delete Blog
                </button>
                    {!isEditing &&
                    <button
                        onClick={()=>{
                            setIsEditing(true);
                        }}
                    >
                        Edit Blog
                    </button>
                    }
                    {isEditing &&
                    <button
                        onClick={()=>{
                            setIsEditing(false);
                                handleUpateBlog()    
                        }}
                    >
                        Update Blog
                    </button>    
                        }
            </div>
    );
}

export default BlogCard;