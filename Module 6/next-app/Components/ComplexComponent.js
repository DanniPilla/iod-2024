export function ComplexComment(props) { // complex component which displays different elements of a comment
    return (
    <div className="Comment componentBox">
    <div className="UserInfo"> {/* the user info is one aspect of the comment */}
    <img className="Avatar" src={props.author.avatarUrl} alt={props.author.name} />
    <div className="UserInfo-name">{props.author.name}</div>
    </div>
    <div className="Comment-text"> {/* the actual comment text is another aspect */}
    {props.text}
    </div>
    <div className="Comment-date"> {/* the comment date is another aspect */}
    {props.date.toLocaleString()}
    </div>
    </div>
    );
    } // save in a new file ComplexComment.jsx, then export it and import into App.jsx
export function UserInfo(props){
    return(
        <div className="UserInfo"> 
        {" "}
        {/* the user info is one aspect of the comment */}
        <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.name}
        />
        <div className="UserInfo-name">{props.user.name}</div>
        </div>
        );
}
    export function Comment(props) {
        return (
        <div className="Comment componentBox">
        <UserInfo user={props.author} /> {" "}
        <div className="Comment-text">{props.text} </div>
        <div className="Comment-date">{props.date.toLocaleString()}</div>
        </div>
        );
    }