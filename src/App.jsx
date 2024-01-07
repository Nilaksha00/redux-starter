import "./App.css";
import { useState, useEffect } from "react";
import store from "./store/store";
import * as actionCreators from "./actions/actions";

export default function App() {
  const [desc, setDesc] = useState("");
  const [bugList, setBugList] = useState([]);

  const unsubscribe = store.subscribe(() => {
    console.log("CHANGED", store.getState());
  });

  useEffect(() => {
    store.subscribe(() => {
      setBugList(store.getState());
    });
  }, []);

  const AddBug = () => {
    store.dispatch(actionCreators.bugAdded(desc));
    // unsubscribe();
  };

  const DeleteBug = () => {
    store.dispatch(actionCreators.bugRemoved(3));
  };

  const changeStatus = (id) => {
    store.dispatch(actionCreators.bugStatusChanged(id));
  };

  return (
    <main>
      <input type="text" onChange={(e) => setDesc(e.target.value)} />
      <button onClick={AddBug}>Add</button>
      <button onClick={DeleteBug}>Delete</button>

      {bugList.map((i) => (
        <div onClick={() => changeStatus(i.id)}>
          <p>{i.resolved ? "Resolved" : "Not Resolved"}</p>
          <p>{i.description}</p>
        </div>
      ))}
    </main>
  );
}
