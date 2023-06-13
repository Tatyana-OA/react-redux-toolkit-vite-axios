import { useEffect } from "react";
import "./App.css";
import { getActivitiesThunk, getCatFactsThunk } from "./redux/thunks";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatFactsThunk());
    dispatch(getActivitiesThunk());
  }, [dispatch]);

  return (
    <>
      <h1>Hello there</h1>
    </>
  );
}

export default App;
