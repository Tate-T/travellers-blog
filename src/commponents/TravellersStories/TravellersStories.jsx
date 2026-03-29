import style from "./TravellersStories.module.css";
import { StoriesItem } from "./TravellersStoriesItem/TravellersStoriesItem.jsx";


export const TravellersStories = ({stories, count}) => {
    // console.log(stories);
    return(
          <ul className={style.stories}>
              {stories.map((story) => (
                <StoriesItem
                  key={story._id}
                  story={story}
                  className={style.fadeIn}
                />
              ))}
            </ul>
    )
}