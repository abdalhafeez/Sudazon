import "./styles/login.css"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import CheckOutLine from "../components/CheckOutLine"
const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setError] = useState([])

  return (
    <div className=" login row mb-5">
      <CheckOutLine step1 />
      <form className=" col-10 col-md-5">
        <h3 className="text-center form-color ">Log In</h3>

        <div className="form-group">
          <label className="form-color">email</label>

          <input
            className="form-control my-3"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-color">password</label>{" "}
          <input
            name="password"
            className="form-control mb-3"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="auth-actions-ui">
          <button type="button" className="btn  btn-success btn-sm" mt={3}>
            {" "}
            Submit{" "}
          </button>
          <Link to="/register" className="link text-primary ">
            Register
          </Link>
        </div>
      </form>
    </div>
  )
}

export default LoginScreen
