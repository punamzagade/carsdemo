import { BrowserRouter,Route, Routes } from "react-router-dom";
import Article from "./Article";
import Home from "./Home";


function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/article/:id" element={<Article />}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
