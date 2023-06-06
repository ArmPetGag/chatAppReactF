import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const { currentUser, logout } = UserAuth();
  const handleLogout = async () => {
    try {
      await logout();
    } catch (errore) {
      console.log(err);
    }
  }

  return (
    <div className='navbar bg-neutral text-neutral-content'>
      <div className="containerWrap flex justify-between  ">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        {currentUser ? <button onClick={handleLogout}>Log Out</button> : ""}
      </div>
    </div>
  )
}

export default Navbar