import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

function Home() {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setISPending] = useState(true);

    useEffect(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data)
        setISPending(false)
      })
    }, []);

  return (
    <div className='Home'>
      {isPending && <div>Loading...</div>}
      { blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  )
}

export default Home;
