// Import the functions you need from the SDKs you need

import firebase from "firebase/app";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR90XUOvtg5hIeqb1PrtnxRwDJOCbE014",
  authDomain: "react-blog-app-d450d.firebaseapp.com",
  databaseURL: "https://react-blog-app-d450d-default-rtdb.firebaseio.com/",
  projectId: "react-blog-app-d450d",
  storageBucket: "react-blog-app-d450d.appspot.com",
  messagingSenderId: "629395917147",
  appId: "1:629395917147:web:c25644ac669a474449327e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// burdan basit bir degeri data base e yazdiralim
// ilk olarak databease den bir referans alalim
const database = firebase.database();

const blogs = {
  101: {
    id: "1",
    title: "Blog title 1",
  },
  102: {
    id: "2",
    title: "Blog title 2",
  },
};
const users = {
  sadikturan: {
    name: "Sadik",
    surname: "Turan",
  },
  veyselguven: {
    name: "veysel",
    surname: "guven",
  },
};

// database.ref().set({
//   blogs,
//   users,
// });

database
  .ref("blogs/102")
  .once("value")
  .then((snapshot) => console.log(snapshot.val()));
database
  .ref("users/veyselguven")
  .once("value")
  .then((snapshot) => console.log(snapshot.val()));

// yapmis oldugumuz seylerle alakali bir degisiklik yapmak istersek

database.ref("blogs/-Mwhw5u_X0DnQGNM7Vyv").set({
  id: 4,
  title: "blog title 4",
});

database.ref("products").push({
  name: "Samsung s5",
  price: 3000,
  isApproved: true,
});
database.ref("products").push({
  name: "Samsung s6",
  price: 4000,
  isApproved: false,
});
database.ref("products").push({
  name: "Samsung s7",
  price: 4000,
  isApproved: true,
});
// olusturmus oldugumuz liste uzerine bir eleman eklemek istersek

// database.ref("blogs").push({
//   id: 3,
//   title: "blog title 3",
// });
// database.ref("blogs").push({
//   id: 3,
//   title: "blog title 3",
// });

// bunu bole yapmaktansa

// const blogs = [
//   {
//     id: "1",
//     title: "blog title 1",
//   },
//   {
//     id: "2",
//     title: "blog title 2",
//   },
//   {
//     id: "3",
//     title: "blog title 3",
//   },
// ];

// const users = [
//   {
//     id: 1,
//     name: "Sadik",
//   },
//   {
//     id: 2,
//     name: "Veysel",
//   },
//   {
//     id: 1,
//     name: "Basbaydar",
//   },
// ];

/* 
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
*/

// // database uzerinden de set methoduyla json turunden bir bilgiyi buraya yazabiliyoruz
// // kayit ekleme
// database
//   .ref()
//   .set({
//     title: "BLOG TITLE 1",
//     description: "Blog Description 1",
//     authors: {
//       name: "Veysel",
//       surname: "Basbaydar",
//     },
//   })
//   .then(() => {
//     //  console.log("register added");
//   })
//   .catch((e) => {
//     console.log("Error", e);
//   });

// console.log("application is running ");
///-----------------------
//KAYIT QUERY
// kayitlari secip daha sonra bir bilgi istemiyorsak ONCE kulllanilir
//kayiti sectik dayabase uzerinde herhangi bir degisiklik varsa  yani degisiklikler aninda
// veri tabanina gelsin yani degisiklikleride kontrol edicek bir yapinin olusturulmasini
// istiyorsa ON methodunu kullanicaz
// ref yazarak direk root a konumlaniyoruz mesala icine authors yazdigimizda direk oraya konumlar

// database
//   .ref("authors/name")
//   .once("value") // veri okurken once methodu ve on methodu, once da okuruz ve veri tabanindan baglantimiz kopar
//   .then((snapshot) => {
//     const blog = snapshot.val();
//     console.log(blog);                  // root ta objenin hepsi cikar, authorsta sadece author cikar authors/name ise sadece Veysel cikar
//   })
//   .catch((e) => {
//     console.log("reading error", e);
//   });
// database.ref().on("value", (snapshot) => {
//   const blog = snapshot.val();
//   console.log(blog);
// });

// setTimeout(() => {
//   database.ref("title").set("updated blog Title 1");
// }, 3000);
// setTimeout(() => {
//   database.ref().off(); // bu baglantiyi koparmak istiyorsak off koyariz
//   //set("updated blog Title 2");
// }, 6000);
// setTimeout(() => {
//   database.ref("title").set("updated blog Title 3");
// }, 9000);
/* 
fad
fads
fwasdv
fadv
dafssf
*/
//UPDATE

// burda update yerine set kullanmis olsak diger alanlar silir sadece title kalir
// ama simdi sadece title i update yapiyor
// database.ref().update({
//   title: "blog title 2",
//   //   authors: {
//   //     name: "Hatun", // eger sadece name alanini yazarsak surname alanini siler o
//   //     //yuzden surname inde kaybolmasini istemiyorsak yazmak zorundayiz veya
//   //     //bu sekilde yazmak yerine assagidaki ornege bak
//   //     surname: "Basbaydar",
//   //   },

//   "authors/name": "Hatun",
//   imageUrl: "1.jpg", // olmayan birseyide burda ekleyebiliriz buda guncelllemenin bir parcasi
// });
// // direk authors uzerinden de update islemi yapabiliriz
// database.ref("authors").update({
//   name: "Robin",
// });

// // veya bunu ayri yazmak yerine yukarida yazabiliriz. mesala simdi author alaninda yapicam yukarida
// database.ref().update({
//   description: "description is updated",
// });

/* 
fad
fads
fwasdv
fadv
dafssf
*/

///----------------------------------
///----------------------------------
///----------------------------------
//REMOVE

// alternatif silme islemi
// sadece title i siler
//database.ref("title").set(null);
// hepsini siler
//database.ref().set(null);
///-----------------------
///-----------------------
///-----------------------

//deleted islemi

// database
//   .ref("title")
//   .remove()
//   .then(() => {
//     console.log("title is deleted");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// database
//   .ref("authors/name")
//   .remove()
//   .then(() => {
//     console.log("author is deleted");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// hepsini silmek istersek

// database
//   .ref("")
//   .remove()
//   .then(() => {
//     console.log("all information deleted");
//   })
//   .catch((e) => {
//     console.log(e);
//   });
//--------------------------------
//--------------------------------
//--------------------------------

//databse ref demekle  biz root kaydini almis oluyoruz
//database.ref().set("New register");

// bu sekilde yazarsak hepsi degisir sadece title gozukur
// database.ref().set({
//   title: "Blog title 1",
// });

// title yazarak digerlerinin silinmesini onluyoruz ve title i degistiriyoruz
// database.ref("title").set("blog title degisir sadece");

// database.ref("description").set("description degisir");

// database.ref("authors").set({
//   name: "Hatun",
//   surname: "Basbaydar",
// });

// sadece authors icindeki name bilgisini degistirmek istersek
//database.ref("authors/name").set("alex");

// yeni birsey eklemek istersek

// database.ref("tags").set(["react", "javascript", "angular"]);

// database.ref("tags").set(["react", "javascript", "asp"]);
