import "./styles/login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckOutLine from "../components/CheckOutLine";
import { loginUser } from "../store/actions/userActions";
import Container from "../components/Container";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const { loading, error, token, user } = userInfo;
  console.log(token);
  const navigate = useNavigate();
  user && navigate("/shipping");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
  };
  token && window.location.replace("/");

  return (
    <div className="wrapper">
      <CheckOutLine step1 />
      <form
        onSubmit={handleSubmit}
        className=" p-3  col-10 col-md-7 shadow-sm m-auto mt-3"
      >
        <h3 className="text-center tx-coral ">تسجيل الدخول </h3>

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
          <label className="form-color">كلمة المرور</label>{" "}
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
            <small>زبون جديد؟</small>
            <Link to="/register" className="cu-btn-dark-outline m-2">
              حساب جديد
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
