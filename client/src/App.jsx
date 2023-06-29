import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreatePost/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
