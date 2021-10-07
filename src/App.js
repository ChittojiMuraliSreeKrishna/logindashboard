import LoginPage from './Components/Login/Js/LoginPage'
import React, { useState } from 'react';
import Body from './Components/Dashboard/Js/Body'

function App() {
  const adminUser = {
    userid: "9972577728",
    password: "easyretail"
  }
 
 const [user, setUser] = useState({userid: ""});
 const [error, setError] = useState("");

 const Login = details => {
  console.log(details);

  if(details.userid === adminUser.userid && details.password === adminUser.password){
    console.log("Logged In");
    setUser({
      userid: details.userid,
    })
    }else{
    console.log("details do not match");
    setError("details do not match");
  }
}
const Logout = () => {
    setUser({userid: ""})
  }

  return (
    <div className="App">
      {(user.userid !== "") ? (<Body Logout={Logout} user={user} />) : (<LoginPage Login={Login} error={error} />)}
    </div>
  );
}

export default App;