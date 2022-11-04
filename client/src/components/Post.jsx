import axios from "axios";
import { useState, useEffect } from "react";


const Post = (props) => {  

    return (
        <div className="Post">
            <p>{props.name}</p>
            <div className="postImageContainer">
                <img src={props.media} />
            </div>
            <div className="postTextContainer">
                <p>{props.postText} </p>
            </div>
            <img className="postLikeIcon" src="/heart-icon.png"/>  
            
        </div>
    )
}

export default Post;