import { Outlet, useParams, Link } from "react-router-dom";
import { useData } from "../hooks/useData"
import { useSearchParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


// save as pages/PostsPage.jsx
export default function PostsPage() {
return (
<div className="Posts">
<h1>Posts</h1>
<Outlet />
</div>
)
}

export function PostList() {
const [searchParams, setSearchParams] = useSearchParams(); // import this hook
const limit = searchParams.get('limit') ? searchParams.get('limit') : 5;
const postsData =
useData(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

// Added boolean so that if postsdata is null it wont break the code and still run as it has the option of loading now.
const handleChangeLimit = (e) => {
  setSearchParams({ limit: e.target.value });
};

const postList = postsData? postsData.map((post) => (
<Card sx={{ maxWidth: 345 }} key={post.id}
>
  <CardContent>
<Link to={"/posts/" + post.id}>
Post #{post.id}: {post.title}
</Link>
</CardContent>
</Card>
)) : <Typography variant="body2" color="text.secondary">Loading...</Typography>

return (
<>
<ul>{postList}</ul>
 <label htmlFor="post-limit">Posts: </label>
    <select
      id="post-limit"
      value={limit}
      onChange={handleChangeLimit}
    >
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  </>
);
}
//

export function Post() {
const { id } = useParams(); // custom hook to access dynamic params
const post =
useData('https://jsonplaceholder.typicode.com/posts/'+id);
return (
<div className="Post">
{post ? (
<>
<Card sx={{ maxWidth: 345 }}>
  <CardContent>
<Typography 
gutterBottom variant="h5" component="div">Post #{post.id}: {post.title}
</Typography>
<Typography variant="body2" color="text.secondary">{post.body}</Typography>
</CardContent>
  </Card>
  </>
) : ( "Loading ..." )}
</div>
)
}