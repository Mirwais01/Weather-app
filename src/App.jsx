import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Today from "./pages/Today";
import Hourly from "./pages/Hourly";
import TenDay from "./pages/TenDay";
import Weekend from "./pages/Weekend";
import Monthly from "./pages/Monthly";
import { GlobalContextProv } from "./contexts/GlobalContext";

function App() {
  return (
    <GlobalContextProv>
      <BrowserRouter>
        <Routes>
          <Route index path="" element={<HomePage />} />
          <Route path="today" element={<Today />} />
          <Route path="hourly" element={<Hourly />} />
          <Route path="tenDay" element={<TenDay />} />
          <Route path="weekend" element={<Weekend />} />
          <Route path="monthly" element={<Monthly />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProv>
  );
}

export default App;
