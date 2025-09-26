import { useEffect } from "react";
import { addItems } from "../store/itemsSlice";
import { useDispatch } from "react-redux";

const useFetchData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error("Error");
        }
        const jsonData = await response.json();
        dispatch(addItems(jsonData));
      } catch (error) {
      }
    };

    fetchData();
  }, [dispatch]);
};

export default useFetchData;
