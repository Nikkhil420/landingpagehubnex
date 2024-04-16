import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MainPage from "./MainPage/MainPage";

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
export default App;
