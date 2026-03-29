import { createContext } from "react";
import { useArticleFetch } from "../../hooks/useArticleFetch.jsx";

export const CurrentStoryContext = createContext(null);

const visibleCount = 9;

export const CurrentStoryProvider = ({ children}) => {
      const fetchStories = useArticleFetch();    
    return (
        <CurrentStoryContext.Provider value={{stories: fetchStories, visibleCount}}>
            {children}
        </CurrentStoryContext.Provider>
    )
}