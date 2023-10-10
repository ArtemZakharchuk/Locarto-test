import { useState, useEffect, useCallback } from "react";
import { getAllCharacters } from "../api/fetch";

export function useCharacters(showLoading) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(
    async (abortController) => {
      showLoading(true);

      try {
        const response = await getAllCharacters(page, abortController);
        const data = await response.json();
        const { results } = data;

        if (data.info.pages !== page) {
          setItems((prevItems) => [...prevItems, ...results]);
        }
        if (data.info.next !== null) {
          setPage((prevPage) => prevPage + 1);
        }
      } catch (error) {
        console.error(error);
      } finally {
        showLoading(false);
      }
    },
    [page, showLoading]
  );

  useEffect(() => {
    const abortController = new AbortController();
    fetchData(abortController);

    return () => {
      abortController.abort();
    };
  }, []);

  return {
    items,
    page,
    fetchData,
  };
}
