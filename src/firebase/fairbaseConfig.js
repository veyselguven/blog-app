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
