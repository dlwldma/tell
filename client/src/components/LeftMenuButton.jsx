const LeftMenuButton = (props) => {
    return (
        <div className="leftButtonContainer">
            <img src={props.btnIcon} />
            <div className="leftBtnTextContainer">
                <p>{props.btnText}</p>
            </div>
            
            
            
        </div>
    )
}

export default LeftMenuButton;