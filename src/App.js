import {useEffect, useState} from "react";

import Users from "../src/components/Users/Users"
import Form from "../src/components/Form/Form"
import {UserService} from "./services/users.service";

function App() {
    const [users, setUsers] = useState([]);
    const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
      UserService.getAll().then(items => {
              setUsers([...items])
                setNewUsers([...items])
          })
      },
      []);

  const usersList = (data) => {
      let newArray = [...users];

      if (data.name) {
          newArray = newArray.filter(value => value.name.toLowerCase().includes(data.name.toLowerCase()));
      }
      if (data.username) {
          newArray = newArray.filter(value => value.username.toLowerCase().includes(data.username.toLowerCase()))
      }
      if (data.email) {
          newArray = newArray.filter(value => value.email.toLowerCase().includes(data.email.toLowerCase()))
      }
      setNewUsers(newArray);
  }

  return (
    <div className="App">
        <Form usersList={usersList}/>
        <Users users={newUsers}/>
    </div>
  )
}


export default App;
