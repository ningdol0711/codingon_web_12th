import { useState } from "react";
import './App.css'

function Pr2() {
  const [user, setUser] = useState([
    {
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);
  const [searchedUser, getUser] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [selectOption, getOption] = useState("");
  const [searchValue, getValue] = useState("");

  const addUser = () => {
    const newUser = user.concat({
      name: inputName,
      email: inputEmail,
    });

    setUser(newUser);
    setInputName("");
    setInputEmail("");
  };

  const eventListener = (e) => {
    if (e.key === "Enter") {
      addUser();
    }
  };

  const deleteUser = (targetName) => {
    const newUser = user.filter((e) => {
      return e.name !== targetName;
    });

    setUser(newUser);
  };

  const searchUser = () => {
    const option = selectOption;
    const value = searchValue;

    if(option === "name") {
      getUser(user.filter((e) => {
        return e.name.includes(value);
      }))
    }
    else {
      getUser(user.filter((e) => {
        return e.email.includes(value);
      }))
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="type name"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="type email"
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          eventListener(e);
        }}
      />

      <button onClick={addUser}>Add</button>

      <br />

      <select name="select" id="select" onChange={(e) => {getOption(e.target.value)}}>
        <option value="name">이름</option>
        <option value="email">이메일</option>
      </select>

      <input type="text" onChange={(e) => {getValue(e.target.value)}}/>

      <button onClick={searchUser}>Search</button>

      <br />

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, index) => {
            return (
              <tr
                key={index}
                onDoubleClick={() => {
                  deleteUser(e.name);
                }}
              >
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {searchedUser.map((e, index) => {
            return (
              <tr
                key={index}
                onDoubleClick={() => {
                  deleteUser(e.name);
                }}
              >
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Pr2;
