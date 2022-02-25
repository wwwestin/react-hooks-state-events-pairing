import LikeButtons from "./LikeButtons";

function Comments({comment}){
    return (
        <div>
            <h3>{comment.user}</h3>
            <div>{comment.comment}</div>

            <LikeButtons upvotes = {0} downvotes ={0} />
        </div>
    )
}

export default Comments;