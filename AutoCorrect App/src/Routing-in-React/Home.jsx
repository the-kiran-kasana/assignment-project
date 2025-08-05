import React, { useState, useEffect } from 'react';
import {Routes , Route , Link} from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [allPosts, setAllPosts] = useState([]); // original full list
  const [filtered, setFiltered] = useState([]); // what we show
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/posts')
      .then(res => {
        const posts = res.data.posts || [];
        setAllPosts(posts);
        setFiltered(posts);
      })
      .catch(() => {
        console.error('Fetch failed');
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);
    const lower = input.toLowerCase();
    setFiltered(
      allPosts.filter(p => p.title.toLowerCase().includes(lower))
    );
  };

  return (
    <>
      <br /><br />
      <h1>Welcome to Home page</h1>
      <br /><br /><br />
      <form onSubmit={handleSubmit}>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          placeholder="Search blogs..."
          style={{
            width: '50%',
            maxHeight: 300,
            objectFit: 'cover',
            borderRadius: 5,
            padding: 10,
          }}
        />
        <button type="submit">Search</button>
      </form>
      <br />


      <div>
        {filtered.length === 0 ? (
          <div>Loading / No results...</div>
        ) : (
          filtered.map(p => (
            <div key={p.id} style={{ padding: 30, border: '2px solid black' }}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <h3>views : {p.views}</h3>
              <Link to={`/Details/${p.id}`}>Click to view blog details</Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;
