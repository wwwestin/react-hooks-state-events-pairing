import Comments from "./Comments";
import { useState } from 'react'

function CommentsSection({comments}) {
    const [search, setSearch] = useState('');

    const findUser = e => setSearch(e.target.value);
    
    const foundUsers = comments.filter(commentObj => {
        return commentObj.user.includes(search);
    })

    return (
        <div>
            <h2>
                {foundUsers.length} Comments</h2>
                Seach: <input placeholder="Seach User Here"
                onChange={findUser}/>
            
            {foundUsers.map(commentObj => 
                <Comments key={commentObj.id} comment={commentObj} />) }
        </div>

    )
}

export default CommentsSection;