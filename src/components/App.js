import videoData from "../data/video.js";
import Video from './Video'
import InfoSection from "./InfoSection.js";
import LikeButtons from "./LikeButtons.js";
import CommentsSection from "./CommentsSection.js";
import {useState} from "react";





function App() {

	const [showComments, setShow] = useState(true);
	const vanishComments = () => {
		setShow(!showComments)
	}

		return (
		<div className="App">

		<Video embedUrl = {videoData.embedUrl} title = {videoData.title} />

		<InfoSection header ={videoData.title} number = {videoData.views} date = {videoData.createdAt} />

		<LikeButtons upvotes = {videoData.upvotes} downvotes = {videoData.downvotes} />

		<button onClick= {vanishComments}>
			{showComments ? "Hide" : "Show"} Comments
		</button>
		
        <hr></hr>
		{showComments ? 
		<CommentsSection comments = {videoData.comments} /> : null}

		</div>
	)
}


export default App;