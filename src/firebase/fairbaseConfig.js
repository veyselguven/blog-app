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

// database uzerinden de set methoduyla json turunden bir bilgiyi buraya yazabiliyoruz
// kayit ekleme
database
  .ref()
  .set({
    title: "BLOG TITLE 1",
    description: "Blog Description 1",
    authors: {
      name: "Veysel",
      surname: "Basbaydar",
    },
  })
  .then(() => {
    console.log("register added");
  })
  .catch((e) => {
    console.log("Error", e);
  });

console.log("application is running ");

// burda update yerine set kullanmis olsak diger alanlar silir sadece title kalir
// ama simdi sadece title i update yapiyor
database.ref().update({
  title: "blog title 2",
  //   authors: {
  //     name: "Hatun", // eger sadece name alanini yazarsak surname alanini siler o
  //     //yuzden surname inde kaybolmasini istemiyorsak yazmak zorundayiz veya
  //     //bu sekilde yazmak yerine assagidaki ornege bak
  //     surname: "Basbaydar",
  //   },

  "authors/name": "Hatun",
  imageUrl: "1.jpg", // olmayan birseyide burda ekleyebiliriz buda guncelllemenin bir parcasi
});

// veya bunu ayri yazmak yerine yukarida yazabiliriz. mesala simdi author alaninda yapicam yukarida
database.ref().update({
  description: "description is updated",
});

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
