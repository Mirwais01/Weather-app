import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Today from "./pages/Today";
import Hourly from "./pages/Hourly";
import TenDay from "./pages/TenDay";
import Weekend from "./pages/Weekend";
import Monthly from "./pages/Monthly";

function App() {
  // const [query, setQuery] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [data, setData] = useState([]);

  // const apiKey = "a588e74b18360bd7b2d9e18a0cd9a986";

  // useEffect(
  //   function () {
  //     async function getData() {
  //       try {
  //         setLoading(true);
  //         const response = await fetch(
  //           `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
  //         );
  //         const rData = await response.json();
  //         setData(rData);
  //         console.log(rData);
  //       } catch (e) {
  //         setError(e);
  //       } finally {
  //         setLoading(false);
  //       }
  //     }
  //     getData();
  //   },
  //   [query]
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/today" element={<Today />} />
        <Route path="/hourly" element={<Hourly />} />
        <Route path="/tenDay" element={<TenDay />} />
        <Route path="/weekend" element={<Weekend />} />
        <Route path="/monthly" element={<Monthly />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
