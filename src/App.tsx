import React from "react";
import { useEffect, useState } from "react";
import "./App.scss";
import { useDispatch, useSelector } from "react-redux/es/exports";
import userActionTypes from "./reducer-action-types/user/user.action.tyoes";

function App() {
  useEffect(() => {
    dispatch({
      type: userActionTypes.SET_CURRENT_USER,
      payload: { name: "lela", surname: "lelashvili" },
    });
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const [form, setForm] = useState({
    name: "",
    surname: "",
  });

  const updateCurrentUuser = () => {
    dispatch({
      type: userActionTypes.SET_CURRENT_USER,
      payload: form,
    });
  };

  const controlForm = (e: any) => {
    switch (e.target.name) {
      case "name":
        setForm({ ...form, name: e.target.value });
        break;
      case "surname":
        setForm({ ...form, surname: e.target.value });
    }
  };

  return (
    <div className="App">
      <h1 className="test_scss">{user.user.name}</h1>
      <h1 className="test_scss">{user.user.surname}</h1>
      <input type="text" name="name" onChange={controlForm} />
      <input type="text" name="surname" onChange={controlForm} />
      <button onClick={updateCurrentUuser}>click me</button>
    </div>
  );
}

export default App;
