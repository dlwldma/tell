import Post from "./Post";
import axios from "axios";
import getData from "../features/getData";
import { useState, useEffect } from "react";

const PostSection = () => {
    const [post, setPosts] = useState([]);
    const [postState, setPostState] = useState("none");
    const posts = [];

    useEffect(()=>{
        getData().then(data => {
            const likedProfiles = data[0].likedProfiles;
            
            likedProfiles.forEach(profile => {
                const profilePost = profile.posts;
                profilePost.forEach(likedPosts => {
                   
                    posts.push(likedPosts)
                })
            })
            const ownPosts = data[0].posts;
            ownPosts.forEach(ownPost => {
                /* console.log(ownPost) */
                posts.push(ownPost)
            })
            
            /* console.log(posts) */
            setPosts(posts)
            setPostState("loaded");
        })
    }, [])

    return(
        <div className="PostSection">
            { (postState === "none") ? (
                <div></div>
            ) : (postState === "loading") ? (
                <div>Cargando</div>
            ) : (
                post.map((post, key) => {
                   return <Post key={key} name={post.postUsername} media={post.postMedia} postText={post.postText}></Post>     
                })         
            )}
        </div>
    )
}
export default PostSection;