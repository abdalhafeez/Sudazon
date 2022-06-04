import React from 'react'
import {Button} from "react-bootstrap"
function JoinBtns() {
  return (
    <div >
      {" "}
      <Button className=" mx-2 btn-sm " variant="light">
        تسجيل الدخول
      </Button>
      <Button variant="outline-light" className=" mx-2 btn-sm">
        حساب جديد
      </Button>
     </div>
  )
}

export default JoinBtns