import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Steak from "./Components/Food/Steak";
import Gamburger from "./Components/Food/Gamburger";
import Slider from "./Components/Slider/Slider";
import { Route, Routes } from "react-router-dom";
import Sushi from "./Components/Food/Sushi";
import { slidesData } from "./Components/Slider/SliderJs";


function App() {
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Slider slides={slidesData} />}></Route>
        <Route path="/Golden-Steak" element={<Steak />}></Route>
        <Route path="/Gamburger-with-free" element={<Gamburger />}></Route>
        <Route path="/Sushi" element={<Sushi />}></Route>
      </Routes>
    </div>
  );
}

export default App;
