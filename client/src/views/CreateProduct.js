import "./styles/createProduct.css";
import { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productCreateAction } from "../store/actions/productsActions";
import Errors from "../components/Errors";
import { axiosInstance } from "../utils/axiosInstance";
function CreateProduct({ cream, shoes }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [inStack, setInStack] = useState("");
  const [images, setImages] = useState([]);
  const [errors, setErrors] = useState([]);
  const [characteristics, seCharacteristics] = useState([]);
  const [ingredient, setIngredient] = useState([]);
  const [smell, setSmell] = useState("");
  const [usedFor, setUsedFor] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  useEffect(() => {
    setType(cream ? "منتجات التجميل" : "الاحذية و الملبوسات");
  }, [cream, shoes]);
  // const [reviews, setReviews] = useState("")
  const dispatch = useDispatch();
  const creatingProduct = useSelector((state) => state.addedProduct);
  const { item, error, loading } = creatingProduct;
  useEffect(() => setErrors(error), [error]);
  const body = {
    name,
    size,
    color,
    inStack,
    price,
    description,
    category,
    brand,
    images,
    reviews: [],
    characteristics,
    ingredient,
    smell,
    usedFor,
    type,
    manufacturer,
  };
  console.log(item);

  const createProductHandler = async (e) => {
    e.preventDefault();
    dispatch(productCreateAction(body));
    // setName("");
    // setPrice("");
    // setDescription("");
    // setCategory("");
    // setBrand("");
    // setSize("");
    // setColor("");
    // setInStack("");
    // setImages("");
    // setErrors("");
    // setIngredient("");
    // setSmell("");
    // setUsedFor("");
    // setManufacturer("");
    setTimeout(() => {
      setErrors([]);
    }, 5000);
  };
  const handleUpload = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    for (const file of files) {
      formData.append("images", file);
    }
    const config = {
      headers: {
        "Content-Type": "mutipart/form-data",
      },
    };
    try {
      const res = await axiosInstance.post("/uploads", formData, config);
      setImages(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" row create-product col-12 pt-2">
      <Form
        autoComplete="off"
        className="col-12  m-auto bg-white shadow-sm p-3"
        onSubmit={createProductHandler}
      >
        <h2 className=" text-center tx-coral fm-amiri">اضافة منتج</h2>
        {errors && <Errors errors={errors} />}
        <Form.Group>
          <Form.Label className="mt-3">اسم المنتج</Form.Label>
          <Form.Control
            autoCompete="off"
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="اوصف عنوانك الحالي"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label className="mt-3">وصف للمنتج</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            placeholder="اكتب وصف للمنتج"
          ></Form.Control>
        </Form.Group>

        {shoes && (
          <Row>
            <Form.Group className="mt-3 col-4 m-auto">
              <Form.Label className="">ماركة المنتج</Form.Label>
              <Form.Select
                type="text"
                onChange={(e) => setBrand(e.target.value)}
                name="brand"
                defaultValue="أديداس"
              >
                <option value="نايكي">نايكي</option>
                <option value=" أديداس"> أديداس</option>
                <option value="كونفرس">كونفرس</option>
                <option value=" روك"> روك</option>
                <option value=" إيطالية"> إيطالية</option>
                <option value=" بولو"> بولو</option>
                <option value=" بوما"> بوما</option>
                <option value=" أرت ورك"> أرت ورك</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3 col-4 m-auto">
              <Form.Label className="">المقاس </Form.Label>
              <Form.Select
                type="text"
                onChange={(e) => setSize(e.target.value)}
                name="size"
                defaultValue="34"
              >
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3 col-4 m-auto">
              <Form.Label className="">نوع الصنف</Form.Label>
              <Form.Select
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                defaultValue="رجالي"
              >
                <option value="رجالي">رجالي</option>
                <option value="نسائي">نسائي</option>
                <option value="شبابي">شبابي</option>
                <option value="اطفالي">اطفالي</option>
              </Form.Select>
            </Form.Group>
          </Row>
        )}
        {cream && (
          <Col>
            {" "}
            <Row>
              <Form.Group className="mt-3 col-5 m-auto">
                <Form.Label className=""> مواصفات المنتج</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => seCharacteristics(e.target.value)}
                  name="characteristics"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mt-3 col-6 m-auto">
                <Form.Label className="">المكونات</Form.Label>{" "}
                <Form.Control
                  type="text"
                  onChange={(e) => setIngredient(e.target.value)}
                  name="ingredient"
                ></Form.Control>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group className="mt-3 col-4 m-auto">
                <Form.Label className=""> الرائحة</Form.Label>{" "}
                <Form.Control
                  type="text"
                  onChange={(e) => setSmell(e.target.value)}
                  name="smell"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mt-3 col-4 m-auto">
                <Form.Label className=""> الاستخدام</Form.Label>{" "}
                <Form.Control
                  type="text"
                  onChange={(e) => setUsedFor(e.target.value)}
                  name="usedFor"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mt-3 col-4 m-auto">
                <Form.Label className=""> الشركة المصنع</Form.Label>{" "}
                <Form.Control
                  type="text"
                  onChange={(e) => setManufacturer(e.target.value)}
                  name="manufacturer"
                ></Form.Control>
              </Form.Group>
            </Row>
          </Col>
        )}
        <Row>
          {" "}
          <Form.Group className="mt-3 col-4 m-auto">
            <Form.Label className="mt-3">السعر </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              name="price"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mt-3 col-4 m-auto">
            <Form.Label className="mt-3">اللون</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setColor(e.target.value)}
              name="color"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mt-3 col-4 m-auto">
            <Form.Label className="mt-3">العدد</Form.Label>
            <Form.Control
              type="Number"
              onChange={(e) => setInStack(e.target.value)}
              name="inStack"
            ></Form.Control>
          </Form.Group>
        </Row>
        <Form.Group className="mt-3 col-12 m-auto">
          <Form.Label className="mt-3">اضف صور للمنتج</Form.Label>
          <Form.Control
            type="file"
            multiple
            onChange={handleUpload}
            name="images"
          ></Form.Control>
        </Form.Group>
        <div className="align-items">
          {/* <button className="btn  btn-dark">الغاء</button> */}
          {/* <span></span> */}
          <button className="btn btn-success ms-1 me-auto mt-3" type="submit">
            اضافة
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateProduct;
