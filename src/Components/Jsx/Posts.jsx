import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {

  constructor() {
    super();
    this.state = {
    posts: [],
    updates: [],
    userId: '',
    title: '',
    body: '',
  }
}

componentDidMount() {
  axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/posts',
  }).then(res => {
    this.setState({
      posts: res.data
    })
  })
}

handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

   handleSubmit = (e) => {
    e.preventDefault();
     console.log(this.data)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(res => {
          console.log(res.data)
          this.setState({
            updates: [
              {
                userId: res.data.userId,
                title: res.data.title,
                body: res.data.body,
              }, 
              ...this.state.updates
            ],
            userId: '',
            title: '',
            body: '',
          })
        })
  }

  render(){
    const { userId, title, body, posts, updates } = this.state
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>UserId:</th>
              <th>Title:</th>
              <th>Body:</th>
            </tr>
          </thead>
          <tbody>
          {posts.map(post => <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>)}
            {updates.map((update, index) => <tr key={index} >
                <td>{update.userId}</td>
                <td>{update.title}</td>
                <td>{update.body}</td>
              </tr> )}
          </tbody>
        </table>
        <div className="Input">
        <form onSubmit={this.handleSubmit} className="Input-form" >
          <div className="Input-fileds" >
            <label htmlFor="userId" className="Input-label">userId</label>
            <input type="text" 
            className="Input-field"
            name="userId" 
            value= { userId } 
            onChange= { this.handleChange } />
          </div>
          <div className="Input-fileds">
            <label htmlFor="title" className="Input-label">title</label>
            <input type="text" 
            className="Input-field"
            name="title" 
            value= { title } 
            onChange= { this.handleChange } />
          </div>
          <div className="Input-fileds">
            <label htmlFor="body" className="Input-label" >body</label>
            <input type="text" 
            className="Input-field"
            name="body" 
            value= { body } 
            onChange= { this.handleChange } />
          </div>
          <div>
            <button className="Input-Btn" type="submit">Submit</button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

export default Posts;

