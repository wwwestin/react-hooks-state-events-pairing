import { useState} from "react";

function LikeButtons({upvotes, downvotes}) {
 
    const [upNumber, setUpNumber] = useState(upvotes);
    const [downNumber, setDownNumber] = useState(downvotes);

    const changeNumber = (like = true) => {
        if (like) {
            setUpNumber(upNumber + 1)
        } else {
            setDownNumber(downNumber + 1)
        }
    }

    return (
        <p>
            <button onClick = {() => changeNumber()}
            >{upNumber}👍</button>
            <button onClick = {() => changeNumber(false)}
            >{downNumber}👎</button>
        </p>
    )
}

export default LikeButtons;