import React, { Component } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const REACT_BACKEND = process.env.REACT_APP_ENDPOINT;

class UpdateBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      text: '',
      year: '',
      categories: []
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get(REACT_BACKEND+'/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          author: res.data.author,
          text: res.data.text,
          year: res.data.year,
          categories: res.data.categories
        })
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      author: this.state.author,
      text: this.state.text,
      year: this.state.year,
      categories: this.state.categories
    };

    axios
      .put(REACT_BACKEND+'/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-book/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


  render() {
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
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="text">Text</label>
              <input
                type='text'
                name='text'
                className='form-control'
                value={this.state.text}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="year">Year</label>
              <input
                type='date'
                name='year '
                className='form-control'
                value={this.state.year}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="categories">Categories</label>
              <input
                type='text'
                name='categories'
                className='form-control'
                value={this.state.categories}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateBlog;