import style from "./TravellersStories.module.css";
import { StoriesPageItem } from "./TravellersStoriesItem/TravellersStoriesItem.jsx";


export const TravellersStories = ({stories, count}) => {
    // const {stories} = stories;
    console.log(stories);
    return(
          <ul className={style.stories}>
              {stories.map((story) => (
                <StoriesPageItem
                  key={story._id}
                  story={story}
                  className={style.fadeIn}
                />
              ))}
            </ul>
    )
}