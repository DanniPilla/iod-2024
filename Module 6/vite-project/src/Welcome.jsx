import './App.css'

export default function Welcome(props) {
    return (
    <div className="componentBox">
    <h3>Welcome {props.name}!</h3>
    </div>
    )
    }