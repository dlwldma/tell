import Post from "./Post";
import axios from "axios";
import { useState, useEffect } from "react";

const PostSection = () => {
    const [profiles, setProfiles] = useState([]);
    const [postState, setPostState] = useState("none")

    const getData = async () =>{
        //DEVELOPMENT
        const response = await axios.get('http://localhost:4000/api');

        //DEPLOYMENT
        /* const response = await axios.get('https://tell-app.herokuapp.com/api'); */
        const data = await response.data;
        return data;
    } 
    
    useEffect(()=>{
        getData().then(data => {
            setProfiles(data);
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
                profiles.map((postProfile, key) => {
                   return <Post key={key} name={postProfile.username} media={postProfile.posts.postMedia} postText={postProfile.posts.postText}></Post>     
                })         
            )}
        </div>
    )
}
export default PostSection;