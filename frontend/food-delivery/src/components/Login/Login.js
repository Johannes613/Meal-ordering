import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Login = ({ setShowLogin }) => {
  const [accState, setAccState] = useState("Login");
  const { token, setToken } = useContext(StoreContext);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    console.log(data);
    localStorage.removeItem("token");
  }, [data]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const loginUrl = "https://food-backend-7432.onrender.com/api/user/login";
    const signUpUrl = "https://food-backend-7432.onrender.com/api/user/signup";
    try {
      const resp = await fetch(accState === "Login" ? loginUrl : signUpUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!resp.ok) {
        throw new Error("Error occured while fetching");
      }
      const result = await resp.json();
      console.log(result);
      setShowLogin(false);
      const newToken = result.token;
      setToken(newToken);
      localStorage.setItem("token", result.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form className="login-container" onSubmit={onSubmitHandler}>
        <div className="form-title">
          <h2>{accState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-inputs">
          {accState !== "Login" ? (
            <input
              type="text"
              onChange={(event) => onChangeHandler(event)}
              value={data.username}
              name="username"
              placeholder="Your name"
              required
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            onChange={(event) => onChangeHandler(event)}
            value={data.email}
            name="email"
            placeholder="Your email"
            required
          />
          <input
            type="password"
            onChange={(event) => onChangeHandler(event)}
            value={data.password}
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button>{accState === "Login" ? "Login" : "Create account"}</button>
        <div className="agreement">
          <input type="checkbox" name="agreement" id="statement" required />
          <p>By countinuing, I agree to the terms of use & privacy policy</p>
        </div>
        <div className="change-state">
          {accState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setAccState("Sign Up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setAccState("Login")}>Login here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
