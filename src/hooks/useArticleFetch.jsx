import { useEffect, useState } from "react";

export const useArticleFetch = () => {
  const [stories, setStories] = useState([]);
useEffect(() => {
    const fetchStories = async () => {
      await fetch(`https://6975e3b9c0c36a2a994fb0e7.mockapi.io/api/stories/articles`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          setStories(data);
        });
    };
    fetchStories();
  }, []);
  return stories;
};
