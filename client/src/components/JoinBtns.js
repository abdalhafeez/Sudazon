import React from 'react'
import {Button} from "react-bootstrap"
function JoinBtns() {
  return (
    <div className="join-btns ">
      {" "}
      <Button className=" mx-1 btn-sm " variant="light">
        تسجيل الدخول
      </Button>
      <Button variant="outline-light" className=" mx-1 btn-sm">
        حساب جديد
      </Button>
    </div>
  )
}

export default JoinBtns