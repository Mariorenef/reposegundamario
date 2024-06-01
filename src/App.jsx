import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { ItemlistContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemlistContainer aviso={"Ejemplo"} />} />
        <Route path="/item/:id" element={<ItemDetailContainer itemId={1} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;