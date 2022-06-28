import "./styles/footer.css";
export default function Footer() {
  return (
    <footer className="">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6 m-auto pr-md-5">
            <a href="#" className="footer-site-logo d-block mb-4">
              Colorlib
            </a>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quasi perferendis ratione perspiciatis accusantium.
            </p>
          </div>
          <div className="col-md-3 col-6 m-auto">
            <ul className="list-unstyled nav-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 m-auto">
            <ul className="list-unstyled nav-links">
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Journal</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-6 m-auto">
            <ul className="list-unstyled nav-links">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Partners</a>
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
