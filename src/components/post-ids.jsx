import { useParams } from "react-router"

function PostIds() {
    const { id } = useParams()

    return (
        <div>
            <h1>Posts no.{id}</h1>
        </div>
    )
}

export default PostIds