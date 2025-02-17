import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componets/Home.js';
import CreatProduct from './componets/CreatProduct.js';
import EditProduct from './componets/EditProduct.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatProduct" element={<CreatProduct />} />
        <Route path="/EditProduct/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
