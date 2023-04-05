import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const REACT_BACKEND = process.env.REACT_APP_URL_ENDPOINT;

const UpdateBlog =()=> {
const random = {
  id:'',
  title:'',
  author:'',
  text:'',
  year:'',
  categories:[]
}

  const [updateData, setUpdateData] = useState(random);
  const navigate = useNavigate ()
  let {id} = useParams()
  console.log(typeof id)
  useEffect (()=>{
    const fetchData = async ()=>{
      const response = await axios.get(REACT_BACKEND+'/blogs/get-one/'+id)
      setUpdateData(response.data.blogs)
    }
    fetchData()
  },[id])



  
  //   axios
  //     .get(REACT_BACKEND+'/'+this.props.match.params.id)
  //     .then(res => {
  //       this.setState({
  //         title: res.data.title,
  //         author: res.data.author,
  //         text: res.data.text,
  //         year: res.data.year,
  //         categories: res.data.categories
  //       })
  //     })
  //     .catch(err => {
  //       console.log("Error from UpdateBookInfo");
  //     })

  const handleOnChange = e => {
    const test = e.target.value
    const data = {...updateData,[e.target.name]:e.target.value}
    setUpdateData(data)
    console.log(data)
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const data = {
      title:updateData.title,
      author:updateData.author,
      text:updateData.text,
      year:updateData.year,
      categories:updateData.categories
    }
    axios
      .put(REACT_BACKEND+'/blogs/update-one/'+id, data, {headers:{
        "Content-Type": "application/json"
      }})
      .then(res => {
        console.log(res)
        navigate('/Blogs')
      })
      .catch(err => {
        console.log("Error in UpdateBlogInfo!");
      })
  };

    return (
      <div className="UpdateBlog">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Home
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Blog</h1>
              <p className="lead text-center">
                  Update Blog Info
              </p>
            </div>
          </div>
          <div className="col-md-8 m-auto">
          {updateData.id.length > 0 && (<form noValidate onSubmit={handleOnSubmit}>
          <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                name='title'
                className='form-control'
                value={updateData.title}
                onChange={handleOnChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                name='author'
                className='form-control'
                value={updateData.author}
                onChange={handleOnChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="text">Text</label>
              <input
                type='text'
                name='text'
                className='form-control'
                value={updateData.text}
                onChange={handleOnChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="year">Year</label>
              <input
                type='date'
                name='year '
                className='form-control'
                value={updateData.year}
                onChange={handleOnChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="categories">Categories</label>
              <input
                type='text'
                name='categories'
                className='form-control'
                value={updateData.categories}
                onChange={handleOnChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>)}
          </div>

        </div>
      </div>
    );
  }

export default UpdateBlog;