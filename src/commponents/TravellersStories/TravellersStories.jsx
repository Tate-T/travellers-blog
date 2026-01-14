import style from "./TravellersStories.module.css";
import { StoriesPageItem } from "./TravellersStoriesItem/TravellersStoriesItem.jsx";


export const TravellersStories = ({stories, count}) => {
    return(
          <ul className={style.stories}>
              {stories.slice(0, count).map((story) => (
                <StoriesPageItem
                  key={story._id}
                  story={story}
                  className={style.fadeIn}
                />
              ))}
            </ul>
    )
}