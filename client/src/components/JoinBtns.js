import React from 'react'
import "./styles/joinBtns.css"
import { Link } from "react-router-dom"
function JoinBtns() {
  return (
    <div className="join-btns ">
      {" "}
      <Link to="/login" className=" mx-1 ">
        تسجيل الدخول
      </Link>
      <Link to="/register" className=" mx-1">
        حساب جديد
      </Link>
    </div>
  )
}

export default JoinBtns