import axios from "axios";
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {ulogin} from "../Redux/actions"

export const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLogin] = useState();
  const user = useSelector(store => store.user);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLogin({
      ...loginData,
      [name]: value,
  });
  }

  const handleSubmit = () => {
    dispatch({type:"LOGIN",loginData})
  }
  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={handleSubmit} className="submit">Login</button>
    </div>
  );
};
