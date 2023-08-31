import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
