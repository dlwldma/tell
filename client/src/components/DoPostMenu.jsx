const DoPostMenu = (props) => {
    return (
        <>
            <div className="DoPostMenu">
                <div className="ImgContainer">
                    <img src={props.imgSrc}/>
                </div>
                <div className="InputContainer">
                    Hoy me siento...
                </div>
            </div>
        </>
    )
}

export default DoPostMenu;