import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js"

const appSettings = {
  apiKey: "AIzaSyBwbrvnd5Ncd7Hlv08xcJRje2ZuwLzmjEc",
  authDomain: "comascriptworld.firebaseapp.com",
  databaseURL: "https://comascriptworld-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comascriptworld",
  storageBucket: "comascriptworld.appspot.com",
  messagingSenderId: "482429157622",
  appId: "1:482429157622:web:d74f720de6d994406c2cd7",
  measurementId: "G-H6KTW6GKRM"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesInDB = ref(database, "movies")
console.log(app);

const textField = document.getElementById('input_field');
const addCartButton = document.getElementById('add-button');

addCartButton.addEventListener('click', () => {
  // push(moviesInDB, textField.value)
  set(moviesInDB, {
    'movieTitle': textField.value,
    'movieLead': textField.value
  })
  console.log(textField.value);
})
