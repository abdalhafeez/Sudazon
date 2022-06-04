import "./styles/categories.css"

function Categories() {
  return (
    <div className="categories row col-md-7 col-sm-12 ">
      <div className="category m-auto col-3 ">
        <div className="overlay">
          <h6>اعرض كل الاحذية النسائية</h6>
          <p>تجد عندنا الجديد و الموضة</p>
        </div>

        <div className="cat-container">
          <div className="title">
            <h4>نسائي</h4>
          </div>
          <i class="bi bi-gender-female"></i>
        </div>
      </div>
      <div className="category m-auto col-3 ">
        <div className="overlay">
          <h6>اعرض كل الاحذية النسائية</h6>
          <p>تجد عندنا الجديد و الموضة</p>
        </div>
        <div className="cat-container">
          {" "}
          <div className="title">
            <h4>رجالي</h4>
          </div>
          <i class="bi bi-gender-male"></i>
        </div>
      </div>
      <div className="category m-auto col-3 ">
        <div className="overlay">
          <h6>اعرض كل الاحذية النسائية</h6>
          <p>تجد عندنا الجديد و الموضة</p>
        </div>
        <div className="cat-container">
          {" "}
          <div className="title">
            <h6>اطفالي</h6>
          </div>
          <i class="bi bi-person-hearts"></i>
        </div>
      </div>
    </div>
  )
}

export default Categories