import "./styles/login.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../store/actions/userActions"
const RegisterScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.userInfo)
  const { loading, error, token } = userInfo
  console.log(loading, error, token)
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser({ name, password, email }))
  }
  return (
    <div className=" login row">
      <form
        onSubmit={handleSubmit}
        className="p-3  col-10 col-md-5 shadow-sm mt-5"
      >
        <h3 className="text-center form-color ">حساب جديد</h3>

        <div className="form-group">
          <label className="form-color">الاسم</label>
          <input
            className="form-control my-3"
            name="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-color">الإيميل</label>
          <input
            className="form-control my-3"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-color">كلمة المرور</label>{" "}
          <input
            name="password"
            className="form-control mb-3"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="auth-actions-ui align-items">
          <input
            type="submit"
            value="تسجيل"
            className="btn  btn-success btn-sm"
          />
          <Link to="/register" className="link text-primary ">
            تسجيل الدخول
          </Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterScreen
