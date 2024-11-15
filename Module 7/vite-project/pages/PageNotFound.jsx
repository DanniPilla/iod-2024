import { Link, useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate();
return (
<div className="PageNotFound">
<h1>Page Not Found</h1>
<p>What were you looking for?
Maybe going back <Link to="/">home</Link>
will help you find it.</p>
<button onClick={() => navigate(-1)}> Back </button>
<a href=""></a> 
</div>
)
}

export default PageNotFound;