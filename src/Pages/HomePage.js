import { useState } from "react";
import BlogCard from "../Components/BlogCard";

//home page component 
const HomePage = (props) => {

    const {
        blogsList, 
        setToDoList, 
        urlEndPoint,
        setShouldRefresh, 
    } = props

    return (
        <div>
            <h1>Midterm Blogger</h1>
            {blogsList.map((item, index) => {
                return (<BlogCard 
                    blogs={item} 
                    setToDoList={setToDoList} 
                    urlEndPoint={urlEndPoint}
                    setShouldRefresh={setShouldRefresh}
                    key={index} /> 
                );
            })}
        </div>
    )
}

export default HomePage