const TrendingButton = (props) => {
    return (
        <div className="TrendingBtnContainer">
            <div className="spanContainer">
                <span>+</span>
                {/* <p>{props.trendingName}</p> */}
            </div>
            <div className="pContainer">
                <p>{props.trendingName}</p>
            </div>
            <div className="trendingBtnOption"> ・・・ </div>
        </div>
    )

}


export default TrendingButton;