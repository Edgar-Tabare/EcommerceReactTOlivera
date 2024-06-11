import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./conteiners/itemlistcontainer/itellistcontainer";
import ItemDetailContainer from "./conteiners/itemldetailcontainer/itemldetailcontainer"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  const [categoria, setCategoria] = useState("todos");

  return (
    <>
      <BrowserRouter>  

          <Navbar />

          <Routes>            
          <Route path="/" element={<ItemListContainer />}/>         
          <Route path="/category/:category" element={<ItemListContainer />}/>
          <Route path="/item/:id"element={ <ItemDetailContainer  />}/>
          
          </Routes> 
         
      </BrowserRouter>
    </>
  );
}

export default App;
