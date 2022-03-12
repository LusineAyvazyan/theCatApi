import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emptyFetchData, fetchData } from "../Redux/actions";
import Button from "./Buttons";
import Slider from "../container/Slider";
import { useEffect, useState } from "react";

const CatsCategory = () => {
  const state = useSelector((state) => state.cat);
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState(null);

  async function getCatImages(id) {
    try {
      const res = await axios.get(
        process.env.REACT_APP_BASE_URL +
          "images/search?limit=10&page=1&category_ids=" +
          id
      );
      res.data && dispatch(fetchData(res.data));
    } catch (error) {
      console.log(error, "error");
    }
  }

  useEffect(() => {
    if (categoryId) {
      getCatImages(categoryId);
    }
  }, [categoryId, state?.limit]);

  useEffect(() => {
    dispatch(emptyFetchData());
  }, [categoryId]);

  return (
    <>
      <ul className="cat-list">
        {state.category.length &&
          state.category.map((cat) => {
            return (
              <Button
                key={cat.id}
                text={cat.name}
                onClick={() => setCategoryId(cat.id)}
              />
            );
          })}
      </ul>
      <div>
        <Slider />
      </div>
    </>
  );
};
export default CatsCategory;
