import { Link } from "react-router"
import "./not-found-page.css"

function NotFoundPage() {
    return (
        <div className="main-div">
            <h1 className="text-h1">404</h1>
            <h1>❌ This Page doesn't exist ❌</h1>
            <Link to={"/home"} >
                <button className="home-btn">Go Back Home</button>
            </Link>
        </div>
    )
}

export default NotFoundPage