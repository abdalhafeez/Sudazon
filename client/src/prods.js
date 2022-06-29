// import img1 from "./assets/11.jpg"
// import img2 from "./assets/33.jpg"
// import img3 from "./assets/22.jfif"
// import img4 from "./assets/66.jfif"
// import img5 from "./assets/77.jfif"
// import img6 from "./assets/88.jfif"
// import img7 from "./assets/99.jfif"

import cream1 from "./assets/prods/cream/cream(1).jpg";
import cream2 from "./assets/prods/cream/cream(2).jpg";
import cream3 from "./assets/prods/cream/cream(3).jpg";
import cream4 from "./assets/prods/cream/cream(4).jpg";
import cream5 from "./assets/prods/cream/cream(5).jpg";
import cream6 from "./assets/prods/cream/cream(6).jpg";

// import home1 from "./assets/prods/tools/home(1).jpg";
// import home2 from "./assets/prods/tools/home(2).jpg";
// import home3 from "./assets/prods/tools/home(3).jpg";

import pink1 from "./assets/prods/shoes/pink/pink(1).jpg";
import pink2 from "./assets/prods/shoes/pink/pink(2).jpg";
import pink3 from "./assets/prods/shoes/pink/pink(3).jpg";
import pink4 from "./assets/prods/shoes/pink/pink(4).jpg";
import pink5 from "./assets/prods/shoes/pink/pink(5).jpg";

import green1 from "./assets/prods/shoes/green/green(1).jpg";
import green2 from "./assets/prods/shoes/green/green(2).jpg";
import green3 from "./assets/prods/shoes/green/green(3).jpg";
import green4 from "./assets/prods/shoes/green/green(4).jpg";
import green5 from "./assets/prods/shoes/green/green(5).jpg";
import green6 from "./assets/prods/shoes/green/green(6).jpg";

import couch1 from "./assets/prods/couch/couch(1).jpg";
import couch2 from "./assets/prods/couch/couch(2).jpg";
import couch3 from "./assets/prods/couch/couch(3).jpg";
import couch4 from "./assets/prods/couch/couch(4).jpg";
import couch5 from "./assets/prods/couch/couch(5).jpg";
import couch6 from "./assets/prods/couch/couch(6).jpg";

import black1 from "./assets/prods/shoes/black/black(1).jpg";
import black2 from "./assets/prods/shoes/black/black(2).jpg";
import black3 from "./assets/prods/shoes/black/black(3).jpg";
import black4 from "./assets/prods/shoes/black/black(4).jpg";
import black5 from "./assets/prods/shoes/black/black(5).jpg";
import black6 from "./assets/prods/shoes/black/black(6).jpg";
import black7 from "./assets/prods/shoes/black/black(7).jpg";
import logo from "./assets/logo.jpg";

export const prods = [
  {
    price: 12000,
    area: "الاحذية و الملبوسات",
    characteristics: [],
    inStock: 4,
    id: 1,
    desc: "حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما",
    name: "              حذاء رياضي برقبة منخفضة",
    images: [pink1, pink2, pink3, pink4, pink5],
  },

  {
    price: 5000,
    inStock: 4,
    area: "الاحذية و الملبوسات",
    characteristics: [],
    id: 2,
    desc: "حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما",
    name: "Nike - نايكي",
    images: [green3, green4, green5, green6],
  },
  {
    price: 5000,
    inStock: 4,
    area: "الاحذية و الملبوسات",
    characteristics: [],
    id: 3,
    desc: "حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما",
    name: "نايكي رياضي",
    images: [black1, black2, black3, black4, black5, black6, black7],
  },
  {
    id: 4,
    images: [cream1, cream2, cream3, cream4, cream5, cream6],
    name: "مرطب بشرة اديل",
    desc: "حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما",
    smell: "بدون رائحة",
    brand: "سلامة الطبية",
    usedFor: "لازالة حبة الشباب و تفتيح البشرة",
    category: "بشرة",
    area: "منتجات التجميل",
    characteristics: [],
    medical: true,
  },
  {
    id: 5,
    images: [couch1, couch2, couch3, couch4, couch5, couch6],
    name: "مرطب بشرة اديل",
    desc: "حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما",
    smell: "بدون رائحة",
    brand: "سلامة الطبية",
    usedFor: "لازالة حبة الشباب و تفتيح البشرة",
    category: "بشرة",
    area: "ادوات و اثاث المنزل",
    characteristics: [],
    medical: true,
  },
  {
    logo: logo,
    id: 5,
    images: [couch1, couch2, couch3, couch4, couch5, couch6],
    name: "مرطب بشرة اديل",
    desc: "حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما",
    smell: "بدون رائحة",
    brand: "سلامة الطبية",
    usedFor: "لازالة حبة الشباب و تفتيح البشرة",
    category: "بشرة",
    area: "ادوات و اثاث المنزل",
    characteristics: [],
    medical: true,
  },
  // {
  //   id: 5,
  //   images: [],
  //   name: "لاس فوس",
  //   desc: "حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما",
  //   smell: "بدون رائحة",
  //   brand: "سلامة الطبية",
  //   usedFor: "لحماية فروة الراس",
  //   category: "شعر",
  //   area: "التجميل",
  //   characteristics: [],
  //   medical: true,
  // },
  // {
  //   id: 6,
  //   image: [],
  //   name: "مرطب بشرة اديل",
  //   desc: " حذاء مريح للمشي ، يساعدك موقع تكتيك على الاختيار بين المنتجات والمستلزمات الرياضية من خلال تقديم خدمة ما ",
  //   smell: "بدون رائحة",
  //   brand: "سلامة الطبية",
  //   usedFor: "لازالة حبة الشباب و تفتيح البشرة",
  //   category: "بشرة",
  //   area: "التجميل",
  //   characteristics: [],
  //   medical: true,
  // },
];
