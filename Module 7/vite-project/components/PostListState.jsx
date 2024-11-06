
import { useEffect, useState} from "react" // continued on next slide
import axios from 'axios' // first do 'npm install axios' - alternative to fetch

export default function PostListState() {
const [loading, setLoading]= useState(true)// true when loading and no data in posts
const [posts, setPosts] = useState([]) // empty until data is fetched
const [error, setError] = useState('') // empty unless there was an error

useEffect(() => {
axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5') // modify this URL to test the error case
.then(response => {
// object passed to dispatch holds all data needed for updating state: both type of update and associated data
setLoading(false);
setPosts(response.data);
setError("") // dispatch calls reducer function and triggers re-render
})
.catch(error => {
setLoading(false);
setPosts([]);
setError(error.message)
})
}, []);

// returned JSX uses the 3 things stored in postsResult state object to conditionally render data or an error message
return (
<div className="PostList componentBox">

{loading ? (<div>Loading posts...</div> 
): (
posts.map((post) => ( 
<div className="post" key={post.id}><h3>Post #{post.id}: {post.title}</h3><p>{post.body}</p></div>
))
)}
<div className="error">{error}</div>
</div>
)
}
// reducer function for axios fetch response
// called from dispatch when state is updated, lets us handle different actions
// return object should match same structure as initial state passed to useReducer
