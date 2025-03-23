import React from 'react'

const Home = () => {
  const googleLogin = () =>{
    window.location.href = "http://localhost:8080/oauth2/authorization/google"
  }

  const githubLogin = () =>{
    window.location.href = "http://localhost:8080/oauth2/authorization/github"
    }

  return (
    <div>
        <p> Welcome to Home Page </p>
        <button onClick={googleLogin}>Login with Google</button>
        <button onClick={githubLogin}>Login with GitHub</button>
    </div>
  )
}

export default Home