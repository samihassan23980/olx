
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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

async function signin(email, password) {
 const user = await signInWithEmailAndPassword(auth, email, password)
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

async function signout() {

  const done = await signOut(auth)
    .then(() => {
      alert('You are Logout Done')
    }).catch((error) => {
      // An error happened.
    });
}

async function addProduct(title, description, price, Catogery, file) {
  try {
    const url = await sendFile(file)
    const docRef = await addDoc(collection(db, Catogery), {
      title,
      description,
      price,
      imageurl: url,
      Catogery
    });
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

async function getAds(Mobiles) {
  const res = await getDocs(collection(db, Mobiles))
  const list = []
  res.forEach((doc) => {
    const getAllUsers = doc.data()
    getAllUsers.userID = doc.id
    list.push(getAllUsers)
  })
  return list
}

async function userData(catogery, id) {
  const docRef = doc(db, catogery, id);
  const docSnap = await getDoc(docRef);
  return docSnap.data()
}


export {
  signin,
  signup,
  addProduct,
  getAds,
  userData,
  signout
}