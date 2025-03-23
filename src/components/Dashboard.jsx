import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [user, setuser ] = useState(null);
    useEffect(()=>{
        axios.get("http://localhost:8080/user-info", {withCredentials: true})
        .then(res => {
            setuser(res.data)
            console.log("res...........", res)
        })
        .catch(err => console.log("Error occured..........", err))
    }, []);
  return (
    <div>
        <p> Welcome to Dashboard </p>
        {user
            ? <div>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>Login : {user.login}</p>
                <img  src={user.picture} alt="profilePic"/>
            </div>
            : <p> Loading Data..... </p>
        }
         
    
    </div>
  )
}

export default Dashboard