import React , {useState , useEffect} from "react"

export default function  QueryPagination()
{

  const [page , setPage] = useState(1);
  const [post , setPost] = useState([]);


  async function fetchPost(){
               let response = await fetch("https://jsonplaceholder.typicode.com/posts")
               let result = await response.json();
               setPost(result);
  }

  useEffect(()=>{
    fetchPost();
  },[page]);

  const indexOfLastPost = page;

 return (
  <div>
   <p>post (Page {page})</p>

  { post.map(posts =>(
             <p key={posts.id}> id : {posts.id} <span>title : {posts.title}</span></p>
       ))}

     <button onClick={() => setPage(prev => prev-1)} disabled={page == 1}>prev</button>
     <button onClick={() => setPage(prev => prev+1)}>next</button>
  </div>
  );
}