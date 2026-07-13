import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
