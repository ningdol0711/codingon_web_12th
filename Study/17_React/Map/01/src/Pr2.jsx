import { useState } from "react";
import './App.css'

function Pr2() {
  const [user, setUser] = useState([
    {
      id: 1,
      name: "코디",
      email: "codi@gmail.com",
    },
    {
      id: 2,
      name: "윤소희",
      email: "yoonsohee@gmail.com",
    },
  ]);
  const [searchedUser, getUser] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [selectOption, getOption] = useState("");
  const [searchValue, getValue] = useState("");
  const [editUserValue, editSelectUser] = useState("");

  const addUser = () => {
    const newUser = user.concat({
      id: user.length + 1,
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

  const editUser = (targetId) => {
    const nameInput = document.querySelector("#nameInput");
    const emailInput = document.querySelector("#emailInput");

    const eddittingUser = user.filter((e) => {
      return (e.id === targetId)
    })

    console.log(eddittingUser)

    nameInput.value = eddittingUser[0].name;
    emailInput.value = eddittingUser[0].email;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="type name"
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        id="nameInput"
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
        id="emailInput"
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
          {user.map((e) => {
            return (
              <tr
                key={e.id}
                onDoubleClick={() => {
                  deleteUser(e.name);
                }}
              >
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td><button onClick={() => {editUser(e.id)}}>Edit</button></td>
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
          {searchedUser.map((e) => {
            return (
              <tr
                key={e.id}
                onDoubleClick={() => {
                  deleteUser(e.name);
                }}
              >
                <td>{e.id}</td>
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
