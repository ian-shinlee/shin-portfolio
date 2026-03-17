import './App.scss';
import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "./firebase";
import Header from "./components/modules/Header/Header";
import Main from "./components/modules/Main/Main";
import Works from "./components/modules/Works/Works";
import Contact from "./components/modules/Contact/Contact";
import Footer from "./components/modules/Footer/Footer";

function App() {

  const [works, setWorks] = useState([]);

  const getWorks = async () => {
    const q = query(collection(db, "works"), orderBy("order", "desc"));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setWorks(data);
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main />
      <Works works={works} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
