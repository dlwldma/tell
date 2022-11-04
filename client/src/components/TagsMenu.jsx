import SelectedTags from "./SelectedTags";


const TagsMenu = () => {
    return (
        <>
            <div className="TagsMenu">
                <h2>Tags</h2>
                <SelectedTags tagName="Emoción" />
                <SelectedTags tagName="Faker" />
            </div>
        </>
    ) 
}

export default TagsMenu;