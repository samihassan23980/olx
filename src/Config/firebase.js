// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCELBDif9IX_bWENJNph-3oZ9YxOOsn4nE",
  authDomain: "olxsdad.firebaseapp.com",
  projectId: "olxsdad",
  storageBucket: "olxsdad.appspot.com",
  messagingSenderId: "95597977650",
  appId: "1:95597977650:web:7375530ad4ff09619d1c2b",
  measurementId: "G-QBQSMFL9EZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
const storage = getStorage();

function signin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(alert('sucseesfull'))
}

function signup(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });

      } catch (e) {
        console.error("Error adding document: ", e);
      }

    })
}

async function addProduct(title, description, price, file) {
  try {
    const url = await sendFile(file)
    const docRef = await addDoc(collection(db, "productdetails"), {
      title,
      description,
      price,
      imageurl: url
    });
    console.log("Document written with ID: ", docRef.id);
    alert(docRef.id)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function sendFile(image) {
  try {
    const imagesRef = ref(storage, 'images/' + image.name);
    await uploadBytes(imagesRef, image)
    const url = getDownloadURL(imagesRef)
    return url
  }

  catch (e) {
    alert(e.message)
  }

}

async function getAds() {
  const res = await getDocs(collection(db, "productdetails"))
  const list = []
  res.forEach((doc) => {
    const getAllUsers = doc.data()
    getAllUsers.userID = doc.id
    list.push(getAllUsers)
  })
  return list
}

async function userData(id) {
  const docRef = doc(db, "productdetails", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}


export {
  signin,
  signup,
  addProduct,
  getAds,
  userData
}