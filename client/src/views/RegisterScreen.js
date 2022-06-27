import "./styles/login.css"
import { useState } from "react"

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../store/actions/userActions";
import CheckOutLine from "../components/CheckOutLine";
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const { loading, error, token, user } = userInfo;
  console.log(token);
  const navigate = useNavigate();
  user && navigate("/shipping");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAction({ name, password, email }));
  };
  token && window.location.replace("/");

  return (
    <div className=" wrapper">
      <CheckOutLine step1 />
      <form
        onSubmit={handleSubmit}
        className=" p-3  col-10 col-md-7 shadow-sm m-auto mt-3"
      >
        <h3 className="text-center tx-coral ">حساب جديد</h3>

        <div className="f-grp">
          <label className="tx-lt">الاسم</label>
          <input
            className="style-input my-3"
            name="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="f-grp">
          <label className="form-color">الإيميل</label>
          <input
            className="style-input my-3"
            name="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="f-grp">
          <label className="tx-lt">كلمة المرور</label>{" "}
          <input
            name="password"
            className="style-input mb-3"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="auth-actions-ui align-items mt-5">
          <input value="تسجيل" type="submit" className="cu-btn-cyan" />
          <div>
            <small>لديك حساب؟ </small>
            <Link to="/login" className="cu-btn-dark-outline m-2">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen
