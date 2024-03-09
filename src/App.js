import { Route, Routes } from "react-router-dom";
import Main from "./pages/main-view/Main";
import SingleCar from "./pages/single-car/Single-car";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/single-car/:id" element={<SingleCar />}/>
    </Routes>
  );
}

export default App;
