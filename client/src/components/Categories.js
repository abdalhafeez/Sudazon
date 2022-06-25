import { beauty, prods } from "../prods";
import "./styles/categories.css";

function Categories({ screenWidth }) {
  console.log(screenWidth);
  return (
    <div className="categories col-md-9 col-12">
      {/* <div
        
        style={{ width: `${screenWidth / 3}px` }}
      >
        <img src={prods[1].images[0]} alt="" className="category " />
      </div> */}
      {beauty[0].images.map((image) => (
        <div
        // style={{
        //   width: `${screenWidth }px`,
        // }}
        >
          <div className="text-center text-dark">this is a title</div>
          <img src={image} alt="" className=" " />
        </div>
      ))}

      {/*       
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
      </div> */}
    </div>
  );
}

export default Categories;
