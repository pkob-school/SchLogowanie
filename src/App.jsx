import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Form from './Form'
import './App.css'

function App() {
  // Normalnie powinien być hash ale nwm jak to zrobić w JS
  let users = [
    {"username": "admin", "password": "root"}
  ];
  // session - "id": 0, "assoc_user_id": 0
  let [sessions, setSessions] = useState([]);
  function append_session(session) {
    setSessions([...sessions, session]);
  }

  let [logged_in, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("logged_in") !== null) {
      setLoggedIn(true);
      append_session({"id": Math.random(), "associated_user_id": 0});
    }
  }, [logged_in]);

  function logout() {
    localStorage.removeItem("logged_in"); logged_in = false; location.reload();
  }
  if (logged_in === true) {
      return (
        <div>
        <p>Witaj, {users[0].username}</p>
        <button onClick={logout}></button>
        </div>
      );
  }
  else {
  return (
    <>
      <Form userArr={users} sessionArr={sessions}/> 
    </>
  );
  }
}

export default App
