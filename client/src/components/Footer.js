import { prods } from "../prods";
import "./styles/footer.css";
export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6 m-auto pr-md-5">
            <div className="footer-site-logo d-block mb-1">
              <img src={prods[5].logo} alt="" />
            </div>
            <p>
              <span className="tx-coral b">سودازون</span> للتسوق عبر الانترنيت‘
              يتيح لك الفرصة لكسب وقتك بشرا~ك كل ما تحتاج من مكانك
            </p>
          </div>
          <div className="col-md-3 col-6 m-auto">
            <ul className="list-unstyled">
              <li>
                <a href="#">الصفحة الرئيسئة</a>
              </li>
              <li>
                <a href="#">خدماتنا</a>
              </li>
              <li>
                <a href="#">تواصل معنا</a>
              </li>
              <li>
                <a href="#">تعرف علينا</a>
              </li>
              <li>
                <a href="#">مدونة الموقع</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 m-auto">
            <ul className="list-unstyled nav-links">
              <li>
                <a href="#">العملاء</a>
              </li>
              <li>
                <a href="#">فريق سودازون</a>
              </li>
              <li>
                <a href="#">التوظيف</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 m-auto">
            <ul className="list-unstyled nav-links">
              <li>
                <a href="#">سياسة الخصوصية</a>
              </li>
              <li>
                <a href="#">الشروط &amp; الضوابط</a>
              </li>
              <li>
                <a href="#">شركائنا</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row ">
          <div className="col-12 text-center">
            <div className="copyright mt-1 pt-5">
              <p>
                <small>&copy; 2019-2020 All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
