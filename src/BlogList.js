import React from 'react'

function BlogList(props) {

  return (
    <div className='blog-list'>
      <h2>{props.title}</h2>
      {props.blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{ blog.title }</h2>
          <p>written by { blog.author }</p>
      </div>
      ))}
    </div>
  )
}

export default BlogList; 
