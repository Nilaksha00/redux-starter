import "./App.css";
import { useState } from "react";
import store from "./store/store";

export default function App() {
  const [desc, setDesc] = useState("");

  store.subscribe(() => {
    console.log("CHANGED", store.getStore());
  });

  const AddBug = () => {
    store.dispatch({
      type: "ADD_BUG",
      payload: {
        description: desc,
      },
    });
    // console.log(store.getState());
  };

  const DeleteBug = () => {
    store.dispatch({
      type: "REMOVE_BUG",
      payload: {
        id: 2,
      },
    });
    // console.log(store.getState());
  };

  return (
    <main>
      <input type="text" onChange={(e) => setDesc(e.target.value)} />
      <button onClick={AddBug}>Add</button>
      <button onClick={DeleteBug}>Delete</button>
    </main>
  );
}
