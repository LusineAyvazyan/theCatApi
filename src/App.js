import axios from "axios";
import { useDispatch } from "react-redux";
import "./App.css";
import Button from "./components/Buttons";
import { fetchCategory } from "./Redux/actions";
import CatsCategory from "./components/CatsCategory";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [isCategory, setCategory] = useState(false)

  async function getCategory () {
    try {
      const res = await axios.get(process.env.REACT_APP_BASE_URL +  "categories");
      console.log(res.data, "res");
      if(res.data){
        setCategory(true)
        dispatch(fetchCategory(res.data));
      }
    } catch (error) {
      console.log(error, "error");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {!isCategory ? (
          <Button text="Get Category" onClick={getCategory} />
        ) :  <CatsCategory /> }
      </header>
    </div>
  );
}

export default App;
