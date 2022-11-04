import LeftMenuButton from "./LeftMenuButton";
import getData from "../features/getData";

import { useState, useEffect } from "react";

const LeftMenu = (props) => {
    const [profile, setProfile] = useState([]);
    useEffect(()=>{
        getData().then(data=>{
            setProfile(data)
        })
    }, [])
    
    return (
        <>
            <div className="LeftMenuContainer">
                <div className="logoContainer">
                    <img src="/main-icon.png" alt="" />
                    <p>tell</p>
                </div>
                <LeftMenuButton btnIcon="/inicio-icon.png" btnText="Inicio"/>
                <LeftMenuButton btnIcon="/bell-icon.png" btnText="Notificaciones"/>
                <LeftMenuButton btnIcon="/mensaje-icon.png" btnText="Mensajes"/>
                <LeftMenuButton btnIcon="/personalizar-icon.png" btnText="Personalizar"/>
                <LeftMenuButton btnIcon="/heart-icon.png" btnText="Guardado"/>
                <div className="leftProfileBtn">
                    <div> 
                        <img src={props.imageSrc} />
                    </div>
                    <p> {props.username}</p>

                </div>
            </div>
        
        </>
    )
}

export default LeftMenu;