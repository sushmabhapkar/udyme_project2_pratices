import React,{useState} from 'react';
import './App.css';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';

function App() {

  const[usersList,setUsersList]=useState([]);


  const addUsersHandler=(uName, uAge)=>
  {
         setUsersList((prevUserList)=>
         {
          return [...prevUserList,{ name : uName, age : uAge , id: Math.random().toString()}];
         });
  };

  return (
   
    <div>
      <AddUser onAddUser={addUsersHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
