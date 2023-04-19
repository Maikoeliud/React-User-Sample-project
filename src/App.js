import React, {useState} from 'react';
import AddUser from "./Components/User/AddUser";
import UserList from "./Components/User/UserList";


function App() {
    const [usersList, setUsersList] = useState([])
    function addUserHandle(uName, uAge) {
        setUsersList((prevUsersList) =>{
            return [...prevUsersList, {name:uName,age:uAge, id:Math.random().toString()}]
        })
    }
  return (
    <div>
  <AddUser onAddUser={addUserHandle}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
