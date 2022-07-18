import React, { useState } from 'react'; // <-- importo React
import AddUser from "./components/Users/AddUser"; // <-- importo il componente AddUser
import UserList from "./components/Users/UserList"; // <-- importo il componente UserList

function App() {

  const [userData, setUserData] = useState([]);

  const userDataHandler = (data) => {
    setUserData((prevUserData) => {
      return [...prevUserData, data];
    });
  };

  return (
    <>
      <AddUser onSaveUserData={userDataHandler} />
      {userData.length > 0 && <UserList userData={userData} />}
    </>
  );
}

export default App;
