import React, {useState,useEffect} from 'react'
import Login from "../Components/Login"
import Profile from "../Components/Profile"
import {LoginContext} from "../Contexts/LoginContext"

export default function LoginView() {
  const [showProfile, setShowProfile] = useState(false)
  const [username, setUsername] = useState("")

  useEffect(() => {
    console.log("second on update");
    return () => {
      console.log("first on update");
    };
  });

  return (
    <div>
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile/> : <Login/>}
      </LoginContext.Provider>
    </div>
  )
}
