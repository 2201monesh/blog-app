import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

function Home() {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setISPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok){
          throw Error("Could not fetch the data rn");
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data)
        setISPending(false)
        setError(null)
      })
      .catch(err => {
        setISPending(false);
        setError(err.message);
      })
    }, []);

  return (
    <div className='Home'>
      { error && <div>{ error } </div>}
      {isPending && <div>Loading...</div>}
      { blogs && <BlogList blogs={blogs} title="All blogs!" />}
    </div>
  )
}

export default Home;
