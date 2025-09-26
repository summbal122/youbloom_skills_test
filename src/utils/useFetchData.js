import { useEffect } from "react";
import { addItems } from "../store/itemsSlice";
import { useDispatch } from "react-redux";
const useFetchData = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    const fetchData = async() => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await data.json();
      dispatch(addItems(jsonData));
      
    }
    fetchData();

  }, [dispatch])

}
export default useFetchData