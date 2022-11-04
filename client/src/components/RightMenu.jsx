import ExplorarMenu from "./ExplorarMenu";
import TagsMenu from "./TagsMenu";
import TrendingMenu from "./TrendingMenu";

const RightMenu = () =>{
    return (
        <>
            <div className='RightMenuContainer'>
                {/* <ExplorarMenu /> */}
                <div className="DynamicContainer">
                    <ExplorarMenu />
                    <TagsMenu />
                    <TrendingMenu />
                </div>
            </div>
        </>
    )

}
export default RightMenu;