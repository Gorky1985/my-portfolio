import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Main from "./components/Main";
import GalleryGrid from "./components/GalleryGrid";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modals from "./components/Modals";

function App() {
  const [galleryItem, setGalleryItem] = useState([]);
  let [imageItem, setImageItem] = useState(null);

  async function fetchItems() {
    const response = await fetch("galleryData.json");
    setGalleryItem(await response.json());
  }
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="padding-large" id="main">
        <Header />
        <Main />
        <GalleryGrid
          galleryItem={galleryItem}
          onChoice={(info) => {
            setImageItem(info);
          }}
        />
        {imageItem && (
          <Modals
            image={imageItem}
            handleClose={() => {
              setImageItem(null);
            }}
            handleChange={(info) => {
              setImageItem(galleryItem[info]);
            }}
          />
        )}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
