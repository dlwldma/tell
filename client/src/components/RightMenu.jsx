import ExplorarMenu from "./ExplorarMenu";
import TagsMenu from "./TagsMenu";
import TrendingMenu from "./TrendingMenu";

const RightMenu = () =>{
    return (
        <>
            <div className='RightMenuContainer'>
                <ExplorarMenu />
                <TagsMenu />
                <TrendingMenu />
            </div>
        </>
    )

}
export default RightMenu;