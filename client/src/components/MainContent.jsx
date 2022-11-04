import DoPostMenu from "./DoPostMenu";
import PostSection from "./PostSection";

const MainContent = (props) => {
    return (
        <>
            <div className='MainContentContainer'>
                <DoPostMenu imgSrc={props.imgSrc}/>
                <PostSection />
            </div>
            
        </>
    )

}

export default MainContent;