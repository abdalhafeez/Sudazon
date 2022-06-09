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
      <div className="reviews">
        <button className="button btn-sm btn-dark btn m-2">تعليق</button>
        <span className=" text-muted small">5 علقوا عى هذا</span>
        <span className="check-reviews">عرض المراجات</span>
      </div>
    </div>
  )
}

export default Rating