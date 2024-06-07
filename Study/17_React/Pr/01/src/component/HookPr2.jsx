import { useCallback } from "react";
import { useState } from "react";
import "../App.css";

function HookPr2() {
  const [item1, setItem1] = useState("item1");
  const [item2, setItem2] = useState("item2");
  const [item3, setItem3] = useState("itme3");
  const [editing, setEdit] = useState(false);
  const [tempText, setTempText] = useState("");

  const editItem = useCallback(() => {
    setEdit(!editing);
  });

  const saveText = useCallback((item) => {
    item(tempText);
    setEdit(!editing);
  });

  const delItem = useCallback((setItem) => {
    setItem("");
  });

  return (
    <div className="App">
      <ul>
        <li>
          {editing ? (
            <input
              onChange={(e) => {
                setTempText(e.target.value);
              }}
            />
          ) : (
            <div>{item1}</div>
          )}
          {editing ? (
            <button
              onClick={() => {
                saveText(setItem1);
              }}
            >
              Save
            </button>
          ) : (
            <div>
              <button onClick={editItem}>Edit</button>
              <button
                onClick={() => {
                  delItem(setItem1);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </li>
        <li>
          {editing ? (
            <input
              onChange={(e) => {
                setTempText(e.target.value);
              }}
            />
          ) : (
            <div>{item2}</div>
          )}
          {editing ? (
            <button
              onClick={() => {
                saveText(setItem2);
              }}
            >
              Save
            </button>
          ) : (
            <div>
              <button onClick={editItem}>Edit</button>
              <button
                onClick={() => {
                  delItem(setItem2);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </li>
        <li>
          {editing ? (
            <input
              onChange={(e) => {
                setTempText(e.target.value);
              }}
            />
          ) : (
            <div>{item3}</div>
          )}
          {editing ? (
            <button
              onClick={() => {
                saveText(setItem3);
              }}
            >
              Save
            </button>
          ) : (
            <div>
              <button onClick={editItem}>Edit</button>
              <button
                onClick={() => {
                  delItem(setItem3);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default HookPr2;
