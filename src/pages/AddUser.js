import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { AddUsers } from '../redux/actions';

function AddUser() {

  let dispatch = useDispatch();


  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    adress: "",
    decretion: "",
  });
  let history = useHistory();

  const { name, email, phone, adress, decretion } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  }

  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !adress || !email || !phone || !decretion) {
      setError("Hãy nhập thông tin, pleaseeeeee");
    }
    else {
      dispatch(AddUsers(state));
      history.push("/");
      setError("")
    }
  }

  return (
    <div>


      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form action="" className="App__container" onSubmit={handleSubmit}>

        <h2>Profile information</h2>
        <div className="App__box1">
          <div className="App__box1--taks1">
            <h4>full name</h4>
            <input type="text" value={name} onChange={handleInputChange} name="name" placeholder="ADmin" />
          </div>
          <div className="App__box1--taks2">
            <h4>Email</h4>
            <input type="Email" onChange={handleInputChange}
              value={email} name="email" placeholder="Thinh__handsome@gmail.com" />
          </div>
        </div>

        <div className="App__box2">
          <div className="App__box2--taks3">
            <h4>Phone</h4>
            <input type="number" onChange={handleInputChange}
              value={phone} name="phone" placeholder="113" />
          </div>
          <div className="App__box2--taks4">
            <h4>Location</h4>
            <input type="text" onChange={handleInputChange}
              value={adress} name="adress" placeholder="Address" />
          </div>
        </div>
        <div className="App__box3">
          <div className="App__box3--taks5">
            <h4>About me</h4>
            <textarea type="text" onChange={handleInputChange}
              value={decretion} name="decretion" placeholder="Somothing"  />
          </div>
          <button type="submit" onClick={() => history.push("/")}
            className="Go_back">Go Back </button>
          <button type="submit" onChange={handleInputChange} >add </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
