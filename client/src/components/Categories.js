import { prods } from "../prods";
import "./styles/categories.css";
// const categories = prods.reduce((acc, current) => {
//   if (!acc?.includes(current.area)) {
//     acc.push(acc.area);
//   }
// }, []);
// console.log(categories);
function Categories({ screenWidth }) {
  console.log(screenWidth);
  return (
    <div className="categories col-12 ">
      {prods.slice(0, 4).map((prod) => (
        <>
          <div className="">
            <h6 className="cat-title ">{prod.area}</h6>
            {prod.images.slice(0, 4).map((image) => (
              <div className="">
                <img src={image} alt="category" className="" key={prod.id} />
              </div>
            ))}
          </div>
        </>
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
