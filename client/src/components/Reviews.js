import Rating from "./Rating";
import "./styles/reviews.css";
function Reviews({ prods }) {
  return (
    <div className="reviews col-md-11 col-sm-11 mms-md-auto  mt-3 row">
      <div className="col-11">
        <h4 className="tx-dark">المراجعات</h4>
        <button className="cu-btn-dark m-1">تعليق</button>
        <span className=" text-muted small">5 علقوا عى هذا</span>
      </div>
      <div className="review col-md-6 col-sm-12 my-3 row">
        <header className="col-12 row">
          <div className="image-container col-2">
            <img src={prods[4].images[2]} alt="user" className="img-sm" />
          </div>
          <h6 className="user-name col-7 m-auto"> محمد علاءالدين</h6>{" "}
          <div className="col-12 row">
            <Rating col={5} />
            <h6 className="tx-lt-dark col-7 ms-1"> الخامة حلوة و باردة </h6>
          </div>
        </header>
        <p className="review-text">
          صراحة حبيت الخامة ياخ. بتمنى تنوعوا اللون و ممكن الارضية دي تكون عالية
          شوية{" "}
        </p>
      </div>
      <div className="review col-md-6 col-sm-12 my-3 row">
        <header className="col-12 row">
          <div className="image-container col-2">
            <img src={prods[3].images[2]} alt="user" className="img-sm" />
          </div>
          <h6 className="user-name col-7 m-auto">عبدالحفيظ اسماعيل</h6>{" "}
          <div className="col-12 row">
            <Rating col={5} />
            <h6 className="tx-lt-dark col-7 ms-1">حذاء مريح للمشي</h6>
          </div>
        </header>
        <p className="review-text">
          ، يساعدك موقع تكتيك والمستلزمات الرياضية من خلال تقديم خدمةحذاء مريح
          للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات
        </p>
      </div>
    </div>
  );
}

export default Reviews;
