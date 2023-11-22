import { BrowserRouter, Routes, Route } from "react-router-dom";
import Redirect from "./Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:url" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
