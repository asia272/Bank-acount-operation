import React, { useState } from 'react'
import "./UserInput.css"

const UserInput = ({ setUserInfo }) => {

  let [info, setInfo] = useState({
    name: "",
    IdNumber: ""
  })

  let handleSubmit = (e) => {
    e.preventDefault();
    if (info.name.trim().length === 0) {
      alert("Name must not be empty");
      return;
    } else if (info.IdNumber.trim().length === 0) {
      alert("ID Number must not be empty");
      return;
    }
    // console.log(info)
    setInfo({
      name: "",
      IdNumber: ""
    })
    setUserInfo(info)
  }


  return (
    <div className='user-info'>
      <div className="heading">
        <h1>The React-Redux Bank</h1>
        <h2>Create New customer</h2>
      </div>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Customer Full name</label>
        <input
          type="text"
          id='name'
          placeholder="Enter your name"
          value={info.name}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        <label htmlFor="idNumber">National ID</label>
        <input type="text"
          id='idNumber'
          placeholder='enter you ID'
          value={info.IdNumber}
          onChange={(e) =>
            setInfo((prev) => ({ ...prev, IdNumber: e.target.value }))
          }

        />

        <button>create account</button>
      </form>
    </div>

  )
}

export default UserInput
