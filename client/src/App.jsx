import LeftMenu from './components/LeftMenu'
import MainContent from './components/MainContent'
import RightMenu from './components/RightMenu'
import NavVar from './components/NavVar'
import getData from './features/getData'
import { useState, useEffect} from 'react';
import './app.css'
import React from 'react'

const App = () => {
    const [user, setUser] = useState({});
    const [postState, setPostState] = useState("none");
    const userInfo = {
        username: "",
        profilePicture: ""
    };
    
    useEffect(()=>{
        getData().then(data => {
            userInfo.username = data[0].username;
            userInfo.profilePicture = data[0].profilePicture;


            setUser(userInfo);
            
            setPostState("loaded");
        })
    }, [])

    console.log(user.profilePicture)


    return (
        <>
            <div className='principal'> 
                <div>
                    <LeftMenu imageSrc={user.profilePicture} username={user.username} />
                    <MainContent imgSrc={user.profilePicture}/>
                    <RightMenu />
                    <NavVar />
                </div>              
            </div>
           
        </>
    )
}


export default App;