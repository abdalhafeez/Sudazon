import React from 'react'

function Rating() {
  return (
    <div>
      <div className="levels">
        <i class="bi bi-star" style={{ fontSize: 20, color: "coral" }}>
          {" "}
        </i>
        <i class="bi bi-star-half" style={{ fontSize: 20, color: "coral" }}></i>
        <i class="bi bi-star-fill" style={{ fontSize: 20, color: "coral" }}></i>
        <i class="bi bi-star-fill" style={{ fontSize: 20, color: "coral" }}></i>
        <i class="bi bi-star-fill" style={{ fontSize: 20, color: "coral" }}></i>
      </div>
      <button className="button btn-sm btn-info btn m-2">تعليق</button>
    </div>
  )
}

export default Rating