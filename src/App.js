import React, { useState } from 'react';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (uName, uAge, clgName) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, clgname: clgName, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUsersHandler} />
      <UserList users={usersList} />
    </>
  );
}

export default App;
