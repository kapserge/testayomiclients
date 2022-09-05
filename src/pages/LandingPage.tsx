import React, { useState, useEffect } from "react";
import httpClient from "../httpClient";
import { User } from "../types";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import axios from 'axios';
const LandingPage: React.FC = () => {
  const [user, setUser] = useState<User | null>();
  

  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = useState<string>("");
  
  const PutUser = async () => {
    console.log(email);

    try {
     
      const resp = await httpClient.put(`http://127.0.0.1:5000/user/${user}`, {
        email,
      
      });
      
      window.location.href = "/";
    } catch (error: any) {
      if (error.response.status === 401) {
        alert("Invalid credentials");
      }
    }
  };
  
  const logoutUser = async () => {
    await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  };

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/@me");
        setUser(resp.data);
      } catch (error) {
        console.log("Not authenticated");
      }
    })();
  }, []);
  
  return (
    <div>
      <h1>Welcome to this React Application</h1>
      {user != null ? (
        <div>
          <h2>Logged in</h2>
          <h3>ID: {user.id}</h3>
          <h3>Email: {user.email}</h3>

          <button onClick={logoutUser}>Logout</button>
          
          <button onClick={() => setIsOpen(true)}>modification</button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <form>
      <h3>ID: {user.id}</h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        <button >modification</button>
        <button type="button" onClick={() => PutUser()}></button>
      </form>
      
      </Modal>
                 </div>
      ) : (
        <div>
          <p>You are not logged in</p>
          <div>
            <a href="/login">
              <button>Login</button>
            </a>
            <a href="/register">
              <button>Register</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
