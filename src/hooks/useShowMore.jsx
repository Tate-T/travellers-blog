import { useState } from "react";
import { useArticleFetch } from "./useArticleFetch";

export const useShowMore = () => {
  const [visibleCount, setVisibleCount] = useState(6); // показуємо спочатку 6 історій
  const stories = useArticleFetch();

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // додаємо ще 6 при натисканні
  };

  const paginationData = {
    stories,
    visibleCount,
    handleShowMore,
  };
  return {paginationData, handleShowMore};
};
