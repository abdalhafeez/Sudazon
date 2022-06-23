import "./styles/categories.css"

function Categories() {
  return (
    <div className="categories row col-md-7 col-sm-12 ">
      <div className="category m-auto col-3 ">
        <div className="overlay">
          <p>اعرض كل الاحذية النسائية</p>
        </div>

        <div className="cat-container">
          <div className="title">
            <h4>نسائي</h4>
          </div>
          <i className="bi bi-gender-female"></i>
        </div>
      </div>
      <div className="category m-auto col-3 ">
        <div className="overlay">
          <p>اعرض كل الاحذية النسائية</p>
        </div>
        <div className="cat-container">
          {" "}
          <div className="title">
            <h4>رجالي</h4>
          </div>
          <i className="bi bi-gender-male"></i>
        </div>
      </div>
      <div className="category m-auto col-3 ">
        <div className="overlay">
          <p>اعرض كل الاحذية النسائية</p>
        </div>
        <div className="cat-container">
          {" "}
          <div className="title">
            <h4>اطفالي</h4>
          </div>
          <i className="bi bi-person-hearts"></i>
        </div>
      </div>
    </div>
  );
}

export default Categories